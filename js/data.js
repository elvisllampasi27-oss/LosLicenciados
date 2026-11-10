/* =============================================================
   🗄️ DATOS — la ÚNICA puerta para guardar y leer información
   Hoy guarda en el navegador (localStorage).
   Más adelante se cambia SOLO este archivo para usar Supabase
   (base de datos en la nube) y el resto del proyecto no cambia.
   Por eso todas las funciones son "async": la nube tarda en responder.
   ============================================================= */

const Datos = (() => {
  const prefijo = "loslicenciados_";

  // Datos de ejemplo por tabla (vienen de config.js)
  const ejemplos = {
    [CONFIG.tabla]: CONFIG.datosEjemplo || [],
    mensajes: CONFIG.mensajesEjemplo || [],
  };

  // ---------- Funciones internas (solo este archivo toca localStorage) ----------
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

  // La primera vez, carga los ejemplos repartidos en los últimos 7 días
  function sembrar(tabla) {
    const ahora = Date.now() - 60000; // un minuto antes, para que lo nuevo quede primero
    const filas = (ejemplos[tabla] || []).map((datos, i) =>
      fila(datos, new Date(ahora - (i % 7) * 86400000 - i * 3600000))
    );
    escribir(tabla, filas);
    return filas;
  }

  // ---------- Funciones públicas (CRUD) ----------

  // LEER: todos los registros, los más nuevos primero
  async function listar(tabla) {
    const filas = leer(tabla) ?? sembrar(tabla);
    return [...filas].sort((a, b) => b.created_at.localeCompare(a.created_at));
  }

  // LEER UNO por su id
  async function obtener(tabla, id) {
    return (leer(tabla) ?? sembrar(tabla)).find((f) => f.id === id) || null;
  }

  // CREAR
  async function crear(tabla, datos) {
    const filas = leer(tabla) ?? sembrar(tabla);
    const nueva = fila(datos);
    filas.push(nueva);
    escribir(tabla, filas);
    return nueva;
  }

  // ACTUALIZAR
  async function actualizar(tabla, id, cambios) {
    const filas = (leer(tabla) ?? sembrar(tabla)).map((f) => (f.id === id ? { ...f, ...cambios } : f));
    escribir(tabla, filas);
    return filas.find((f) => f.id === id);
  }

  // ELIMINAR
  async function eliminar(tabla, id) {
    escribir(tabla, (leer(tabla) ?? sembrar(tabla)).filter((f) => f.id !== id));
  }

  // REINICIAR: borra todas las tablas del proyecto (también las nuevas, como "pedidos")
  // y vuelve a los datos de ejemplo
  async function reiniciar() {
    Object.keys(localStorage).filter((clave) => clave.startsWith(prefijo)).forEach((clave) => localStorage.removeItem(clave));
  }

  return { listar, obtener, crear, actualizar, eliminar, reiniciar };
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
