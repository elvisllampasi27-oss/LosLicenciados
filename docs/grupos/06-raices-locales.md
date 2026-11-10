# 🧺 Grupo 06 · Raíces Locales

**Su app:** una **tienda en línea de artesanos y productores rurales** de Ayacucho, **a precio justo y sin intermediarios**. En el **sitio**, el comprador ve los productos con su **taller o comunidad**, los agrega a un **carrito** y confirma su pedido: recibe un **código** para **seguir su pedido**, sin dar nombre ni teléfono. En el **panel**, el equipo atiende los pedidos en un **tablero**, calcula el **precio justo** de cada producto y una **inteligencia artificial (Gemini)** le ayuda a escribir **la historia del producto**. Todo se guarda **en la nube** (Supabase).

| Cara | Archivo | Quién la usa |
|---|---|---|
| 🌐 Sitio | `index.html` | Compradores: eligen productos, piden y siguen su pedido |
| 🛠️ Panel | `panel.html` | El equipo y los productores: productos, pedidos, precio justo e historias |

**Cómo usar esta guía:**
- **🧠 Pega en el Analista** → en claude.ai o gemini.google.com.
- **🛠️ Pega en Copilot** → en VS Code: `Ctrl + Alt + I` → modo **Agent** → pega → **Enter** → al terminar, **Keep**.
- **✋ A mano** → lo haces tú.
- **✅ Comprueba** → hazlo antes de pasar al siguiente paso.
- **F5** = recargar la página.

---

## Paso 1 · El Analista
**✋ A mano:** abre claude.ai o gemini.google.com y adjunta su ficha **`6.docx`** con 📎.

**🧠 Pega en el Analista:**
```
Actúa como analista de producto digital. Te adjunto la ficha del Lean Canvas de nuestro
emprendimiento: una tienda en línea que conecta a artesanos y productores rurales de Ayacucho
con compradores, para que vendan a precio justo y sin intermediarios. La ficha tiene dos
nombres (Raíces Locales y Ayni Emprende): elige uno y explica en 1 línea por qué.
Vamos a adaptar una plantilla web que ya funciona y tiene dos caras: un SITIO para compradores
(portada, beneficios, cómo funciona, productos, carrito y seguimiento del pedido, testimonio
y contacto) y un PANEL para el equipo (resumen, productos, pedidos y herramientas).

Tu tarea: decide los textos, el color, los productos de ejemplo y los datos de la tienda.
El módulo de datos ya está definido y NO lo cambies: se llama "Productos" (singular
"producto", botón "Nuevo producto", ícono 🧺, tabla "productos") con estos 8 campos:
nombre | Nombre | text | | sí | titulo
categoria | Categoría | select | Artesanía, Alimentos, Textiles | sí | categoria
precio | Precio (S/) | number | | sí | precio
taller | Taller o comunidad | text | | sí | ninguno
stock | Stock | number | | sí | ninguno
estado | Estado | select | Disponible, Agotado, Borrador | sí | estado
icono | Ícono (emoji) | text | | no | icono
descripcion | Descripción | textarea | | no | descripcion
Estado que se publica en el sitio: Disponible.

Responde SOLO con el formato siguiente, en Markdown, sin frases antes ni después.
Si falta información, propón algo coherente y márcalo con ⚠️.
Por privacidad, NUNCA incluyas nombres reales de personas, teléfonos ni DNI. En "taller"
usa el nombre de un taller o de una comunidad de Ayacucho (por ejemplo "Taller de Quinua").

# Mi proyecto

## 1. Identidad
- Nombre (y por qué, en 1 línea):
- Eslogan (máx. 8 palabras; marca con *asteriscos* las 2 palabras a resaltar):
- Propuesta de valor (máx. 30 palabras):
- Color de acento (hex, que transmita lo andino y lo natural):

## 2. Partes que usaremos
- Sitio del cliente: sí (compradores)
- Panel de control: sí (equipo y productores)

## 3. Módulo de datos
- Campos: los 8 de arriba, tal cual.
- 6 productos de ejemplo de Ayacucho, uno por línea:
  nombre | categoría | precio | taller | stock | estado | ícono | descripción (1 frase)
  2 de cada categoría. 4 en "Disponible" (stock entre 3 y 30), 1 en "Agotado" (stock 0)
  y 1 en "Borrador".

## 4. Textos del sitio
- Beneficio 1, 2 y 3: emoji | título corto | 1 frase
- Paso 1, 2 y 3: título | 1 frase (elegir, pedir y recibir)
- Testimonio: frase | nombre ficticio | distrito de Ayacucho
- Datos de contacto: zona y horario (sin dirección exacta)

## 5. Tienda
- Prefijo del código de pedido (2 letras, con las iniciales del nombre):
- 5 zonas de entrega en Huamanga (la última: "Recojo en feria"):
- Pago justo por hora de trabajo de un artesano (S/):
- Ganancia del productor (%):
- Porcentaje que suele quedarse un intermediario (%):
```

