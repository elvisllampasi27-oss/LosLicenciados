# 🎓 Grupo 01 · Tutor Virtual con IA

**Su app:** los **docentes** cargan preguntas por curso en el **panel** (con fórmulas matemáticas). Los **alumnos**, en el **sitio**, practican con un **quiz** y le preguntan sus dudas a un **tutor con inteligencia artificial (Gemini)**. Las preguntas y los resultados se guardan **en la nube** (Supabase), y el docente ve el **progreso** de los alumnos.

| Cara | Archivo | Quién la usa |
|---|---|---|
| 🌐 Sitio | `index.html` | Alumnos: practican con el quiz y le preguntan al tutor |
| 🛠️ Panel | `panel.html` | Docentes: cargan preguntas y ven el progreso |

**Cómo usar esta guía:**
- **🧠 Pega en el Analista** → en claude.ai o gemini.google.com.
- **🛠️ Pega en Copilot** → en VS Code: `Ctrl + Alt + I` → modo **Agent** → pega → **Enter** → al terminar, **Keep**.
- **✋ A mano** → lo haces tú.
- **✅ Comprueba** → hazlo antes de pasar al siguiente paso.
- **F5** = recargar la página.

---

## Paso 1 · El Analista
**✋ A mano:** abre claude.ai o gemini.google.com y adjunta su ficha **`01.docx`** con 📎.

**🧠 Pega en el Analista:**
```
Actúa como analista de producto digital. Te adjunto la ficha del Lean Canvas de nuestro
emprendimiento: un tutor virtual con IA para los estudiantes del colegio Los Licenciados de
Ayacucho. Vamos a adaptar una plantilla web que ya funciona y tiene dos caras: un SITIO para los
alumnos (portada, beneficios, cómo funciona, preguntas para practicar, quiz, tutor con IA,
testimonio y contacto) y un PANEL para los docentes (resumen, tabla de preguntas y progreso).

Tu tarea: decide los textos, el color, las preguntas de ejemplo y las respuestas del tutor.
El módulo de datos ya está definido y NO lo cambies: se llama "Preguntas" (singular "pregunta",
botón "Nueva pregunta", ícono ❓, tabla "preguntas") con estos 6 campos:
pregunta | Pregunta | textarea | | sí | titulo
curso | Curso | select | Matemática, Comunicación, Ciencia, Historia | sí | categoria
opciones | Opciones (una por línea) | textarea | | sí | ninguno
respuesta | Respuesta correcta | text | | sí | ninguno
explicacion | Explicación | textarea | | no | descripcion
estado | Estado | select | Publicada, Borrador | sí | estado
Estado que se publica en el sitio: Publicada.

Responde SOLO con el formato siguiente, en Markdown, sin frases antes ni después.
Si falta información, propón algo coherente y márcalo con ⚠️.
Por privacidad, NUNCA incluyas nombres reales, teléfonos ni DNI.
Toda fórmula matemática escríbela en LaTeX entre signos de dólar, por ejemplo $\frac{3}{4}$ o $x^2$.

# Mi proyecto

## 1. Identidad
- Nombre:
- Eslogan (máx. 8 palabras; marca con *asteriscos* las 2 palabras a resaltar):
- Propuesta de valor (máx. 30 palabras):
- Color de acento (hex, que transmita confianza y estudio):

## 2. Partes que usaremos
- Sitio del cliente: sí (alumnos)
- Panel de control: sí (docentes)

## 3. Módulo de datos
- Campos: los 6 de arriba, tal cual.
- 8 preguntas de ejemplo de nivel secundaria: 3 de Matemática (con fórmulas en LaTeX), 2 de
  Comunicación, 2 de Ciencia y 1 de Historia del Perú. Cada una con 3 opciones (escríbelas
  separadas por " | "), la respuesta correcta escrita EXACTAMENTE igual que una de las opciones
  y una explicación corta. 7 en "Publicada" y 1 en "Borrador".

## 4. Textos del sitio
- Beneficio 1, 2 y 3: emoji | título corto | 1 frase
- Paso 1, 2 y 3: título | 1 frase
- Testimonio: frase | nombre ficticio | grado
- Datos de contacto: zona y horario (sin dirección exacta)

## 5. Tutor
- 5 respuestas del tutor en modo demo, una por línea: palabras clave separadas por coma (sin
  tildes) | respuesta corta (usa LaTeX en las de Matemática)
- Respuesta cuando no sabe (1 frase):
```

**✋ A mano:** copia toda la respuesta. En VS Code abre **`mi-proyecto.md`** (junto a `index.html`) → `Ctrl + A` → `Ctrl + V` → `Ctrl + S`.
⛔ No la pegues en otro archivo. Si te equivocaste: `Ctrl + Shift + G` → clic derecho en ese archivo → **Discard Changes**.

