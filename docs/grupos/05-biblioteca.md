# 📚 Grupo 05 · Biblioteca Virtual

**Su app:** una **biblioteca de materiales de estudio** para postulantes a la UNSCH. En el **sitio**, el postulante **busca** y **filtra** materiales (PDF, videos y páginas web), los **abre**, los **califica con ⭐** y le pide recomendaciones a un **bibliotecario con inteligencia artificial (Gemini)** que solo recomienda materiales de la biblioteca. Cualquiera puede **sugerir un material**, pero el equipo lo **revisa en el panel** antes de publicarlo. Todo se guarda **en la nube** (Supabase).

| Cara | Archivo | Quién la usa |
|---|---|---|
| 🌐 Sitio | `index.html` | Postulantes y padres: buscan, abren, califican y sugieren materiales |
| 🛠️ Panel | `panel.html` | El equipo bibliotecario: publica, revisa sugerencias y ve los más usados |

**Cómo usar esta guía:**
- **🧠 Pega en el Analista** → en claude.ai o gemini.google.com.
- **🛠️ Pega en Copilot** → en VS Code: `Ctrl + Alt + I` → modo **Agent** → pega → **Enter** → al terminar, **Keep**.
- **✋ A mano** → lo haces tú.
- **✅ Comprueba** → hazlo antes de pasar al siguiente paso.
- **F5** = recargar la página.

---

## Paso 1 · El Analista
**✋ A mano:** abre claude.ai o gemini.google.com y adjunta su ficha **`05.docx`** con 📎.

**🧠 Pega en el Analista:**
```
Actúa como analista de producto digital. Te adjunto la ficha del Lean Canvas de nuestro
emprendimiento: una biblioteca virtual con materiales de estudio organizados y confiables para
los postulantes a la Universidad Nacional de San Cristóbal de Huamanga (UNSCH), en Ayacucho.
Vamos a adaptar una plantilla web que ya funciona y tiene dos caras: un SITIO para postulantes
y padres (portada, beneficios, cómo funciona, biblioteca con buscador, bibliotecario con IA,
sugerir un material, testimonio y contacto) y un PANEL para el equipo bibliotecario (resumen,
tabla de materiales, sugerencias por revisar y materiales destacados).

Tu tarea: decide los textos, el color, los materiales de ejemplo y el saludo del bibliotecario.
El módulo de datos ya está definido y NO lo cambies: se llama "Materiales" (singular
"material", botón "Nuevo material", ícono 📚, tabla "materiales") con estos 7 campos:
titulo | Título | text | | sí | titulo
area | Área | select | Matemática, Razonamiento, Comunicación, Ciencias, Humanidades | sí | categoria
tipo | Tipo | select | 📄 PDF, 🎥 Video, 🔗 Web | sí | ninguno
enlace | Enlace (https://…) | text | | sí | ninguno
estado | Estado | select | Publicado, Por revisar, Rechazado | sí | estado
vistas | Vistas | number | | no | ninguno
descripcion | Descripción | textarea | | no | descripcion
Estado que se publica en el sitio: Publicado.

Responde SOLO con el formato siguiente, en Markdown, sin frases antes ni después.
Si falta información, propón algo coherente y márcalo con ⚠️.
Por privacidad, NUNCA incluyas nombres reales, teléfonos ni DNI.

# Mi proyecto

## 1. Identidad
- Nombre:
- Eslogan (máx. 8 palabras; marca con *asteriscos* las 2 palabras a resaltar):
- Propuesta de valor (máx. 30 palabras):
- Color de acento (hex, que transmita conocimiento y confianza):

## 2. Partes que usaremos
- Sitio del cliente: sí (postulantes y padres)
- Panel de control: sí (equipo bibliotecario)

## 3. Módulo de datos
- Campos: los 7 de arriba, tal cual.
- 8 materiales de ejemplo para el examen de admisión, uno por línea:
  título | área | tipo | enlace | estado | vistas | descripción (1 frase)
  Usa al menos una vez cada área. 7 en "Publicado" (vistas entre 5 y 20) y 1 en "Por revisar"
  (vistas 0). Para no inventar enlaces que no existen, usa SOLO estos dos tipos de enlace:
  · Videos: https://www.youtube.com/results?search_query=palabras+del+tema
  · Web: páginas principales de Khan Academy en español, por ejemplo
    https://es.khanacademy.org/math/algebra o https://es.khanacademy.org/science/biology

## 4. Textos del sitio
- Beneficio 1, 2 y 3: emoji | título corto | 1 frase
- Paso 1, 2 y 3: título | 1 frase
- Testimonio: frase | nombre ficticio | "Postulante a [carrera]" o "Madre de familia"
- Datos de contacto: zona y horario (sin dirección exacta)

## 5. Bibliotecario
- Saludo (1 frase):
- 3 ejemplos de pedidos de un postulante (máx. 8 palabras cada uno):
```

