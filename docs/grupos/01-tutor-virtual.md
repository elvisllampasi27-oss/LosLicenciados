# 🎓 Grupo 01 · Tutor Virtual con IA
**Un tutor virtual que ayuda a los estudiantes del colegio a reforzar sus cursos y resolver sus dudas.**
I.E. "Los Licenciados" · 5.º B · Servicio Social IS-480 UNSCH

| Partes | Módulo de datos | Funciones propias de su app |
|---|---|---|
| Sitio + panel | ❓ Preguntas de Matemática, Comunicación, Ciencia e Historia | **F1** 📝 Quiz por curso · **F2** 🤖 Asistente tutor (demo) · **F3** 📈 Progreso del alumno |

**Reglas del día:** copia los prompts desde **`docs/grupos/01-tutor-virtual.md`** en VS Code (esta hoja es para leer) · un prompt → probar → recién el siguiente · revisa con `Ctrl + Shift + G` (rojo = antes, verde = después) antes de **Keep** · cero datos personales reales · Copilot gratis = 50 mensajes al mes (hoy usarán 7) · tiempo total: 68 min.

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
Usaremos sitio y panel. El módulo son las Preguntas (tabla "preguntas") con estos 6 campos:
pregunta | Pregunta | text | | sí | titulo
curso | Curso | select | Matemática, Comunicación, Ciencia, Historia | sí | categoria
opciones | Opciones (una por línea) | textarea | | sí | ninguno
respuesta | Respuesta correcta | text | | sí | ninguno
explicacion | Explicación | textarea | | no | descripcion
estado | Estado | select | Publicada, Borrador | sí | estado
Estado que se publica: Publicada. En los ejemplos, 3 opciones por pregunta y la respuesta
igual a una de ellas. La app tendrá además un quiz por curso, un asistente tutor en modo
demo y el progreso del alumno.

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

✅ **Listo cuando:** `mi-proyecto.md` tiene las 4 secciones, los 6 campos de arriba, revisaron los ⚠️ y no hay teléfonos.

## ③ El Ingeniero: la base (Copilot, modo **Agent**, `Ctrl + Alt + I`)
**P1 · Configuración** (10 min)
```
Con las secciones 1, 2 y 3 de #mi-proyecto.md, actualiza SOLO #config.js:
proyecto.nombre, partes, modulo (nombre, singular, nuevo, icono), tabla, campos con sus roles,
catalogo.soloEstado y datosEjemplo (5 registros). Mantén mensajesEjemplo.
```
✅ **Listo cuando:** Panel → **Configuración → Restablecer datos**, y la tabla muestra sus preguntas con Curso y Estado, y el catálogo del sitio solo las Publicadas.

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
**F1 · 📝 Quiz por curso** (10 min)
```
Agrega al sitio la función "Quiz por curso":
- En #config.js agrega CONFIG.quiz = { campoOpciones: "opciones", campoRespuesta: "respuesta" }.
- En #index.html, antes de la sección Contacto, agrega una section id="quiz" con el título
  "Pon a prueba lo que sabes", un select con label para elegir el curso, un contenedor para
  las preguntas, un botón "Corregir" y una zona de resultado. Agrega "Quiz" al nav.
- En #cliente.js llena el select con las opciones del campo con rol "categoria". Al elegir un
  curso, muestra sus preguntas publicadas (estado igual a CONFIG.catalogo.soloEstado); cada
  línea del campo de opciones es un radio con label. Al corregir, compara sin importar
  mayúsculas ni espacios, marca cada pregunta con ✅ o ❌, muestra su explicación (rol
  "descripcion") y el puntaje, por ejemplo "3 de 5". Inserta los textos con Util.seguro().
- Estilos en #cliente.css con las clases y variables de base.css.
Cambia SOLO esos 4 archivos. Al final lista los archivos cambiados y cómo probarlo.
```
✅ **Listo cuando:** eliges un curso, respondes y pulsas Corregir → ves ✅ o ❌, la explicación y el puntaje. Una pregunta en Borrador no aparece.

