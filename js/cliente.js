/* =============================================================
   🌐 LÓGICA DEL SITIO DEL CLIENTE (index.html)
   Lee la configuración (config.js), pide los datos (data.js)
   y los muestra en la página.
   ============================================================= */

// Si el equipo no usa el sitio, se va directo al panel
if (!CONFIG.partes.sitio) location.replace("panel.html");

// Si el equipo no usa el panel, se oculta su enlace
if (!CONFIG.partes.panel) document.querySelectorAll('a[href="panel.html"]').forEach((a) => a.remove());

Util.aplicarNombre();

// ---------- 1. Menú en celular ----------
const menu = document.getElementById("menu");
const menuBoton = document.getElementById("menu-boton");
function cerrarMenu() {
  menu.classList.remove("abierto");
  menuBoton.setAttribute("aria-expanded", false);
  menuBoton.textContent = "☰";
}
menuBoton.addEventListener("click", () => {
  const abierto = menu.classList.toggle("abierto");
  menuBoton.setAttribute("aria-expanded", abierto);
  menuBoton.textContent = abierto ? "✕" : "☰";
});
menu.querySelectorAll("a").forEach((enlace) => enlace.addEventListener("click", cerrarMenu));

// ---------- 2. Catálogo (datos del panel) ----------
const lista = document.getElementById("catalogo-lista");
let publicados = [];
let categoriaActiva = "";

function tarjeta(registro, i) {
  const titulo = Util.valor(registro, "titulo");
  const icono = Util.valor(registro, "icono") || CONFIG.modulo.icono;
  const categoria = Util.valor(registro, "categoria");
  const precio = Util.soles(Util.valor(registro, "precio"));
  return `
    <article class="tarjeta tarjeta--hover item aparecer" data-retraso="${i % 3}">
      <div class="item__imagen">${Util.seguro(icono)}</div>
      ${categoria ? `<span class="chip chip--neutro">${Util.seguro(categoria)}</span>` : ""}
      <h3>${Util.seguro(titulo)}</h3>
      <p>${Util.seguro(Util.valor(registro, "descripcion"))}</p>
      <div class="item__pie">
        <strong>${precio}</strong>
        <button class="btn btn--secundario btn--sm" data-interes="${Util.seguro(titulo)}">Me interesa</button>
      </div>
    </article>`;
}

function pintarCatalogo() {
  const visibles = publicados.filter((r) => !categoriaActiva || Util.valor(r, "categoria") === categoriaActiva);
  lista.innerHTML = visibles.length
    ? visibles.map(tarjeta).join("")
    : `<div class="tarjeta vacio catalogo__vacio"><span class="vacio__icono">${CONFIG.modulo.icono}</span><strong>Aún no hay ${CONFIG.modulo.nombre.toLowerCase()} publicados</strong><span>Agrégalos desde el panel de control.</span></div>`;
  Animaciones.apariciones();
}

function pintarFiltros() {
  const campo = Util.campo("categoria");
  const caja = document.getElementById("filtros-categoria");
  if (!campo) { caja.previousElementSibling.remove(); caja.remove(); return; }
  const opciones = ["", ...campo.opciones];
  caja.innerHTML = opciones.map((op) =>
    `<button class="filtro ${op === categoriaActiva ? "activo" : ""}" data-categoria="${Util.seguro(op)}">${op ? Util.seguro(op) : "Todos"}</button>`
  ).join("");
}

async function cargarCatalogo() {
  const todos = await Datos.listar(CONFIG.tabla);
  const estado = Util.campo("estado");
  publicados = estado && CONFIG.catalogo.soloEstado
    ? todos.filter((r) => r[estado.nombre] === CONFIG.catalogo.soloEstado)
    : todos;

  pintarFiltros();
  pintarCatalogo();

  document.getElementById("contador-catalogo-etiqueta").textContent = CONFIG.modulo.nombre.toLowerCase();
  Animaciones.contar(document.getElementById("contador-catalogo"), publicados.length);

  document.getElementById("lista-novedades").innerHTML = publicados.slice(0, 3).map((r) =>
    `<li><a href="#catalogo">${Util.seguro(Util.valor(r, "icono"))} ${Util.seguro(Util.valor(r, "titulo"))}</a><small>${Util.hace(r.created_at)}</small></li>`
  ).join("");
}

document.getElementById("filtros-categoria").addEventListener("click", (e) => {
  const boton = e.target.closest("[data-categoria]");
  if (!boton) return;
  categoriaActiva = boton.dataset.categoria;
  pintarFiltros();
  pintarCatalogo();
});

// "Me interesa" → completa el mensaje de contacto
lista.addEventListener("click", (e) => {
  const boton = e.target.closest("[data-interes]");
  if (!boton) return;
  document.getElementById("f-mensaje").value = `Hola, me interesa: ${boton.dataset.interes}. ¿Me dan más información?`;
  document.getElementById("contacto").scrollIntoView({ behavior: "smooth" });
  setTimeout(() => document.getElementById("f-nombre").focus({ preventScroll: true }), 600);
});

// ---------- 3. Formulario de contacto → llega a "Mensajes" del panel ----------
document.getElementById("formulario-contacto").addEventListener("submit", async (evento) => {
  evento.preventDefault();
  const formulario = evento.target;
  let valido = true;
  formulario.querySelectorAll("[required]").forEach((campo) => {
    const vacio = !campo.value.trim();
    campo.closest(".campo").classList.toggle("campo--error", vacio);
    if (vacio) valido = false;
  });
  if (!valido) return Animaciones.aviso("Completa los campos", "⚠️");

  await Datos.crear("mensajes", {
    nombre: formulario.nombre.value.trim(),
    mensaje: formulario.mensaje.value.trim(),
    leido: false,
  });
  formulario.reset();
  Animaciones.aviso("¡Mensaje enviado! Te escribiremos pronto.");
});

// ---------- 4. Modo clase: ver las partes de la página ----------
const botonPartes = document.getElementById("boton-partes");
botonPartes.addEventListener("click", () => {
  const activo = document.body.classList.toggle("mostrar-partes");
  botonPartes.setAttribute("aria-pressed", activo);
  botonPartes.textContent = activo ? "✕ Ocultar partes" : "🧩 Ver partes de la página";
});

cargarCatalogo();