**✋ A mano:** copia toda la respuesta. En VS Code abre **`mi-proyecto.md`** (junto a `index.html`) → `Ctrl + A` → `Ctrl + V` → `Ctrl + S`.
⛔ No la pegues en otro archivo. Si te equivocaste: `Ctrl + Shift + G` → clic derecho en ese archivo → **Discard Changes**.

**✅ Comprueba:** `mi-proyecto.md` tiene las 5 secciones, **un solo nombre** para el emprendimiento y 6 productos con su taller y stock.

---

## Paso 2 · Configuración
**🛠️ Pega en Copilot:**
```
Con las secciones 1, 2 y 3 de #mi-proyecto.md, actualiza SOLO #config.js: proyecto.nombre,
partes, modulo (nombre "Productos", singular "producto", nuevo "Nuevo producto", icono "🧺"),
tabla "productos", los 8 campos con sus roles (taller y stock sin rol; stock con tipo
"number"), catalogo.soloEstado "Disponible" y datosEjemplo con los 6 productos. Cambia los
nombres de mensajesEjemplo por nombres genéricos (por ejemplo "Cliente de Huanta"). Mantén
supabase.
```

**✅ Comprueba:** abre `panel.html` → **Configuración** → **Restablecer datos** → menú **Productos**. Deben verse **6 productos** con las columnas Taller o comunidad y Stock.

---

## Paso 3 · Textos del sitio
**🛠️ Pega en Copilot:**
```
Con las secciones 1 y 4 de #mi-proyecto.md, actualiza los textos de #index.html: <title>,
meta description, chip y <h1> de la portada (las palabras con * van dentro de
<span class="titulo-dorado">), propuesta de valor, botones de la portada, beneficios, pasos,
testimonio y contacto. La sección del catálogo ahora se llama "Productos de nuestras
comunidades" (chip, h2 y p). Cambia las 2 tarjetas flotantes por "🤝 Precio justo" y
"🛒 Pedido con código", y los datos "usuarios" y "equipos" por "productores" y "comunidades".
Cambia SOLO textos y emojis; no toques clases, ids ni scripts.
```

**✅ Comprueba:** abre `index.html` y pulsa **F5**. Debe verse su eslogan y la sección **"Productos de nuestras comunidades"** con los **4 productos disponibles**.

---

## Paso 4 · Colores
**🛠️ Pega en Copilot:**
```
Usa el color de acento de #mi-proyecto.md en #base.css: cambia SOLO --acento, --acento-fuerte,
--sobre-acento, --dorado-1 y --dorado-2 (en :root y en [data-tema="oscuro"]) para crear una
paleta armónica. Elige --sobre-acento entre #1C1206 y #FFFFFF según cuál tenga contraste AA
(4.5:1) sobre --acento, e indícame el contraste. En #animaciones.js ajusta los colores por
defecto de la esfera (color y color2) a la nueva paleta.
```

**✅ Comprueba:** **F5** en el sitio y en el panel. Los botones, los títulos y la esfera tienen su color, y el texto de los botones se lee bien.

