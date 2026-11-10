/* =============================================================
   🧠 LÓGICA DEL PANEL DE CONTROL (panel.html)
   Lee la configuración (config.js), pide los datos (data.js)
   y los muestra: indicadores, gráfico, tabla, mensajes y ajustes.
   ============================================================= */

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => [...document.querySelectorAll(selector)];
const M = CONFIG.modulo;
const campoEstado = Util.campo("estado");

let registros = [];
let mensajes = [];
let editandoId = null;

// ---------- 1. Textos según config.js ----------
Util.aplicarNombre();
if (!CONFIG.partes.sitio) $("#enlace-sitio").remove();
$("#menu-icono").textContent = M.icono;
$("#menu-modulo").textContent = M.nombre;
$("#titulo-modulo").textContent = M.nombre;
const textoNuevo = M.nuevo || `Nuevo ${M.singular}`;
$("#boton-nuevo").textContent = `＋ ${textoNuevo}`;
$("#grafico-titulo").textContent = `${M.nombre} creados por día`;
$("#buscador-tabla").placeholder = `Buscar ${M.nombre.toLowerCase()}…`;

const hora = new Date().getHours();
$("#saludo").textContent = (hora < 12 ? "Buenos días" : hora < 19 ? "Buenas tardes" : "Buenas noches") + ", equipo";

// ---------- 2. Menú lateral en celular ----------
const lateral = $("#lateral"), cortina = $("#cortina");
function cerrarLateral() { lateral.classList.remove("abierta"); cortina.classList.remove("visible"); }
$("#abrir-lateral").addEventListener("click", () => { lateral.classList.add("abierta"); cortina.classList.add("visible"); });
cortina.addEventListener("click", cerrarLateral);

// ---------- 3. Navegación entre vistas (#resumen, #registros…) ----------
function mostrarVista() {
  const nombre = location.hash.replace("#", "") || "resumen";
  const vista = $(`.vista[data-vista="${nombre}"]`) ? nombre : "resumen";
  $$(".vista").forEach((v) => (v.hidden = v.dataset.vista !== vista));
  $$(".lateral__enlace[data-vista]").forEach((a) => {
    a.classList.toggle("activo", a.dataset.vista === vista);
    a.toggleAttribute("aria-current", a.dataset.vista === vista);
  });
  cerrarLateral();
  window.scrollTo({ top: 0 });
}
window.addEventListener("hashchange", mostrarVista);
mostrarVista();

// ---------- 4. Resumen: indicadores, gráfico y actividad ----------
function pintarResumen() {
  const sinLeer = mensajes.filter((m) => !m.leido).length;
  const kpis = [{ icono: M.icono, etiqueta: M.nombre, valor: registros.length, nota: "en total" }];
  Util.estadosOrdenados().slice(0, 2).forEach((op) => {
    const n = registros.filter((r) => r[campoEstado.nombre] === op).length;
    kpis.push({ icono: kpis.length === 1 ? "✅" : "⏳", etiqueta: op, valor: n, nota: registros.length ? `${Math.round((n / registros.length) * 100)}% del total` : "—" });
  });
  kpis.push({ icono: "💬", etiqueta: "Mensajes", valor: mensajes.length, nota: `${sinLeer} sin leer`, alerta: sinLeer > 0 });

  $("#kpis").innerHTML = kpis.map((k) => `
    <article class="tarjeta kpi">
      <span class="kpi__etiqueta">${k.icono} ${Util.seguro(k.etiqueta)}</span>
      <span class="kpi__valor" data-valor="${k.valor}">0</span>
      <span class="kpi__cambio ${k.alerta ? "kpi__cambio--alerta" : ""}">${k.nota}</span>
    </article>`).join("");
  $$("#kpis [data-valor]").forEach((el) => Animaciones.contar(el, Number(el.dataset.valor)));

  // Gráfico: registros creados en los últimos 7 días
  const dias = Array.from({ length: 7 }, (_, i) => {
    const d = new Date(); d.setHours(0, 0, 0, 0); d.setDate(d.getDate() - (6 - i));
    return d;
  });
  graficoBarras($("#grafico"), dias.map((d) => ({
    etiqueta: d.toLocaleDateString("es-PE", { weekday: "short" }).replace(".", ""),
    valor: registros.filter((r) => new Date(r.created_at).toDateString() === d.toDateString()).length,
  })));

  // Actividad: lo último que pasó (registros + mensajes)
  const eventos = [
    ...registros.map((r) => ({ fecha: r.created_at, tipo: "", texto: `<strong>${Util.seguro(textoNuevo)}</strong> “${Util.seguro(Util.valor(r, "titulo"))}”` })),
    ...mensajes.map((m) => ({ fecha: m.created_at, tipo: "actividad__punto--info", texto: `<strong>Mensaje</strong> de ${Util.seguro(m.nombre)}` })),
  ].sort((a, b) => b.fecha.localeCompare(a.fecha)).slice(0, 5);
  $("#actividad").innerHTML = eventos.length
    ? eventos.map((e) => `<li><span class="actividad__punto ${e.tipo}"></span><div>${e.texto}<small>${Util.hace(e.fecha)}</small></div></li>`).join("")
    : `<li class="vacio">Sin actividad todavía</li>`;
}

