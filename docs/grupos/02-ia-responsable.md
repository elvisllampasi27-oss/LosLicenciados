# 🧭 Grupo 02 · IA Responsable
**Aprende, crea y piensa: enseña a los estudiantes de secundaria a usar la IA para aprender, no para copiar.**
I.E. "Los Licenciados" · 5.º B · Servicio Social IS-480 UNSCH

| Partes | Módulo de datos | Funciones propias de su app |
|---|---|---|
| Sitio + panel | 💡 Consejos por etapa: Investigar, Crear, Citar y Verificar | **F1** ✅ Test "¿Usas bien la IA?" · **F2** 🤖 Asistente con reglas (demo) · **F3** 📊 Resultados del test en el panel |

**Reglas del día:** copia los prompts desde **`docs/grupos/02-ia-responsable.md`** en VS Code (esta hoja es para leer) · un prompt → probar → recién el siguiente · revisa con `Ctrl + Shift + G` (rojo = antes, verde = después) antes de **Keep** · cero datos personales reales · Copilot gratis = 50 mensajes al mes (hoy usarán 7) · tiempo total: 68 min.

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
Usaremos sitio y panel. El módulo son los Consejos (tabla "consejos") con estos 6 campos:
titulo | Título | text | | sí | titulo
etapa | Etapa | select | Investigar, Crear, Citar, Verificar | sí | categoria
descripcion | Descripción | textarea | | sí | descripcion
ejemplo | Ejemplo | textarea | | no | ninguno
estado | Estado | select | Publicado, Borrador | sí | estado
icono | Ícono (emoji) | text | | no | icono
Estado que se publica: Publicado. La app tendrá además un test "¿Usas bien la IA?", un
asistente con reglas en modo demo y los resultados del test en el panel.

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
✅ **Listo cuando:** Panel → **Configuración → Restablecer datos**, y la tabla muestra sus consejos con Etapa y Estado, y el catálogo del sitio solo los Publicados.

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
**F1 · ✅ Test "¿Usas bien la IA?"** (10 min)
```
Agrega al sitio el test "¿Usas bien la IA?":
- En #config.js agrega CONFIG.test con 5 preguntas fijas sobre: verificar lo que dice la IA,
  citar cuando la usas, no copiar tareas completas, no compartir datos personales y pensar
  antes de preguntar. Cada pregunta tiene 3 opciones que valen 2, 1 y 0 puntos. Agrega
  CONFIG.test.niveles: Responsable (8 a 10 puntos), En camino (5 a 7) y Cuidado (0 a 4),
  cada uno con un emoji y un consejo de una línea.
- En #index.html, antes de Contacto, agrega una section id="test" con un contenedor para las
  preguntas, un botón "Ver mi resultado" y una zona de resultado. Agrega "Test" al nav.
- En #cliente.js arma las preguntas desde CONFIG.test como radios con label. Al ver el
  resultado, avisa si falta responder alguna, suma los puntos y muestra el nivel con su emoji
  y su consejo usando textContent.
- Estilos en #cliente.css con las clases y variables de base.css.
Cambia SOLO esos 4 archivos. Al final lista los archivos cambiados y cómo probarlo.
```
✅ **Listo cuando:** respondes todo con la mejor opción → Responsable (10 puntos). Si dejas una sin responder, te avisa.

**F2 · 🤖 Asistente con reglas (demo)** (7 min)
```
Agrega al sitio un asistente "con reglas" en modo demo, sin IA real todavía:
- Crea el archivo js/ia.js con el mismo patrón que data.js: const IA con una función async
  responder(texto). Si el texto pide que haga la tarea (contiene "resuelve", "hazme" o
  "escribe mi tarea", sin importar mayúsculas ni tildes), responde con 2 pistas y una pregunta
  para que el alumno piense, NUNCA con la respuesta. Si no, responde con una orientación corta
  para usar la IA de forma responsable. Al inicio, un comentario explica que más adelante SOLO
  este archivo se conectará a Gemini a través de Supabase y que nunca lleva claves de API.
- En #config.js agrega CONFIG.ia.reglas con 4 reglas cortas, como "Doy pistas, no respuestas".
- En #index.html, antes de Contacto, agrega una section id="asistente" con una lista para las
  reglas y el chat (mensajes, input con label y botón "Enviar"). Carga js/ia.js después de
  data.js y antes de cliente.js. Agrega "Asistente" al nav.
- En #cliente.js muestra las reglas de CONFIG.ia.reglas y, al enviar, la pregunta y la
  respuesta de await IA.responder() con textContent. Estilos en #cliente.css.
Cambia SOLO esos 4 archivos y el nuevo js/ia.js. Al final lista los archivos cambiados y cómo probarlo.
```
✅ **Listo cuando:** "Resuelve mi tarea de fracciones" → recibe pistas y una pregunta, no la respuesta. Las 4 reglas se ven en pantalla.
💡 `CONFIG.ia.reglas` funciona como `.github/copilot-instructions.md`: son las instrucciones que la IA sigue siempre, antes de cada respuesta.

**F3 · 📊 Resultados del test en el panel** (8 min, si les queda tiempo)
```
Guarda y muestra los resultados del test:
- En #cliente.js, al ver el resultado, guárdalo con Datos.crear("tests", { nivel, puntaje }).
- En la vista Resumen de #panel.html agrega, debajo de .rejilla-resumen, una tarjeta
  "Resultados del test" con un contenedor id="resultados-test". En #panel.js crea
  pintarTests(): lee Datos.listar("tests") y dibuja una barra horizontal por cada nivel de
  CONFIG.test.niveles con su emoji, la cantidad y el %. Si no hay tests, usa la clase .vacio.
  Llámala dentro de cargar(). Estilos en #panel.css con variables de base.css, sin librerías.
Cambia SOLO esos 4 archivos. Al final lista los archivos cambiados y cómo probarlo.
```
✅ **Listo cuando:** haces el test 2 veces con resultados distintos → el panel muestra 1 en cada nivel (50 %).

## ⑤ Entender (Copilot, modo **Ask**, 5 min)
```
Explícame como mentor cómo decide js/ia.js si responde con pistas o con una orientación, y
en qué se parece CONFIG.ia.reglas a .github/copilot-instructions.md. Menciona #config.js,
#ia.js y #cliente.js. Termina con 2 preguntas para comprobar que entendí.
```
✅ **Listo cuando:** el equipo responde las 2 preguntas sin mirar la pantalla.

## 🚑 Si algo sale mal
- **Copilot cambió algo que no pedí:** **Undo** y repite el prompt.
- **Página en blanco o un botón no responde:** `F12` → **Console** → copia el error rojo → en Agent escribe `Tengo este error en la consola. Diagnostica la causa y aplica la corrección mínima.` y pega el error debajo.
- **Siguen los datos de la plantilla:** Panel → **Configuración → Restablecer datos**. · **Sin mensajes de Copilot:** usa la cuenta de otro integrante.