**✋ A mano:** copia toda la respuesta. En VS Code abre **`mi-proyecto.md`** (junto a `index.html`) → `Ctrl + A` → `Ctrl + V` → `Ctrl + S`.
⛔ No la pegues en otro archivo. Si te equivocaste: `Ctrl + Shift + G` → clic derecho en ese archivo → **Discard Changes**.

**✅ Comprueba:** `mi-proyecto.md` tiene las 5 secciones y 8 materiales, cada uno con un enlace que empieza con `https://`.

---

## Paso 2 · Configuración
**🛠️ Pega en Copilot:**
```
Con las secciones 1, 2 y 3 de #mi-proyecto.md, actualiza SOLO #config.js: proyecto.nombre,
partes, modulo (nombre "Materiales", singular "material", nuevo "Nuevo material", icono "📚"),
tabla "materiales", los 7 campos con sus roles (tipo, enlace y vistas sin rol; enlace
requerido y con enTabla: false; vistas con tipo "number"), catalogo.soloEstado "Publicado" y
datosEjemplo con los 8 materiales. Mantén mensajesEjemplo y supabase.
```

**✅ Comprueba:** abre `panel.html` → **Configuración** → **Restablecer datos** → menú **Materiales**. Deben verse **8 materiales** con las columnas Área, Tipo, Estado y Vistas, y el botón **＋ Nuevo material**.

---

## Paso 3 · Textos del sitio
**🛠️ Pega en Copilot:**
```
Con las secciones 1 y 4 de #mi-proyecto.md, actualiza los textos de #index.html: <title>,
meta description, chip y <h1> de la portada (las palabras con * van dentro de
<span class="titulo-dorado">), propuesta de valor, botones de la portada, beneficios, pasos,
testimonio y contacto. La sección del catálogo ahora es la biblioteca: chip "Biblioteca", h2
"Encuentra tu material" y un p corto. Cambia las 2 tarjetas flotantes por "🔎 Busca en
segundos" y "🤖 Bibliotecario con IA", y los datos "usuarios" y "equipos" por "postulantes" y
"áreas". Cambia SOLO textos y emojis; no toques clases, ids ni scripts.
```

**✅ Comprueba:** abre `index.html` y pulsa **F5**. Debe verse su eslogan y la sección **"Encuentra tu material"** con los **7 materiales publicados**.

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
valoraciones con las columnas material_id (text) y estrellas (numeric), además de id y
created_at como en el modelo; y los grant, enable row level security y políticas del modelo
para las tres tablas. No modifiques ningún otro archivo.
```
**✅ Comprueba:** existe `supabase/tablas.sql` con tres `create table`: `materiales`, `mensajes` y `valoraciones`.

**✋ A mano (crear el proyecto):**
1. supabase.com → **Start your project** → **Continue with GitHub** → **Authorize supabase**.
2. Solo la primera vez: **New organization** → deja el nombre, Type **Personal**, Plan **Free - $0/month** → **Create organization**.
3. **New project** → Name `biblioteca-5b` → **Generate a password** (guárdala) → Region: deja **Americas** → en *Security* deja marcado **Enable Data API** → **Create new project**. Espera a que diga **Healthy**.
4. Menú de la izquierda → **SQL Editor** (ícono `>_`) → pega **todo** `supabase/tablas.sql` → **Run** (o `Ctrl + Enter`). Si sale un aviso de *destructive operation*, pulsa **Run this query**: es por los `drop policy if exists`, no borra datos.

**✅ Comprueba:** dice **Success**. En **Table Editor** aparecen `materiales`, `mensajes` y `valoraciones`.

**✋ A mano (conectar la app):**
1. En **Project Overview** (🏠) está la URL `https://….supabase.co`: pulsa **Copy** y pégala en `js/config.js`, en `supabase` → `url: ""`.
2. Pulsa el botón verde **Connect** (arriba) o ve a **Project Settings → API Keys** y copia la **Publishable key** (`sb_publishable_…`). Pégala en `clave: ""` de `supabase`. Guarda con `Ctrl + S`.
3. Abre `panel.html` → **Configuración** → **Restablecer datos**.

**✅ Comprueba:** arriba en el panel dice **☁️ Supabase**, y en **Table Editor** → `materiales` aparecen los 8 materiales.