function graficoBarras(contenedor, datos) {
  const ancho = 600, alto = 240, margen = 28;
  const maximo = Math.max(...datos.map((d) => d.valor), 1);
  const paso = (ancho - margen) / datos.length, barra = paso * 0.56;
  const lineas = [0.25, 0.5, 0.75, 1].map((t) => {
    const y = alto - margen - t * (alto - margen * 2);
    return `<line x1="${margen}" x2="${ancho}" y1="${y}" y2="${y}" stroke-dasharray="3 5"/>`;
  }).join("");
  const barras = datos.map((d, i) => {
    const h = Math.max((d.valor / maximo) * (alto - margen * 2), 4);
    const x = margen + i * paso + (paso - barra) / 2, y = alto - margen - h;
    return `<rect class="barra" x="${x}" y="${y}" width="${barra}" height="${h}" rx="8">
              <animate attributeName="height" from="0" to="${h}" dur=".8s" fill="freeze"/>
              <animate attributeName="y" from="${alto - margen}" to="${y}" dur=".8s" fill="freeze"/>
            </rect>
            <text class="valor" x="${x + barra / 2}" y="${y - 8}" text-anchor="middle">${d.valor}</text>
            <text x="${x + barra / 2}" y="${alto - 8}" text-anchor="middle">${d.etiqueta}</text>`;
  }).join("");
  contenedor.innerHTML = `<svg viewBox="0 0 ${ancho} ${alto}">
      <defs><linearGradient id="degradado-barra" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" style="stop-color:var(--dorado-1)"/><stop offset="1" style="stop-color:var(--dorado-2)"/>
      </linearGradient></defs>${lineas}${barras}</svg>`;
}

// ---------- 5. Tabla del módulo ----------
// Columnas: el título va primero; descripción e ícono se muestran dentro de esa celda
const columnas = CONFIG.campos.filter((c) => !["titulo", "descripcion", "icono"].includes(c.rol));

$("#tabla-registros thead").innerHTML = `<tr>
  <th>${Util.seguro(Util.campo("titulo")?.etiqueta || "Nombre")}</th>
  ${columnas.map((c, i) => `<th class="${i > 0 ? "col-extra" : ""}">${Util.seguro(c.etiqueta)}</th>`).join("")}
  <th class="col-extra">Fecha</th><th class="tabla__acciones">Acciones</th></tr>`;

function celda(registro, campo) {
  const v = registro[campo.nombre];
  if (campo.rol === "estado") return `<span class="chip ${Util.claseEstado(v)}">${Util.seguro(v)}</span>`;
  if (campo.rol === "precio") return Util.soles(v);
  if (campo.rol === "categoria") return v ? `<span class="chip chip--neutro">${Util.seguro(v)}</span>` : "";
  if (campo.tipo === "date" && v) return v.split("-").reverse().join("/");
  return Util.seguro(v);
}