**F2 · 🤖 Asistente tutor (demo)** (7 min)
```
Agrega al sitio un "Asistente tutor" en modo demo, sin IA real todavía:
- Crea el archivo js/ia.js con el mismo patrón que data.js: const IA con una función async
  responder(texto) que busca palabras clave de CONFIG.ia.respuestas (sin importar mayúsculas
  ni tildes) y devuelve la primera respuesta que coincida. Si ninguna coincide, responde que
  esa duda se la lleve a su profesor. Al inicio, un comentario explica que más adelante SOLO
  este archivo se conectará a Gemini a través de Supabase y que nunca lleva claves de API.
- En #config.js agrega CONFIG.ia.respuestas: 8 objetos, cada uno con una lista de palabras
  clave y su respuesta, sobre fracciones, ecuaciones, tildes, comprensión lectora, célula, fotosíntesis, Batalla de
  Ayacucho e independencia, con explicaciones cortas para 5.º de secundaria.
- En #index.html, antes de Contacto, agrega una section id="tutor" con el chat: lista de
  mensajes, input con label y botón "Enviar". Carga js/ia.js después de data.js y antes de
  cliente.js. Agrega "Tutor" al nav.
- En #cliente.js, al enviar, muestra la pregunta y la respuesta de await IA.responder() con
  textContent. Estilos en #cliente.css con las clases y variables de base.css.
Cambia SOLO esos 4 archivos y el nuevo js/ia.js. Al final lista los archivos cambiados y cómo probarlo.
```
✅ **Listo cuando:** "¿Cómo sumo FRACCIONES?" → responde sobre fracciones; "¿quién ganó el mundial?" → le sugiere preguntar al profesor. `F12` sin errores rojos.

**F3 · 📈 Progreso del alumno** (8 min, si les queda tiempo)
```
Guarda y muestra el progreso del quiz:
- En #cliente.js, al corregir, guarda el intento con Datos.crear("resultados", { curso,
  puntaje, total }).
- En la vista Resumen de #panel.html agrega, debajo de .rejilla-resumen, una tarjeta
  "Progreso por curso" con un contenedor id="progreso". En #panel.js crea pintarProgreso():
  lee Datos.listar("resultados") y, por cada opción del campo con rol "categoria", dibuja
  una barra horizontal con el promedio en % y el número de intentos. Si no hay intentos, usa
  la clase .vacio. Llámala dentro de cargar(). Estilos en #panel.css con variables de
  base.css, sin librerías.
Cambia SOLO esos 4 archivos. Al final lista los archivos cambiados y cómo probarlo.
```
✅ **Listo cuando:** haces 2 quizzes del mismo curso (por ejemplo 1 de 2 y 2 de 2) → el panel muestra 75 % · 2 intentos.

## ⑤ Entender (Copilot, modo **Ask**, 5 min)
```
Explícame como mentor qué pasa cuando escribo una duda en el asistente tutor: desde el botón
Enviar hasta que aparece la respuesta. Menciona qué hacen #config.js, #ia.js y #cliente.js, y
qué archivo cambiaría para usar Gemini de verdad. Termina con 2 preguntas para comprobar que
entendí.
```
✅ **Listo cuando:** el equipo responde las 2 preguntas sin mirar la pantalla.

## 🚑 Si algo sale mal
- **Copilot cambió algo que no pedí:** **Undo** y repite el prompt.
- **Página en blanco o un botón no responde:** `F12` → **Console** → copia el error rojo → en Agent escribe `Tengo este error en la consola. Diagnostica la causa y aplica la corrección mínima.` y pega el error debajo.
- **Siguen los datos de la plantilla:** Panel → **Configuración → Restablecer datos**. · **Sin mensajes de Copilot:** usa la cuenta de otro integrante.