**✋ A mano (prueba con 2 PC):**
1. Pásale tu `js/config.js` a un compañero. Él lo reemplaza en su proyecto.
2. Compañero: en el panel, **＋ Nuevo material** → llénalo con un enlace `https://…` y estado **Publicado** → **Guardar**.
3. Tú: abre `index.html` y pulsa **F5**.

**✅ Comprueba:** ves el material de tu compañero en "Encuentra tu material".

---

## Paso 6 · 🔎 Buscador, filtros y "Más vistos"
**🛠️ Pega en Copilot:**
```
Convierte el catálogo del sitio en una biblioteca:
- En #config.js agrega CONFIG.biblioteca = { masVistos: 3 }.
- En #index.html, dentro de la sección catalogo y antes de .catalogo, agrega un buscador: un
  input type="search" id="buscar" (con label de la clase oculto-visual) y un chip
  id="buscar-resultado" con aria-live="polite". En el aside, debajo de los filtros de
  categoría, agrega el subtítulo "Filtrar por tipo" y un div.filtros id="filtros-tipo".
  Cambia el subtítulo "Lo más nuevo" por "🔥 Más vistos".
- En #cliente.js:
  · En tarjeta(): el ícono grande es el emoji del campo tipo (lo que va antes del espacio);
    muestra 2 chips (área y tipo); en el pie, "👁️ N vistas" y un enlace "Abrir ↗" con el
    enlace del material, target="_blank", rel="noopener" y data-abrir con el id. Acepta solo
    enlaces que empiecen con http:// o https:// (si no, usa "#"). Quita el botón
    "Me interesa" y su código.
  · El buscador filtra mientras se escribe, sin importar mayúsculas ni tildes: cada palabra
    escrita debe aparecer en el título, el área o la descripción. Se combina con el filtro de
    área y con el nuevo filtro de tipo (botones "Todos" + las opciones del campo tipo). El chip
    muestra "X de Y". Si no hay resultados: "No encontramos materiales".
  · La lista "🔥 Más vistos" (en #lista-novedades) muestra los CONFIG.biblioteca.masVistos
    materiales con más vistas, con su enlace y "👁️ N".
  · Al hacer clic en cualquier elemento con data-abrir, suma 1 a las vistas de ese material
    con Datos.actualizar(CONFIG.tabla, id, { vistas }) y vuelve a pintar.
  Inserta los textos con Util.seguro().
- Estilos en #cliente.css con las clases y variables de base.css.
Cambia SOLO esos 4 archivos. Al final lista los archivos cambiados y cómo probarlo.
```

**✅ Comprueba:**
1. `index.html` → **F5**. Escribe en el buscador una palabra de un título, sin tildes ni mayúsculas (por ejemplo `algebra`): solo quedan los que la tienen y el chip dice, por ejemplo, **1 de 7**.
2. Borra el texto y elige el tipo **🎥 Video**: solo quedan los videos. Elige además un área: se combinan.
3. Pulsa **Abrir ↗** en un material: se abre en otra pestaña. Vuelve y mira que sus **vistas subieron en 1**.
4. En **🔥 Más vistos** aparecen los 3 con más vistas.

---