function pintarTabla() {
  const texto = $("#buscador-tabla").value.trim().toLowerCase();
  const estado = $("#filtro-estado")?.value || ""; // no existe si no hay campo con rol "estado"
  const visibles = registros.filter((r) =>
    JSON.stringify(r).toLowerCase().includes(texto) && (!estado || r[campoEstado.nombre] === estado)
  );
  const totalColumnas = columnas.length + 3;
  $("#tabla-registros tbody").innerHTML = visibles.length ? visibles.map((r) => `
    <tr>
      <td><div class="celda-nombre">
        <span class="avatar">${Util.seguro(Util.valor(r, "icono") || Util.iniciales(Util.valor(r, "titulo")))}</span>
        <div><strong>${Util.seguro(Util.valor(r, "titulo"))}</strong><small>${Util.seguro(Util.valor(r, "descripcion")).slice(0, 60)}</small></div>
      </div></td>
      ${columnas.map((c, i) => `<td class="${i > 0 ? "col-extra" : ""}">${celda(r, c)}</td>`).join("")}
      <td class="col-extra">${Util.fecha(r.created_at)}</td>
      <td class="tabla__acciones">
        <button class="btn btn--fantasma btn--icono" data-editar="${r.id}" aria-label="Editar">✎</button>
        <button class="btn btn--fantasma btn--icono" data-eliminar="${r.id}" aria-label="Eliminar">🗑</button>
      </td>
    </tr>`).join("")
    : `<tr class="vacio-tabla"><td colspan="${totalColumnas}"><div class="vacio"><span class="vacio__icono">${M.icono}</span><strong>${texto || estado ? "Sin resultados" : `Aún no hay ${M.nombre.toLowerCase()}`}</strong><span>${texto || estado ? "Prueba con otra búsqueda." : `Empieza con el botón “${textoNuevo}”.`}</span></div></td></tr>`;
  $("#tabla-pie").textContent = `Mostrando ${visibles.length} de ${registros.length}`;
}

// Filtro por estado (sale de las opciones del campo con rol "estado")
if (campoEstado) {
  $("#filtro-estado").innerHTML = `<option value="">Todos los estados</option>` +
    campoEstado.opciones.map((o) => `<option>${Util.seguro(o)}</option>`).join("");
} else {
  $("#filtro-estado").remove();
}
$("#buscador-tabla").addEventListener("input", pintarTabla);
$("#filtro-estado")?.addEventListener("change", pintarTabla);
$("#buscador-global").addEventListener("keydown", (e) => {
  if (e.key !== "Enter") return;
  $("#buscador-tabla").value = e.target.value;
  location.hash = "registros";
  pintarTabla();
});

// ---------- 6. Formulario (modal) generado desde config.js ----------
const modal = $("#modal");
const formulario = $("#formulario-registro");

$("#campos-formulario").innerHTML = CONFIG.campos.map((c) => {
  const id = "campo-" + c.nombre;
  const etiqueta = `<label for="${id}">${Util.seguro(c.etiqueta)}${c.requerido ? " *" : ""}</label>`;
  let control;
  if (c.tipo === "textarea") control = `<textarea class="input" id="${id}" name="${c.nombre}"></textarea>`;
  else if (c.tipo === "select") control = `<select class="input" id="${id}" name="${c.nombre}">${c.opciones.map((o) => `<option>${Util.seguro(o)}</option>`).join("")}</select>`;
  else control = `<input class="input" id="${id}" name="${c.nombre}" type="${c.tipo || "text"}" ${c.tipo === "number" ? 'step="any" min="0"' : ""}>`;
  return `<div class="campo">${etiqueta}${control}<span class="campo__ayuda" hidden>Este campo es obligatorio.</span></div>`;
}).join("");

async function abrirModal(id = null) {
  editandoId = id;
  formulario.reset();
  $$("#campos-formulario .campo").forEach((c) => { c.classList.remove("campo--error"); c.querySelector(".campo__ayuda").hidden = true; });
  $("#modal-titulo").textContent = id ? `Editar ${M.singular}` : textoNuevo;
  if (id) {
    const registro = await Datos.obtener(CONFIG.tabla, id);
    CONFIG.campos.forEach((c) => (formulario.elements[c.nombre].value = registro[c.nombre] ?? ""));
  }
  modal.showModal();
}

$$("[data-abrir-modal]").forEach((b) => b.addEventListener("click", () => abrirModal()));

$("#boton-guardar").addEventListener("click", (evento) => {
  let valido = true;
  CONFIG.campos.forEach((c) => {
    const control = formulario.elements[c.nombre];
    const vacio = c.requerido && !control.value.trim();
    control.closest(".campo").classList.toggle("campo--error", Boolean(vacio));
    control.closest(".campo").querySelector(".campo__ayuda").hidden = !vacio;
    if (vacio && valido) { valido = false; control.focus(); }
  });
  if (!valido) evento.preventDefault();
});