**✅ Comprueba:** `mi-proyecto.md` tiene las 5 secciones, 8 preguntas con sus opciones y las fórmulas escritas con `$`.

---

## Paso 2 · Configuración
**🛠️ Pega en Copilot:**
```
Con las secciones 1, 2 y 3 de #mi-proyecto.md, actualiza SOLO #config.js: proyecto.nombre,
partes, modulo (nombre "Preguntas", singular "pregunta", nuevo "Nueva pregunta", icono "❓"),
tabla "preguntas", los 6 campos con sus roles (opciones y respuesta con enTabla: false),
catalogo.soloEstado "Publicada" y datosEjemplo con las 8 preguntas. En cada pregunta, guarda
las opciones como un solo texto con cada opción separada por un salto de línea (\n). En las
fórmulas LaTeX escribe la barra invertida doble dentro del texto JavaScript (por ejemplo
"$\\frac{3}{4}$"). Mantén mensajesEjemplo y supabase.
```

**✅ Comprueba:** abre `panel.html` → **Configuración** → **Restablecer datos** → menú **Preguntas**. Deben verse **8 preguntas** y el botón **＋ Nueva pregunta**.

---

## Paso 3 · Textos del sitio
**🛠️ Pega en Copilot:**
```
Con las secciones 1 y 4 de #mi-proyecto.md, actualiza los textos de #index.html: <title>,
meta description, chip y <h1> de la portada (las palabras con * van dentro de
<span class="titulo-dorado">), propuesta de valor, botones de la portada, beneficios, pasos,
testimonio y contacto. La sección del catálogo ahora se llama "Preguntas para practicar"
(chip, h2 y p). Cambia las 2 tarjetas flotantes por "📝 Quiz por curso" y "🤖 Tutor con IA",
y los datos "usuarios" y "equipos" por "alumnos" y "cursos".
Cambia SOLO textos y emojis; no toques clases, ids ni scripts.
```

**✅ Comprueba:** abre `index.html` y pulsa **F5**. Debe verse su eslogan y la sección **"Preguntas para practicar"** con las preguntas publicadas.

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
resultados con las columnas curso (text), aciertos (numeric) y total (numeric), además de id y
created_at como en el modelo; y los grant, enable row level security y políticas del modelo
para las tres tablas. No modifiques ningún otro archivo.
```
**✅ Comprueba:** existe `supabase/tablas.sql` con tres `create table`: `preguntas`, `mensajes` y `resultados`.

**✋ A mano (crear el proyecto):**
1. supabase.com → **Start your project** → **Continue with GitHub**.
2. **New project** → Name `tutor-5b` → **Generate a password** (guárdala) → Region **South America (São Paulo)** → **Create new project**. Espera a que termine de cargar.
3. **SQL Editor** → **New query** → pega **todo** `supabase/tablas.sql` → **Run**.

**✅ Comprueba:** dice **Success**. En **Table Editor** aparecen `preguntas`, `mensajes` y `resultados`.

**✋ A mano (conectar la app):**
1. En Supabase pulsa **Connect** (arriba) o ve a **Project Settings → API**.
2. Copia la **Project URL** y pégala en `js/config.js`, en `supabase` → `url: ""`.
3. Copia la **Publishable key** (`sb_publishable_…`) y pégala en `clave: ""` de `supabase`. Guarda con `Ctrl + S`.
4. Abre `panel.html` → **Configuración** → **Restablecer datos**.

**✅ Comprueba:** arriba en el panel dice **☁️ Supabase**, y en **Table Editor** → `preguntas` aparecen las 8 preguntas.

**✋ A mano (prueba con 2 PC):**
1. Pásale tu `js/config.js` a un compañero. Él lo reemplaza en su proyecto.
2. Compañero (docente): en el panel, **＋ Nueva pregunta** → llénala con estado **Publicada** → **Guardar**.
3. Tú (alumno): abre `index.html` y pulsa **F5**.

**✅ Comprueba:** ves la pregunta de tu compañero en "Preguntas para practicar".

---

## Paso 6 · ➗ Fórmulas matemáticas
**🛠️ Pega en Copilot:**
```
Agrega al sitio el dibujo de fórmulas matemáticas escritas en LaTeX con KaTeX:
- En #index.html agrega en el <head>, antes de css/base.css, el CSS
  https://cdn.jsdelivr.net/npm/katex@0.16.22/dist/katex.min.css, y antes de js/config.js los
  scripts https://cdn.jsdelivr.net/npm/katex@0.16.22/dist/katex.min.js y
  https://cdn.jsdelivr.net/npm/katex@0.16.22/dist/contrib/auto-render.min.js.
