/* =============================================================
   🗄️ DATOS — la ÚNICA puerta para guardar y leer información
   · Sin Supabase en config.js → guarda en el navegador (localStorage).
   · Con CONFIG.supabase.url y .clave → guarda en la nube (Supabase).
   El resto del proyecto no cambia: usa siempre Datos.listar/crear/…
   Por eso todas las funciones son "async": la nube tarda en responder.
   ============================================================= */

const Datos = (() => {
  const prefijo = "loslicenciados_";

  // Datos de ejemplo por tabla (vienen de config.js)
  const ejemplos = {
    [CONFIG.tabla]: CONFIG.datosEjemplo || [],
    mensajes: CONFIG.mensajesEjemplo || [],
  };

  // ¿Hay Supabase configurado en config.js? Si no, todo se guarda en el navegador.
  const sb = CONFIG.supabase || {};
  const nube = sb.url && sb.clave ? { url: sb.url.trim().replace(/\/+$/, ""), clave: sb.clave.trim() } : null;
  const soloLocal = new Set(); // tablas que no existen en Supabase: se guardan en el navegador

  // =============== MODO NAVEGADOR (localStorage) ===============
  function leer(tabla) {
    try {
      const guardado = localStorage.getItem(prefijo + tabla);
      return guardado ? JSON.parse(guardado) : null;
    } catch (error) {
      console.error("No se pudo leer la tabla", tabla, error);
      return [];
    }
  }
  function escribir(tabla, filas) {
    localStorage.setItem(prefijo + tabla, JSON.stringify(filas));
  }
  function nuevoId() {
    return crypto.randomUUID ? crypto.randomUUID() : Date.now().toString(36) + Math.random().toString(36).slice(2);
  }
  function fila(datos, fecha = new Date()) {
    return { id: nuevoId(), created_at: fecha.toISOString(), ...datos };
  }
  // Fechas de ejemplo repartidas en los últimos 7 días (para que el gráfico tenga barras)
  function fechaEjemplo(i) {
    return new Date(Date.now() - 60000 - (i % 7) * 86400000 - i * 3600000);
  }
  function sembrar(tabla) {
    const filas = (ejemplos[tabla] || []).map((datos, i) => fila(datos, fechaEjemplo(i)));
    escribir(tabla, filas);
    return filas;
  }

  const local = {
    listar: async (tabla) => [...(leer(tabla) ?? sembrar(tabla))].sort((a, b) => b.created_at.localeCompare(a.created_at)),
    obtener: async (tabla, id) => (leer(tabla) ?? sembrar(tabla)).find((f) => f.id === id) || null,
    crear: async (tabla, datos) => {
      const filas = leer(tabla) ?? sembrar(tabla);
      const nueva = fila(datos);
      filas.push(nueva);
      escribir(tabla, filas);
      return nueva;
    },
    actualizar: async (tabla, id, cambios) => {
      const filas = (leer(tabla) ?? sembrar(tabla)).map((f) => (f.id === id ? { ...f, ...cambios } : f));
      escribir(tabla, filas);
      return filas.find((f) => f.id === id);
    },
    eliminar: async (tabla, id) => escribir(tabla, (leer(tabla) ?? sembrar(tabla)).filter((f) => f.id !== id)),
  };

  // =============== MODO NUBE (Supabase, API REST con fetch, sin librerías) ===============
  async function pedir(tabla, consulta = "", opciones = {}) {
    const respuesta = await fetch(`${nube.url}/rest/v1/${tabla}${consulta}`, {
      ...opciones,
      headers: {
        apikey: nube.clave,
        Authorization: `Bearer ${nube.clave}`, // mismo valor que apikey: válido con claves nuevas y antiguas
        "Content-Type": "application/json",
        Prefer: "return=representation",
      },
    });
    if (!respuesta.ok) {
      const detalle = await respuesta.json().catch(() => ({}));
      const error = new Error(detalle.message || `Error ${respuesta.status}`);
      error.codigo = detalle.code;
      error.estado = respuesta.status;
      throw error;
    }
    return respuesta.status === 204 ? [] : respuesta.json();
  }

  // En la nube, un campo vacío se guarda como null (las columnas date y numeric no aceptan "")
  const limpiar = (datos) => Object.fromEntries(Object.entries(datos).map(([k, v]) => [k, v === "" ? null : v]));

  const remoto = {
    listar: (tabla) => pedir(tabla, "?select=*&order=created_at.desc"),
    obtener: async (tabla, id) => (await pedir(tabla, `?select=*&id=eq.${encodeURIComponent(id)}`))[0] || null,
    crear: async (tabla, datos) => (await pedir(tabla, "", { method: "POST", body: JSON.stringify(limpiar(datos)) }))[0],
    actualizar: async (tabla, id, cambios) =>
      (await pedir(tabla, `?id=eq.${encodeURIComponent(id)}`, { method: "PATCH", body: JSON.stringify(limpiar(cambios)) }))[0],
    eliminar: (tabla, id) => pedir(tabla, `?id=eq.${encodeURIComponent(id)}`, { method: "DELETE" }),
  };

  // Elige el modo. Si una tabla no existe en Supabase (por ejemplo "diario"), esa tabla sigue en el navegador.
  async function usar(accion, tabla, ...args) {
    if (!nube || soloLocal.has(tabla)) return local[accion](tabla, ...args);
    try {
      return await remoto[accion](tabla, ...args);
    } catch (error) {
      if (["PGRST205", "42P01"].includes(error.codigo) || error.estado === 404) {
        soloLocal.add(tabla);
        console.warn(`La tabla "${tabla}" no existe en Supabase: se guarda en este navegador.`);
        return local[accion](tabla, ...args);
      }
      const ayuda = error.codigo === "42501" || error.estado === 401 || error.estado === 403
        ? " Revisa la clave en config.js y que ejecutaste TODO supabase/tablas.sql (incluye los permisos)."
        : error.estado ? "" : " Revisa tu internet y la URL de Supabase en config.js.";
      const mensaje = `Supabase · tabla "${tabla}": ${error.message}.${ayuda}`;
      console.error(mensaje);
      if (typeof Animaciones !== "undefined") Animaciones.aviso(mensaje, "⚠️");
      if (accion === "listar") return []; // la página se muestra vacía en lugar de romperse
      throw new Error(mensaje);
    }
  }

  // ---------- Funciones públicas (CRUD): iguales en los dos modos ----------
  const listar = (tabla) => usar("listar", tabla);           // LEER todos (los más nuevos primero)
  const obtener = (tabla, id) => usar("obtener", tabla, id);  // LEER uno
  const crear = (tabla, datos) => usar("crear", tabla, datos); // CREAR
  const actualizar = (tabla, id, cambios) => usar("actualizar", tabla, id, cambios); // ACTUALIZAR
  const eliminar = (tabla, id) => usar("eliminar", tabla, id); // ELIMINAR

  // REINICIAR: vuelve a los datos de ejemplo.
  // Navegador: borra todas las tablas del proyecto. Nube: vacía la tabla principal y mensajes, y carga los ejemplos.
  async function reiniciar() {
    Object.keys(localStorage).filter((clave) => clave.startsWith(prefijo)).forEach((clave) => localStorage.removeItem(clave));
    if (!nube) return;
    for (const [tabla, filas] of Object.entries(ejemplos)) {
      if (soloLocal.has(tabla)) continue;
      try {
        await pedir(tabla, "?id=not.is.null", { method: "DELETE" });
        if (filas.length) {
          const conFecha = filas.map((datos, i) => ({ ...limpiar(datos), created_at: fechaEjemplo(i).toISOString() }));
          await pedir(tabla, "", { method: "POST", body: JSON.stringify(conFecha) });
        }
      } catch (error) {
        if (["PGRST205", "42P01"].includes(error.codigo) || error.estado === 404) { soloLocal.add(tabla); continue; }
        throw new Error(`Supabase · tabla "${tabla}": ${error.message}`);
      }
    }
  }

  // "nube" o "navegador": para mostrar dónde se guardan los datos
  const modo = () => (nube ? "nube" : "navegador");

  return { listar, obtener, crear, actualizar, eliminar, reiniciar, modo };
})();