---

## Paso 5 · ☁️ Base de datos en la nube (Supabase)
> Una sola cuenta por grupo.

**🛠️ Pega en Copilot:**
```
Lee #config.js y crea el archivo supabase/tablas.sql copiando la estructura de
#ejemplo-productos.sql: una tabla con el nombre de CONFIG.tabla y una columna por cada campo
de CONFIG.campos (text, textarea y select → text; number → numeric; date → date), con
not null solo en el campo de rol titulo; la tabla mensajes igual que en el modelo; una tabla
pedidos con las columnas codigo (text), detalle (text), total (numeric), zona (text) y
estado (text), además de id y created_at como en el modelo; y los grant, enable row level
security y políticas del modelo para las tres tablas. No modifiques ningún otro archivo.
```
**✅ Comprueba:** existe `supabase/tablas.sql` con tres `create table`: `productos`, `mensajes` y `pedidos`.

**✋ A mano (crear el proyecto):**
1. supabase.com → **Start your project** → **Continue with GitHub** → **Authorize supabase**.
2. Solo la primera vez: **New organization** → deja el nombre, Type **Personal**, Plan **Free - $0/month** → **Create organization**.
3. **New project** → Name `raices-5b` → **Generate a password** (guárdala) → Region: deja **Americas** → en *Security* deja marcado **Enable Data API** → **Create new project**. Espera a que diga **Healthy**.
4. Menú de la izquierda → **SQL Editor** (ícono `>_`) → pega **todo** `supabase/tablas.sql` → **Run** (o `Ctrl + Enter`). Si sale un aviso de *destructive operation*, pulsa **Run this query**: es por los `drop policy if exists`, no borra datos.

**✅ Comprueba:** dice **Success**. En **Table Editor** aparecen `productos`, `mensajes` y `pedidos`.

**✋ A mano (conectar la app):**
1. En **Project Overview** (🏠) está la URL `https://….supabase.co`: pulsa **Copy** y pégala en `js/config.js`, en `supabase` → `url: ""`.
2. Pulsa el botón verde **Connect** (arriba) o ve a **Project Settings → API Keys** y copia la **Publishable key** (`sb_publishable_…`). Pégala en `clave: ""` de `supabase`. Guarda con `Ctrl + S`.
3. Abre `panel.html` → **Configuración** → **Restablecer datos**.

**✅ Comprueba:** arriba en el panel dice **☁️ Supabase**, y en **Table Editor** → `productos` aparecen los 6 productos.

**✋ A mano (prueba con 2 PC):**
1. Pásale tu `js/config.js` a un compañero. Él lo reemplaza en su proyecto.
2. Compañero: en el panel, **＋ Nuevo producto** → llénalo con stock **5** y estado **Disponible** → **Guardar**.
3. Tú: abre `index.html` y pulsa **F5**.

**✅ Comprueba:** ves el producto de tu compañero en "Productos de nuestras comunidades".

---

