# 🧺 Grupo 06 · Raíces locales / Ayni Emprende
**Conecta a artesanos y productores de Ayacucho con nuevos clientes, para vender a un precio justo.**
I.E. "Los Licenciados" · 5.º B · Servicio Social IS-480 UNSCH

| Partes | Módulo de datos | Funciones propias de su app |
|---|---|---|
| Sitio + panel | 🛍️ Productos: artesanía, alimentos y textiles | **F1** 🛒 Carrito · **F2** 💬 Pedir por WhatsApp · **F3** 📦 Pedidos recientes |

**Reglas del día:** copia los prompts desde **`docs/grupos/06-raices-locales.md`** en VS Code (esta hoja es para leer) · un prompt → probar → recién el siguiente · revisa con `Ctrl + Shift + G` (rojo = antes, verde = después) antes de **Keep** · cero datos personales reales · Copilot gratis = 50 mensajes al mes (hoy usarán 7) · tiempo total: 68 min.

---

## ① Consigue el proyecto (5 min)
VS Code → `Ctrl + Shift + P` → **Git: Clone** → `https://github.com/elvisllampasi27-oss/LosLicenciados.git`. Sin Git: en GitHub, **Code → Download ZIP**, descomprime y **Archivo → Abrir carpeta…**

✅ **Listo cuando:** `index.html` abre con doble clic y el enlace **Panel ↗** funciona.

## ② El Analista: Claude o Gemini (10 min)
Abre **claude.ai** o **gemini.google.com**, adjunta su **ficha `.docx`** con 📎 y pega:
```
Actúa como analista de producto digital. Te adjunto la ficha del Lean Canvas de nuestro
emprendimiento. Vamos a adaptar una plantilla web que ya funciona y tiene dos caras:
- SITIO DEL CLIENTE: portada, beneficios (3), cómo funciona (3 pasos), catálogo con filtros,
  testimonio y formulario de contacto.
- PANEL DE CONTROL: resumen con indicadores y gráfico, una tabla para crear/editar/eliminar
  registros, y bandeja de mensajes.

Tu tarea: decide qué partes, datos y textos necesita nuestra app.
Usaremos sitio y panel. El módulo son los Productos (tabla "productos") con estos 6 campos:
nombre | Nombre | text | | sí | titulo
categoria | Categoría | select | Artesanía, Alimentos, Textiles | sí | categoria
precio | Precio (S/) | number | | sí | precio
productor | Productor | text | | no | ninguno
estado | Estado | select | Activo, Agotado, Borrador | sí | estado
icono | Ícono (emoji) | text | | no | icono
Estado que se publica: Activo. Elige un solo nombre: Raíces locales o Ayni Emprende. Los
productores de ejemplo son ficticios. La app tendrá además un carrito, el pedido por
WhatsApp y los pedidos recientes en el panel.

Responde SOLO con el formato siguiente, en Markdown, sin frases antes ni después y sin
agregar ni quitar secciones. Si falta información, propón algo coherente y márcalo con ⚠️.
Por privacidad, NUNCA incluyas teléfonos, DNI ni direcciones.

# Mi proyecto

## 1. Identidad
- Nombre:
- Eslogan (máx. 8 palabras; marca con *asteriscos* las 2-3 palabras a resaltar):
- Propuesta de valor (máx. 30 palabras):
- Color de acento (hex, tono medio o claro: encima va texto oscuro y debe leerse bien):

## 2. Partes que usaremos
- Sitio del cliente: sí/no (justifica en 1 línea)
- Panel de control: sí/no (justifica en 1 línea)

## 3. Módulo de datos
- Nombre (plural):
- Singular (minúsculas):
- Texto del botón (ej. "Nueva tarea", "Nuevo producto"):
- Ícono (1 emoji):
- Tabla (minúsculas, sin espacios ni tildes):
- Campos (máximo 6). Uno por línea con este formato exacto:
  nombre_sin_tildes | Etiqueta | tipo (text, textarea, number, date, select) | opciones si es select | requerido sí/no | rol (titulo, descripcion, categoria, estado, precio, icono o ninguno)
  Reglas: exactamente un campo con rol "titulo"; máximo un campo por rol.
- Estado que se publica en el catálogo (una de las opciones del campo con rol estado):
- 5 registros de ejemplo realistas para Ayacucho.

## 4. Textos del sitio
- Beneficio 1, 2 y 3: emoji | título corto | 1 frase
- Paso 1, 2 y 3: título | 1 frase
- Testimonio: frase | nombre ficticio | lugar
- Datos de contacto: zona y horario (sin dirección exacta)
```

**Dónde pegar la respuesta:** en VS Code abre **`mi-proyecto.md`** (en la raíz, junto a `index.html`). Mira el nombre en la pestaña → `Ctrl + A` → `Ctrl + V` → `Ctrl + S`.
⛔ **Nunca** en `.github/copilot-instructions.md`. Si pasó: `Ctrl + Shift + G` → clic derecho en ese archivo → **Discard Changes**.

✅ **Listo cuando:** `mi-proyecto.md` tiene las 4 secciones, los 6 campos de arriba y un solo nombre, revisaron los ⚠️ y no hay teléfonos.

## ③ El Ingeniero: la base (Copilot, modo **Agent**, `Ctrl + Alt + I`)
**P1 · Configuración** (10 min)
```
Con las secciones 1, 2 y 3 de #mi-proyecto.md, actualiza SOLO #config.js:
proyecto.nombre, partes, modulo (nombre, singular, nuevo, icono), tabla, campos con sus roles,
catalogo.soloEstado y datosEjemplo (5 registros). Mantén mensajesEjemplo.
```
✅ **Listo cuando:** Panel → **Configuración → Restablecer datos**, y la tabla muestra sus productos con Precio, Productor y Estado, y el sitio solo los Activos.