- En #cliente.js crea una función dibujarFormulas(elemento) que use renderMathInElement con
  los delimitadores $$...$$ (display: true) y $...$ (display: false) y throwOnError: false; si
  renderMathInElement no existe (sin internet), no hace nada. Llámala al final de
  pintarCatalogo() sobre la lista del catálogo.
Cambia SOLO esos 2 archivos. Al final lista los archivos cambiados y cómo probarlo.
```

**✅ Comprueba:** `index.html` → **F5** → "Preguntas para practicar". Las fracciones y potencias se ven **dibujadas** (por ejemplo ¾ como fracción), no como `$\frac{3}{4}$`.

---

## Paso 7 · 📝 Quiz por curso
**🛠️ Pega en Copilot:**
```
Agrega al sitio la función "Quiz por curso":
- En #config.js agrega CONFIG.quiz = { campoOpciones: "opciones", campoRespuesta: "respuesta" }.
- En #index.html, antes de la sección Contacto, agrega una section id="quiz" con el título
  "Quiz por curso", un <select> de cursos con su label, un botón "Empezar" y un contenedor para
  las preguntas con aria-live="polite". Agrega "Quiz" al nav.
- En #cliente.js: llena el select con las opciones del campo de rol categoria. Al pulsar
  "Empezar", toma con Datos.listar(CONFIG.tabla) las preguntas de ese curso que estén en
  CONFIG.catalogo.soloEstado y muéstralas una por una: el texto de la pregunta y un botón por
  cada opción (separa el campo de opciones por saltos de línea). Al elegir una opción,
  desactiva los botones, marca en verde la correcta y en rojo la elegida si falló, muestra
  "✅ ¡Correcto!" o "❌ Incorrecto" con la explicación (rol descripcion), actualiza el contador
  "Aciertos" y muestra el botón "Siguiente". Al terminar, muestra el puntaje "aciertos / total",
  guárdalo con Datos.crear("resultados", { curso, aciertos, total }) y muestra un botón
  "Practicar otra vez". Usa dibujarFormulas() cada vez que muestres una pregunta o explicación.
  Inserta los textos con Util.seguro(). Si no hay preguntas de ese curso, muestra un mensaje.