modal.addEventListener("close", async () => {
  if (modal.returnValue !== "guardar") return;
  const datos = {};
  CONFIG.campos.forEach((c) => {
    const v = formulario.elements[c.nombre].value.trim();
    datos[c.nombre] = c.tipo === "number" && v !== "" ? Number(v) : v;
  });
  if (editandoId) await Datos.actualizar(CONFIG.tabla, editandoId, datos);
  else await Datos.crear(CONFIG.tabla, datos);
  Animaciones.aviso(editandoId ? "Cambios guardados" : `Se guardó “${datos[Util.campo("titulo").nombre]}”`);
  await cargar();
});

// Editar / eliminar desde la tabla
$("#tabla-registros").addEventListener("click", async (e) => {
  const editar = e.target.closest("[data-editar]");
  const eliminar = e.target.closest("[data-eliminar]");
  if (editar) abrirModal(editar.dataset.editar);
  if (eliminar && confirm(`¿Eliminar este ${M.singular}? No se puede deshacer.`)) {
    await Datos.eliminar(CONFIG.tabla, eliminar.dataset.eliminar);
    Animaciones.aviso("Se eliminó correctamente", "🗑");
    await cargar();
  }
});

// ---------- 7. Mensajes (llegan del formulario de contacto del sitio) ----------
function pintarMensajes() {
  $("#lista-mensajes").innerHTML = mensajes.length ? mensajes.map((m) => `
    <article class="tarjeta mensaje ${m.leido ? "" : "mensaje--nuevo"}">
      <span class="avatar">${Util.iniciales(m.nombre)}</span>
      <div>
        <div class="mensaje__cabecera"><strong>${Util.seguro(m.nombre)}</strong><small>${Util.hace(m.created_at)}</small></div>
        <p>${Util.seguro(m.mensaje)}</p>
      </div>
      <div class="mensaje__acciones">
        ${m.leido ? `<span class="chip chip--neutro">Leído</span>` : `<button class="btn btn--secundario btn--sm" data-leer="${m.id}">✓ Marcar leído</button>`}
        <button class="btn btn--fantasma btn--icono" data-borrar-mensaje="${m.id}" aria-label="Eliminar mensaje">🗑</button>
      </div>
    </article>`).join("")
    : `<div class="tarjeta vacio"><span class="vacio__icono">📭</span><strong>No hay mensajes</strong><span>Llegarán desde el formulario de contacto del sitio.</span></div>`;
}

$("#lista-mensajes").addEventListener("click", async (e) => {
  const leer = e.target.closest("[data-leer]");
  const borrar = e.target.closest("[data-borrar-mensaje]");
  if (leer) await Datos.actualizar("mensajes", leer.dataset.leer, { leido: true });
  if (borrar && confirm("¿Eliminar este mensaje?")) await Datos.eliminar("mensajes", borrar.dataset.borrarMensaje);
  if (leer || borrar) await cargar();
});

// ---------- 8. Configuración: color, tema y restablecer ----------
function cambiarAcento(color) {
  const raiz = document.documentElement.style;
  raiz.setProperty("--acento", color);
  raiz.setProperty("--dorado-1", color);
  raiz.setProperty("--dorado-2", `color-mix(in srgb, ${color} 70%, black)`);
  $$(".color").forEach((c) => c.classList.toggle("activo", c.dataset.color === color));
}
$$(".color[data-color]").forEach((c) => c.addEventListener("click", () => cambiarAcento(c.dataset.color)));
$("#color-libre").addEventListener("input", (e) => cambiarAcento(e.target.value));
$("#cambiar-tema").addEventListener("click", (e) => {
  const raiz = document.documentElement;
  const oscuro = raiz.dataset.tema === "oscuro";
  raiz.dataset.tema = oscuro ? "claro" : "oscuro";
  e.target.textContent = oscuro ? "🌙 Usar tema oscuro" : "☀️ Usar tema claro";
});
$("#restablecer").addEventListener("click", async () => {
  if (!confirm("¿Borrar todo y volver a los datos de ejemplo?")) return;
  await Datos.reiniciar();
  await cargar();
  Animaciones.aviso("Datos restablecidos", "♻️");
});

// ---------- 9. Cargar todo ----------
async function cargar() {
  [registros, mensajes] = await Promise.all([Datos.listar(CONFIG.tabla), Datos.listar("mensajes")]);
  const sinLeer = mensajes.filter((m) => !m.leido).length;
  $("#contador-registros").textContent = registros.length;
  $("#contador-mensajes").textContent = sinLeer;
  $("#contador-mensajes").hidden = sinLeer === 0;
  pintarResumen();
  pintarTabla();
  pintarMensajes();
}
cargar();