/* ---------- Ayudas compartidas por el sitio y el panel ---------- */
const Util = {
  // Busca el campo que cumple un rol (titulo, estado, precio…)
  campo: (rol) => CONFIG.campos.find((c) => c.rol === rol),
  valor: (registro, rol) => {
    const c = Util.campo(rol);
    return c ? registro[c.nombre] : "";
  },
  // Evita que un texto escrito por el usuario se interprete como HTML
  seguro: (texto) => String(texto ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c])),
  soles: (n) => (n === "" || n == null || isNaN(n) ? "" : "S/ " + Number(n).toFixed(2)),
  // Fecha para mostrar (día/mes/año).
  // Un campo date ("2026-11-15") se arma separando el texto: con new Date() se leería
  // en hora universal y en Perú saldría el día anterior. Un ISO con hora usa la hora local.
  fecha: (valor) => {
    const texto = String(valor ?? "");
    if (!texto) return "";
    if (/^\d{4}-\d{2}-\d{2}$/.test(texto)) return texto.split("-").reverse().join("/");
    return new Date(texto).toLocaleDateString("es-PE", { day: "2-digit", month: "2-digit", year: "numeric" });
  },
  // Hoy (o dentro de N días) como "AAAA-MM-DD" en hora local, para comparar con campos date
  hoy: (dias = 0) => {
    const d = new Date();
    d.setDate(d.getDate() + dias);
    return [d.getFullYear(), String(d.getMonth() + 1).padStart(2, "0"), String(d.getDate()).padStart(2, "0")].join("-");
  },
  hace: (iso) => {
    const min = Math.round((Date.now() - new Date(iso)) / 60000);
    if (min < 1) return "Ahora";
    if (min < 60) return `Hace ${min} min`;
    if (min < 1440) return `Hace ${Math.round(min / 60)} h`;
    const dias = Math.round(min / 1440);
    return dias === 1 ? "Ayer" : `Hace ${dias} días`;
  },
  iniciales: (texto) => String(texto || "?").trim().split(/\s+/).slice(0, 2).map((p) => p[0]).join("").toUpperCase(),
  // Color de la insignia según el estado:
  // el estado que se publica = verde · la última opción = gris · las demás = ámbar
  // (si no hay estado publicado: 1.ª opción = verde, 2.ª = ámbar, resto = gris)
  claseEstado: (estado) => {
    const opciones = Util.campo("estado")?.opciones || [];
    const publicado = CONFIG.catalogo?.soloEstado;
    if (publicado && opciones.includes(publicado)) {
      if (estado === publicado) return "chip--exito";
      return estado === opciones[opciones.length - 1] ? "chip--neutro" : "chip--alerta";
    }
    const i = opciones.indexOf(estado);
    return i === 0 ? "chip--exito" : i === 1 ? "chip--alerta" : "chip--neutro";
  },
  // Opciones de estado ordenadas: primero la que se publica
  estadosOrdenados: () => {
    const opciones = [...(Util.campo("estado")?.opciones || [])];
    const publicado = CONFIG.catalogo?.soloEstado;
    const i = opciones.indexOf(publicado);
    if (i > 0) opciones.unshift(opciones.splice(i, 1)[0]);
    return opciones;
  },
  // Pone el nombre del proyecto donde haya data-config="nombre"
  aplicarNombre: () => {
    document.querySelectorAll('[data-config="nombre"]').forEach((el) => (el.textContent = CONFIG.proyecto.nombre));
    document.title = document.title.replace("Mi Emprendimiento", CONFIG.proyecto.nombre);
  },
};