## Paso 7 · 🤖 Bibliotecario con IA (Gemini)
**🛠️ Pega en Copilot:**
```
Agrega al sitio un "Bibliotecario con IA" que recomienda materiales de la biblioteca:
- En #config.js agrega CONFIG.ia con: clave "" (clave de Gemini), modelo
  "gemini-flash-latest", instrucciones (es el bibliotecario de una biblioteca virtual para
  postulantes a la UNSCH de Ayacucho; recibe la necesidad del postulante y la lista de
  materiales en JSON; recomienda de 1 a 3 materiales SOLO de esa lista y nunca inventa
  materiales ni enlaces; responde SOLO con un objeto JSON con las claves mensaje (1 frase) y
  recomendaciones (arreglo de { id, motivo } con el motivo en máximo 15 palabras); si ninguno
  sirve, recomendaciones vacío), y saludo y ejemplos con la sección 5 de #mi-proyecto.md.
- Crea el archivo js/ia.js con el mismo patrón que data.js: const IA con una función
  async recomendar(necesidad, materiales) que, si CONFIG.ia.clave tiene valor, llama con fetch
  a https://generativelanguage.googleapis.com/v1beta/models/ + CONFIG.ia.modelo +
  ":generateContent" (POST, cabecera "x-goog-api-key" con la clave, cuerpo con
  systemInstruction = las instrucciones, contents = "Necesidad: ..." + la lista de materiales
  en JSON solo con id, titulo, area y descripcion, y generationConfig.responseMimeType
  "application/json"), convierte la respuesta con JSON.parse y se queda solo con las
  recomendaciones cuyo id existe en la lista (máx. 3). Si no hay clave o si Gemini falla, usa
  el modo demo: busca las palabras del pedido (sin mayúsculas ni tildes, ignorando palabras
  como quiero, repasar, necesito, para, algo) en el título, el área y la descripción, y
  devuelve los 3 materiales con más coincidencias. Devuelve { mensaje, recomendaciones, modo }.
  Exporta también modo(), que devuelve "gemini" o "demo".
- En #index.html carga js/ia.js antes de js/animaciones.js. Antes del testimonio agrega una
  section id="bibliotecario" con un chip del modo, el título "Pregúntale al bibliotecario",
  el saludo, un formulario con un input (con label) y un botón "Recomiéndame", una fila de
  botones con los ejemplos y una zona de respuesta con aria-live="polite". Agrega
  "Bibliotecario" al nav.
- En #cliente.js: el chip dice "🤖 Bibliotecario con Gemini" o "🤖 Bibliotecario (modo demo)"
  según IA.modo(). Al pulsar un ejemplo, lo escribe en el input y envía el formulario. Al
  enviar, muestra "Buscando en la biblioteca…", llama a IA.recomendar con los materiales
  publicados y muestra el mensaje y una fila por recomendación: título, tipo · área — motivo y
  un enlace "Abrir ↗" con data-abrir (así también suma vistas). Si había clave pero respondió
  el modo demo, agrega "(Modo demo: Gemini no respondió)". Usa Util.seguro().
- Estilos en #cliente.css con las variables de base.css.
Cambia SOLO esos archivos. Al final lista los archivos cambiados y cómo probarlo.
```

**✅ Comprueba (modo demo):** `index.html` → **F5** → menú **Bibliotecario**. El chip dice **"(modo demo)"**. Pulsa un ejemplo: aparecen materiales de la biblioteca con su botón **Abrir ↗**. Escribe algo sin relación (`quiero cocinar pachamanca`): dice que no encontró materiales.

**✋ A mano (conectar Gemini, con el profesor):**
1. El **profesor** crea **una sola clave para todo el salón** (es solo para el taller; al final la borra): **aistudio.google.com** con su cuenta de Google → **Get API key** → **Create API key** → copia la clave y se la pasa a cada grupo.
2. Pégala en `js/config.js`, en `ia` → `clave: ""`. Guarda con `Ctrl + S`. No hay que instalar ni ejecutar nada.

**✅ Comprueba (con Gemini):** **F5** → el chip dice **"🤖 Bibliotecario con Gemini"**. Escribe `Quiero prepararme en números para Ingeniería`: Gemini recomienda materiales **de su biblioteca**, cada uno con el motivo. Ningún enlace es inventado: todos abren materiales de la tabla.

---

## Paso 8 · ⭐ Calificar y ✅ sugerir un material
**🛠️ Pega en Copilot:**
```
Agrega al sitio la calificación con estrellas y el formulario para sugerir materiales:
- En #cliente.js, al cargar el catálogo, lee también Datos.listar("valoraciones"). En
  tarjeta(), debajo de la descripción, agrega un grupo de 5 botones ★ (con aria-label
  "N estrellas") pintados según el promedio, y el texto "promedio (cantidad)" o
  "Sin calificar". Al pulsar una estrella, guarda Datos.crear("valoraciones",
  { material_id, estrellas }), muestra el aviso "¡Gracias por tu calificación!" y recuerda en
  localStorage (clave "loslicenciados_estrella_" + id) que ya calificó ese material: en ese
  caso las estrellas se ven con su nota y desactivadas.
- En #index.html, antes del testimonio, agrega una section id="sugerir" con el título
  "¿Conoces un buen material?", el texto "Lo revisamos antes de publicarlo" y un formulario
  id="formulario-sugerir" con los campos (con label) título, área (select), tipo (select),
  enlace (type="url") y "¿Por qué es útil?" (textarea), y el botón "Enviar sugerencia".
  Agrega "Sugerir" al nav.
- En #cliente.js llena los select con las opciones de los campos area y tipo. Al enviar:
  el título es obligatorio y el enlace debe empezar con http:// o https:// (marca los campos
  con la clase campo--error); guarda con Datos.crear(CONFIG.tabla, ...) usando los nombres de
  los campos, estado "Por revisar" y vistas 0; limpia el formulario y muestra el aviso
  "¡Gracias! Revisaremos tu material."
- Estilos en #cliente.css con las variables de base.css (estrellas llenas en color dorado).
Cambia SOLO esos 3 archivos. Al final lista los archivos cambiados y cómo probarlo.
```