**P2 · Textos del sitio** (8 min)
```
Con las secciones 1 y 4 de #mi-proyecto.md, actualiza los textos de #index.html: <title>,
meta description, chip y <h1> de la portada (las palabras marcadas con * van dentro de
<span class="titulo-dorado">), propuesta de valor, botones de la portada, beneficios, pasos,
cabeceras de cada sección (chip, h2 y p), el bloque "¿Tienes dudas?" del aside, testimonio y
datos de contacto. Cambia también las 2 tarjetas flotantes de la portada y los datos
"usuarios" y "equipos" por textos coherentes con nuestra propuesta de valor.
Cambia SOLO textos y emojis; no toques clases, ids ni scripts.
```
✅ **Listo cuando:** al recargar `index.html` no queda ningún texto de la plantilla ("Beneficio 1", "Lo que ofrecemos"…).

**P3 · Colores** (5 min)
```
Usa el color de acento de #mi-proyecto.md en #base.css: cambia SOLO --acento, --acento-fuerte,
--sobre-acento, --dorado-1 y --dorado-2 (en :root y en [data-tema="oscuro"]) para crear una
paleta armónica. Elige --sobre-acento (texto de los botones) entre #1C1206 y #FFFFFF según cuál
tenga contraste AA (4.5:1) sobre --acento, e indícame el contraste. En #animaciones.js ajusta
los colores por defecto de la esfera (color y color2) a la nueva paleta.
```
✅ **Listo cuando:** cambian los colores en el sitio, el panel y la esfera, y el texto de los botones se lee bien.

## ④ El Ingeniero: sus funciones propias
**F1 · 🛒 Carrito** (10 min)
```
Agrega al sitio un carrito de compras:
- En #index.html, al inicio del aside del catálogo, agrega un bloque "🛒 Tu pedido" con una
  lista, el total y el texto "Tu carrito está vacío".
- En #cliente.js, en cada tarjeta del catálogo, cambia el botón "Me interesa" por
  "🛒 Agregar" con el id del registro. El carrito es un arreglo en memoria con { titulo,
  precio, cantidad }: busca el registro por su id, lee título y precio con Util.valor() y,
  si el producto ya está en el carrito, suma 1. En el aside muestra cada
  producto con botones − y + (con aria-label), su subtotal y el total con Util.soles(); si
  la cantidad llega a 0, quítalo. Al agregar, avisa con Animaciones.aviso. Quita el código
  que ya no se use.
- Estilos en #cliente.css con las clases y variables de base.css.
Cambia SOLO esos 3 archivos. Al final lista los archivos cambiados y cómo probarlo.
```
✅ **Listo cuando:** agregas 2 de un producto y 1 de otro → los subtotales y el total coinciden con tu cálculo a mano; con − la cantidad baja y en 0 desaparece.

**F2 · 💬 Pedir por WhatsApp** (7 min)
```
En #index.html agrega en el bloque "🛒 Tu pedido" un botón "💬 Pedir por WhatsApp". En
#cliente.js, al pulsarlo, si el carrito está vacío avisa. Si no, arma un mensaje con varias
líneas: primero "Hola, " + CONFIG.proyecto.nombre + ". Quiero pedir:", luego una línea por
producto con el formato "• cantidad x nombre = subtotal" y al final "Total: " + el total,
con los montos en Util.soles(). Abre https://wa.me/51900000000?text= +
encodeURIComponent(mensaje) con window.open(url, "_blank", "noopener").
Cambia SOLO #index.html y #cliente.js. Al final lista los archivos cambiados y cómo probarlo.
```
✅ **Listo cuando:** con el carrito de F1, WhatsApp abre con cada producto en su línea y el mismo total que el aside.

**F3 · 📦 Pedidos recientes** (8 min, si les queda tiempo)
```
Guarda cada pedido y muéstralo en el panel:
- En #cliente.js, al pulsar "💬 Pedir por WhatsApp", guarda antes con Datos.crear("pedidos",
  { productos, total }), donde productos es el texto de la lista, y luego vacía el carrito.
- En la vista Resumen de #panel.html agrega una tarjeta "Pedidos recientes" con un contenedor
  id="pedidos". En #panel.js crea pintarPedidos(): muestra los 5 últimos con sus productos
  (Util.seguro), el total con Util.soles() y Util.hace(). Si no hay, usa la clase .vacio.
  Llámala dentro de cargar(). Estilos en #panel.css con variables de base.css.
Cambia SOLO esos 4 archivos. Al final lista los archivos cambiados y cómo probarlo.
```
✅ **Listo cuando:** haces un pedido → el carrito queda vacío y el panel lo muestra en "Pedidos recientes" con su total.

## ⑤ Entender (Copilot, modo **Ask**, 5 min)
```
Explícame como mentor cómo se arma un pedido: desde "🛒 Agregar" hasta el mensaje de
WhatsApp y su registro en el panel. Menciona #config.js, #data.js, #cliente.js y #panel.js,
y por qué el carrito se borra al recargar la página. Termina con 2 preguntas para comprobar
que entendí.
```
✅ **Listo cuando:** el equipo responde las 2 preguntas sin mirar la pantalla.

## 🚑 Si algo sale mal
- **Copilot cambió algo que no pedí:** **Undo** y repite el prompt.
- **Página en blanco o un botón no responde:** `F12` → **Console** → copia el error rojo → en Agent escribe `Tengo este error en la consola. Diagnostica la causa y aplica la corrección mínima.` y pega el error debajo.
- **Siguen los datos de la plantilla:** Panel → **Configuración → Restablecer datos**. · **Sin mensajes de Copilot:** usa la cuenta de otro integrante.