## Paso 6 · 🛒 Carrito y pedido con código
**🛠️ Pega en Copilot:**
```
Convierte el catálogo del sitio en una tienda con carrito:
- En #config.js agrega CONFIG.pedidos = { prefijo, zonas, estados: ["Nuevo", "Preparando",
  "Entregado"] } con el prefijo y las 5 zonas de la sección 5 de #mi-proyecto.md.
- En #cliente.js, en tarjeta(): muestra los chips de categoría y "🤝 Precio justo",
  debajo del nombre "🏡 " + el taller, y en el pie el precio, "Quedan N" (o "Agotado") y un
  botón "🛒 Agregar" con data-agregar = id (desactivado si el stock es 0). Quita el botón
  "Me interesa" y su código.
- En #index.html, antes del testimonio, agrega una section id="pedido" con el título
  "Tu pedido", el texto "No te pedimos nombre ni teléfono: te damos un código", y 2 tarjetas:
  "🛒 Carrito" con un div id="carrito" (aria-live="polite") y "📦 Sigue tu pedido" (vacía por
  ahora). En el nav agrega "🛒 Pedido" con un contador id="contador-carrito" oculto si es 0.
- En #cliente.js crea el carrito (en memoria, una lista de { id, cantidad }):
  · "🛒 Agregar" suma 1; nunca más que el stock (aviso "Solo quedan N").
  · El carrito muestra cada producto con botones − y ＋ (con aria-label), el subtotal, el
    total con Util.soles(), un select "Zona de entrega" con CONFIG.pedidos.zonas y el botón
    "Confirmar pedido". Vacío: usa la clase .vacio con "Tu carrito está vacío".
  · Al confirmar: crea un código = prefijo + "-" + 4 números al azar, guarda
    Datos.crear("pedidos", { codigo, detalle: "2 × Queso; 1 × Manta", total, zona,
    estado: "Nuevo" }), descuenta el stock de cada producto con Datos.actualizar (si llega a
    0, cambia su estado a "Agotado"), vacía el carrito, muestra en grande "✅ Pedido recibido.
    Guarda tu código:" con el código y vuelve a cargar el catálogo.
  Inserta los textos con Util.seguro().
- Estilos en #cliente.css con las clases y variables de base.css.
Cambia SOLO esos 4 archivos. Al final lista los archivos cambiados y cómo probarlo.
```

**✅ Comprueba:**
1. `index.html` → **F5**. Cada producto muestra su taller, **"🤝 Precio justo"** y **"Quedan N"**.
2. Agrega 2 productos al carrito: el contador del menú sube. En **🛒 Pedido** pulsa **＋** más veces que el stock: aparece **"Solo quedan N"**.
3. Elige una zona → **Confirmar pedido**. Aparece tu código, por ejemplo **RL-4821**. **Anótalo.**
4. En Supabase → **Table Editor** → `pedidos` está tu pedido, y en `productos` el stock bajó.

---

## Paso 7 · 📦 Tablero de pedidos y seguimiento
**🛠️ Pega en Copilot:**
```
Agrega la atención de pedidos en el panel y el seguimiento en el sitio:
- En #panel.html agrega al menú lateral, debajo del módulo, el enlace "📦 Pedidos"
  (data-vista="pedidos", con un contador id="contador-pedidos" oculto si es 0) y una nueva
  section class="vista" data-vista="pedidos" hidden, con el título "Pedidos" y un div
  class="tablero" id="tablero-pedidos".
- En #panel.js, dentro de cargar(), lee Datos.listar("pedidos") y crea pintarPedidos(): una
  columna por cada estado de CONFIG.pedidos.estados con su cantidad; cada pedido es una
  tarjeta con el código, Util.hace(created_at), el detalle, "📍 zona · total" y, si no está
  en el último estado, un botón "Pasar a [siguiente estado] →" que hace
  Datos.actualizar("pedidos", id, { estado }), muestra un aviso y vuelve a cargar. El contador
  del menú muestra los pedidos en "Nuevo". Columna vacía: "Sin pedidos".
- En #index.html, en la tarjeta "📦 Sigue tu pedido", agrega un formulario
  id="formulario-seguir" con un input para el código (con label) y un botón "Buscar", y un
  div id="seguimiento" con aria-live="polite".
- En #cliente.js, al buscar: compara el código sin importar mayúsculas con
  Datos.listar("pedidos"). Si existe, muestra el código, el detalle, el total y los estados
  como pasos: ✅ los ya cumplidos y ⏳ los que faltan, con la zona y Util.hace(). Si no,
  "No encontramos el pedido [código]".
- Inserta los textos con Util.seguro(). Estilos en #panel.css y #cliente.css con las
  variables de base.css (tablero en 3 columnas en pantallas grandes y 1 en celular).
Cambia SOLO esos archivos. Al final lista los archivos cambiados y cómo probarlo.
```