**✅ Comprueba:**
1. `index.html` → **F5** → califica un material con **4 ★**. Dice **"4.0 (1)"** y las estrellas quedan bloqueadas. En Supabase → `valoraciones` aparece tu calificación.
2. Menú **Sugerir** → pulsa **Enviar sugerencia** vacío: se marcan los campos en rojo. Escribe `javascript:alert(1)` en el enlace: también lo rechaza.
3. Llénalo bien con un enlace `https://…` → **Enviar sugerencia**. **F5**: tu material **todavía no** aparece en la biblioteca, porque está **Por revisar**.

---

## Paso 9 · 📥 Revisar sugerencias y 🏆 destacados
**🛠️ Pega en Copilot:**
```
En la vista Resumen de #panel.html agrega, debajo de .rejilla-resumen, 2 tarjetas (en 2
columnas en pantallas grandes y 1 en celular): "📥 Sugerencias por revisar" con un chip
contador id="revision-total" y un contenedor id="revision", y "🏆 Materiales destacados" con
un contenedor id="destacados". En #panel.js:
- pintarRevision(): los registros en estado "Por revisar", cada uno con título, "área · tipo
  · Util.hace(created_at)", su enlace (abre en otra pestaña; solo http/https) y 2 botones:
  "✅ Aprobar" (estado "Publicado") y "❌ Rechazar" (estado "Rechazado") con
  Datos.actualizar; muestra un aviso y vuelve a cargar. Si no hay, usa la clase .vacio con
  "No hay sugerencias pendientes".
- pintarDestacados(): lee Datos.listar("valoraciones") y muestra los 5 materiales publicados
  con más vistas, cada uno con "👁️ vistas · ⭐ promedio (votos)".
- Llama a las dos dentro de cargar(). Inserta los textos con Util.seguro(). Estilos en
  #panel.css con las variables de base.css.
Cambia SOLO esos 3 archivos. Al final lista los archivos cambiados y cómo probarlo.
```

**✅ Comprueba:**
1. `panel.html` → **Resumen** → **F5**. En **"Sugerencias por revisar"** aparece el material que sugeriste en el paso 8 y el de ejemplo.
2. Pulsa **✅ Aprobar** en el tuyo y **❌ Rechazar** en el otro: el contador baja a **0**.
3. `index.html` → **F5**: el material aprobado ya aparece en la biblioteca y el rechazado no.
4. En **"Materiales destacados"** se ven las vistas y el promedio de estrellas.

---

## Paso 10 · 🚀 Reto libre
Elijan una idea y **escriban su propio prompt** para Copilot. Debe tener: **archivos con `#`**, **"Cambia SOLO esos archivos"**, **todo lo que debe hacer** y **"Al final lista los archivos cambiados y cómo probarlo."**

| Idea | Archivos |
|---|---|
| 💾 "Mi lista": un botón 🔖 en cada material para guardarlo y verlo luego en una sección | `#index.html` `#cliente.js` |
| 🤖 En el panel, al aprobar una sugerencia, que Gemini escriba una descripción mejor | `#panel.js` `#ia.js` |
| 🏷️ Ordenar la biblioteca por "Más vistos", "Mejor calificados" o "Más nuevos" | `#index.html` `#cliente.js` |
| 📊 En el panel, una barra con cuántos materiales hay por área | `#panel.html` `#panel.js` |

**✅ Comprueba:** funciona y pueden explicar qué archivo cambió y por qué.

---

## 🚑 Si algo sale mal
| Problema | Qué hacer |
|---|---|
| Copilot cambió algo que no pedí | **Undo** y pega otra vez el prompt |
| Página en blanco o un botón no hace nada | **F12** → **Console** → copia el error rojo → pega en Copilot: `Tengo este error en la consola. Diagnostica la causa y aplica la corrección mínima.` y el error debajo |
| "Abrir ↗" no hace nada | El enlace del material no empieza con `https://`. Corrígelo en el panel → **Materiales** → editar |
| El bibliotecario dice "(Modo demo: Gemini no respondió)" | Revisa la clave en `ia.clave`. Si el error dice que el modelo no existe, cambia `modelo` por uno de los que aparecen en aistudio.google.com. Si dice que se agotó el límite, espera un minuto |
| Ya califiqué y quiero probar otra vez | **F12** → **Application** → **Local Storage** → borra las claves `loslicenciados_estrella_…` |
| Aviso "⚠️ Supabase · …" | Revisa la URL y la clave de `supabase` en `js/config.js` y que ejecutaste **todo** `tablas.sql` |
| No veo lo que guardó mi compañero | **F5** |
| Siguen los productos de la plantilla | Panel → **Configuración** → **Restablecer datos** |