- Estilos en #cliente.css con las clases y variables de base.css.
Cambia SOLO esos 4 archivos. Al final lista los archivos cambiados y cómo probarlo.
```

**✅ Comprueba:**
1. `index.html` → **F5** → menú **Quiz** → elige **Matemática** → **Empezar**.
2. Las opciones se ven con fórmulas dibujadas. Elige una: se marca en verde o en rojo y aparece la explicación.
3. Pulsa **Siguiente** hasta el final. Aparece tu puntaje, por ejemplo **2 / 3**.
4. En Supabase → **Table Editor** → `resultados`: aparece tu intento.

---

## Paso 8 · 🤖 Tutor con IA (Gemini)
**🛠️ Pega en Copilot:**
```
Agrega al sitio un "Tutor con IA":
- En #config.js agrega CONFIG.ia con: clave "" (clave de Gemini), modelo
  "gemini-flash-latest", instrucciones (el tutor es profesor de secundaria del colegio Los
  Licenciados de Ayacucho, responde en español, paso a paso y en máximo 8 líneas, solo temas
  escolares, escribe toda fórmula en LaTeX entre $...$ y no pide datos personales), respuestas
  (las 5 de la sección 5 de #mi-proyecto.md como { palabras: [...], texto: "..." }) y
  respuestaPorDefecto.
- Crea el archivo js/ia.js con el mismo patrón que data.js: const IA con una función
  async responder(pregunta, historial) que, si CONFIG.ia.clave tiene valor, llama con fetch a
  https://generativelanguage.googleapis.com/v1beta/models/ + CONFIG.ia.modelo +
  ":generateContent" (POST, cabecera "x-goog-api-key" con la clave, cuerpo con
  systemInstruction = las instrucciones y contents = historial + la pregunta) y devuelve el
  texto de la respuesta. Si no hay clave, o si Gemini falla, usa el modo demo: busca las
  palabras clave en la pregunta (sin importar mayúsculas ni tildes) y devuelve su texto o la
  respuesta por defecto; si Gemini falló, agrega al final "(Modo demo: Gemini no respondió)".
  Exporta también modo(), que devuelve "gemini" o "demo".
- En #index.html carga js/ia.js antes de js/cliente.js. Antes de la sección Contacto agrega
  una section id="tutor" con el título "Pregúntale al tutor", un chip que muestre el modo, una
  zona de mensajes con aria-live="polite" y un formulario con un input (con label) y un botón
  "Enviar". Agrega "Tutor" al nav.
- En #cliente.js: el chip dice "🤖 Tutor con Gemini" o "🤖 Tutor (modo demo)" según IA.modo().
  Muestra un saludo inicial. Al enviar, muestra la pregunta como burbuja del alumno, una burbuja
  "Pensando…", luego la respuesta como burbuja del tutor (texto con Util.seguro() y saltos de
  línea como <br>) y aplica dibujarFormulas() a cada burbuja. Guarda la conversación en un
  historial con el formato de Gemini (role "user" y "model") para enviarla en la siguiente
  pregunta.
- Estilos de las burbujas en #cliente.css con las variables de base.css.
Cambia SOLO esos archivos. Al final lista los archivos cambiados y cómo probarlo.
```

**✅ Comprueba (modo demo):** `index.html` → **F5** → menú **Tutor**. El chip dice **"Tutor (modo demo)"**. Escribe una de sus palabras clave, por ejemplo `fracciones`: responde con la fórmula dibujada.

**✋ A mano (conectar Gemini, con el profesor):**
1. El **profesor** entra a **aistudio.google.com** con su cuenta de Google → **Get API key** → **Create API key** → copia la clave.
2. Pégala en `js/config.js`, en `ia` → `clave: ""`. Guarda con `Ctrl + S`.

**✅ Comprueba (con Gemini):** **F5** → el chip dice **"🤖 Tutor con Gemini"**. Pregunta, por ejemplo: `¿Cómo calculo el área de un círculo de radio 3?`. Responde Gemini, con la fórmula dibujada. Haz otra pregunta que dependa de la anterior (`¿y si el radio es 5?`): recuerda la conversación.

---

## Paso 9 · 📈 Progreso de los alumnos
**🛠️ Pega en Copilot:**
```
En la vista Resumen de #panel.html agrega, debajo de .rejilla-resumen, una tarjeta
"📈 Progreso de los alumnos" con un contenedor id="progreso". En #panel.js crea
pintarProgreso(): lee Datos.listar("resultados") y, por cada curso (opciones del campo de rol
categoria), muestra una fila con el nombre del curso, una barra con el porcentaje de aciertos
(suma de aciertos / suma de total) y el texto "N% · X intentos". Si no hay resultados, usa la
clase .vacio con un mensaje. Llámala dentro de cargar(). Estilos en #panel.css con las
variables de base.css, sin librerías.
Cambia SOLO esos 3 archivos. Al final lista los archivos cambiados y cómo probarlo.
```

**✅ Comprueba:** haz un quiz en el sitio. Luego abre `panel.html` → **Resumen** → **F5**. En **"Progreso de los alumnos"** aparece la barra del curso que practicaste, con su porcentaje y **1 intento**.

---

## Paso 10 · 🚀 Reto libre
Elijan una idea y **escriban su propio prompt** para Copilot. Debe tener: **archivos con `#`**, **"Cambia SOLO esos archivos"**, **todo lo que debe hacer** y **"Al final lista los archivos cambiados y cómo probarlo."**

| Idea | Archivos |
|---|---|
| 🤖 En el quiz, un botón "Pídele al tutor que lo explique" que envíe la pregunta al tutor | `#cliente.js` |
| ⭐ "Pregunta del día" en la portada: una pregunta publicada al azar cada día | `#index.html` `#cliente.js` |
| 🔁 Modo repaso: al terminar el quiz, repetir solo las preguntas que falló | `#cliente.js` |
| 🏆 En el panel, el mejor puntaje de cada curso | `#panel.html` `#panel.js` |

**✅ Comprueba:** funciona y pueden explicar qué archivo cambió y por qué.

---

## 🚑 Si algo sale mal
| Problema | Qué hacer |
|---|---|
| Copilot cambió algo que no pedí | **Undo** y pega otra vez el prompt |
| Página en blanco o un botón no hace nada | **F12** → **Console** → copia el error rojo → pega en Copilot: `Tengo este error en la consola. Diagnostica la causa y aplica la corrección mínima.` y el error debajo |
| Las fórmulas se ven como `$\frac{1}{2}$` | Necesitan internet (KaTeX se descarga). Revisa la conexión y pulsa **F5** |
| El tutor dice "(Modo demo: Gemini no respondió)" | Revisa la clave en `ia.clave`. Si el error dice que el modelo no existe, cambia `modelo` por uno de los que aparecen en aistudio.google.com. Si dice que se agotó el límite, espera un minuto |
| Aviso "⚠️ Supabase · …" | Revisa la URL y la clave de `supabase` en `js/config.js` y que ejecutaste **todo** `tablas.sql` |
| No veo lo que guardó mi compañero | **F5** |
| Siguen los productos de la plantilla | Panel → **Configuración** → **Restablecer datos** |