**✅ Comprueba:**
1. `panel.html` → **F5** → menú **📦 Pedidos**. Tu pedido está en la columna **Nuevo**.
2. Pulsa **Pasar a Preparando →**: tu pedido pasa a la siguiente columna.
3. `index.html` → **Sigue tu pedido** → escribe tu código **en minúsculas** → **Buscar**. Se ve **✅ Nuevo ✅ Preparando ⏳ Entregado**.
4. Escribe un código falso: dice **"No encontramos el pedido"**.

---

## Paso 8 · 💰 Calculadora de precio justo
**🛠️ Pega en Copilot:**
```
Agrega al panel una vista "Herramientas" con la calculadora de precio justo:
- En #config.js agrega CONFIG.precioJusto = { pagoPorHora, ganancia, intermediario } con los
  valores de la sección 5 de #mi-proyecto.md.
- En #panel.html agrega al menú lateral el enlace "🧰 Herramientas" (data-vista=
  "herramientas") y una nueva section class="vista" data-vista="herramientas" hidden con el
  título "Herramientas" y una tarjeta "💰 Calculadora de precio justo" con los campos (con
  label): producto (select), materiales (S/), horas de trabajo, pago por hora (S/) y
  ganancia (%), un div id="pj-resultado" con aria-live="polite" y un botón "Usar este precio".
- En #panel.js: llena el select con los productos (ícono + nombre; value = id) cada vez que
  se carguen los datos. Pago por hora y ganancia empiezan con los valores de
  CONFIG.precioJusto. Cada vez que cambie un campo, calcula:
  precio justo = (materiales + horas × pago por hora) × (1 + ganancia / 100) y
  lo que pagaría un intermediario = precio justo × (1 − intermediario / 100),
  redondeados a S/ 0.50. Muestra los dos en grande (el justo en verde y el del intermediario
  en rojo), "Vendiendo directo ganas S/ X más por unidad" y el precio actual del producto.
  "Usar este precio" guarda el precio justo en el producto con Datos.actualizar, muestra un
  aviso y vuelve a cargar.
- Estilos en #panel.css con las variables de base.css.
Cambia SOLO esos 4 archivos. Al final lista los archivos cambiados y cómo probarlo.
```

**✅ Comprueba:** `panel.html` → **F5** → menú **🧰 Herramientas**. Elige un producto, materiales **30**, horas **8**. Con pago **S/ 8** y ganancia **20 %**, el precio justo es **S/ 113.00**: (30 + 8 × 8) × 1.20 = 112.80 → 113. Pulsa **Usar este precio** y revisa en **Productos** que cambió.

---

## Paso 9 · 🤖 La historia de tu producto (Gemini)
**🛠️ Pega en Copilot:**
```
Agrega a la vista Herramientas del panel "La historia de tu producto" con IA:
- En #config.js agrega CONFIG.ia con: clave "" (clave de Gemini), modelo
  "gemini-flash-lite-latest", instrucciones (es redactor de una tienda en línea de artesanos y
  productores rurales de Ayacucho a precio justo; con los datos que le den escribe la
  descripción del producto en español, cálida y honesta, en 3 oraciones y máximo 60 palabras:
  qué es, cómo y dónde se hace, y por qué comprarlo; no inventa datos, no usa nombres de
  personas, ni emojis, ni comillas) y plantillaDemo "{nombre}, de {taller}. {datos}. Al
  comprarlo, el pago va directo a quien lo hizo, a precio justo y sin intermediarios."
- Crea el archivo js/ia.js con el mismo patrón que data.js: const IA con una función
  async historia(nombre, taller, datos) que, si CONFIG.ia.clave tiene valor, llama con fetch a
  https://generativelanguage.googleapis.com/v1beta/models/ + CONFIG.ia.modelo +
  ":generateContent" (POST, cabecera "x-goog-api-key" con la clave, cuerpo con
  systemInstruction = las instrucciones y contents = "Producto: ... Taller o comunidad: ...
  Datos: ...") y devuelve el texto. Si no hay clave o si Gemini falla, usa la plantillaDemo
  reemplazando {nombre}, {taller} y {datos}. Devuelve { texto, modo } con modo "gemini" o
  "demo". Exporta también modo().
- En #panel.html carga js/ia.js antes de js/animaciones.js. En la vista Herramientas, junto
  a la calculadora (2 columnas en pantallas grandes), agrega una tarjeta "🤖 La historia de
  tu producto" con un chip del modo y los campos (con label): producto (select), "Datos
  sueltos" (textarea), un botón "✍️ Escribir con IA", "Descripción propuesta (puedes
  corregirla)" (textarea) y un botón "Guardar en el producto".
- En #panel.js: llena el select igual que el de la calculadora. El chip dice "Con Gemini" o
  "Modo demo" según IA.modo(). "Escribir con IA" muestra "Escribiendo…" y luego el texto de
  IA.historia(); si había clave pero respondió el modo demo, muestra un aviso. "Guardar en el
  producto" guarda el texto en el campo de rol descripcion con Datos.actualizar.
Cambia SOLO esos archivos. Al final lista los archivos cambiados y cómo probarlo.
```

**✅ Comprueba (modo demo):** **Herramientas** → elige un producto → en **Datos sueltos** escribe, por ejemplo, `lana de oveja, tintes naturales, 2 semanas en telar` → **✍️ Escribir con IA**. Aparece la descripción con la plantilla. Pulsa **Guardar en el producto** y mira en `index.html` (**F5**) la nueva descripción.

**✋ A mano (conectar Gemini):**
1. El profesor te da la **clave del taller**.
2. Pégala en `js/config.js`, en `ia` → `clave: ""`. Guarda con `Ctrl + S`.

**✅ Comprueba (con Gemini):** **F5** → el chip dice **"Con Gemini"**. Con los mismos datos, **✍️ Escribir con IA**: ahora es un texto nuevo de 3 oraciones, que **no inventa** cosas que no escribiste. Corrígelo si quieres y guárdalo.

---

## Paso 10 · 🚀 Reto libre
Elijan una idea y **escriban su propio prompt** para Copilot. Debe tener: **archivos con `#`**, **"Cambia SOLO esos archivos"**, **todo lo que debe hacer** y **"Al final lista los archivos cambiados y cómo probarlo."**

| Idea | Archivos |
|---|---|
| 🏡 En el sitio, filtrar los productos por taller o comunidad | `#index.html` `#cliente.js` |
| 💾 Que el carrito no se pierda al recargar la página (localStorage) | `#cliente.js` |
| 📊 En el Resumen del panel, lo vendido por cada taller (suma de pedidos) | `#panel.html` `#panel.js` |
| ⚠️ Aviso en el panel de los productos con stock menor a 3 | `#panel.js` |

**✅ Comprueba:** funciona y pueden explicar qué archivo cambió y por qué.

---

## 🚑 Si algo sale mal
| Problema | Qué hacer |
|---|---|
| Copilot cambió algo que no pedí | **Undo** y pega otra vez el prompt |
| Página en blanco o un botón no hace nada | **F12** → **Console** → copia el error rojo → pega en Copilot: `Tengo este error en la consola. Diagnostica la causa y aplica la corrección mínima.` y el error debajo |
| "🛒 Agregar" está desactivado | El producto tiene stock 0. Súbelo en el panel → **Productos** → editar |
| Un producto desapareció del sitio | Se agotó y pasó a **Agotado**. Súbele el stock y vuelve a ponerlo en **Disponible** |
| "No encontramos el pedido" con el código correcto | Revisa que sea el mismo proyecto de Supabase (mismo `config.js`) y pulsa **F5** |
| La historia sale con la plantilla aunque puse la clave | Revisa que pegaste la clave **completa** en `ia.clave` y pulsa **F5**. Si sigue igual, **avísale al profesor**. Mientras tanto la app funciona en modo demo |
| Aviso "⚠️ Supabase · …" | Revisa la URL y la clave de `supabase` en `js/config.js` y que ejecutaste **todo** `tablas.sql` |
| Siguen los productos de la plantilla | Panel → **Configuración** → **Restablecer datos** |
