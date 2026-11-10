# ✅ Grupo 09 · Planly

**Su app:** un **organizador de tareas con inteligencia artificial** para estudiantes. En el **panel**, el alumno **anota sus tareas como habla** ("exposición de biología el jueves, es importante") y la **IA (Gemini)** las ordena con curso, fecha y prioridad. Luego las **arrastra** en un tablero **Pendiente → En curso → Hecha**. En el **sitio** se ven las **próximas entregas** con un **semáforo** 🔴🟠🟢 y un **modo enfoque** (Pomodoro) de 25 minutos. Todo se guarda **en la nube** (Supabase).

| Cara | Archivo | Quién la usa |
|---|---|---|
| 🌐 Sitio | `index.html` | Estudiantes: próximas entregas y modo enfoque |
| 🛠️ Panel | `panel.html` | El estudiante organizado: anotar, tablero y tiempo enfocado |

**Cómo usar esta guía:**
- **🧠 Pega en el Analista** → en claude.ai o gemini.google.com.
- **🛠️ Pega en Copilot** → en VS Code: `Ctrl + Alt + I` → modo **Agent** → pega → **Enter** → al terminar, **Keep**.
- **✋ A mano** → lo haces tú.
- **✅ Comprueba** → hazlo antes de pasar al siguiente paso.
- **F5** = recargar la página.

---

## Paso 1 · El Analista
**✋ A mano:** abre claude.ai o gemini.google.com y adjunta su ficha **`9.docx`** con 📎.

**🧠 Pega en el Analista:**
```
Actúa como analista de producto digital. Te adjunto la ficha del Lean Canvas de nuestro
emprendimiento: Planly, un organizador digital de tareas con IA para estudiantes de
secundaria de Ayacucho, para no olvidar tareas, priorizarlas y administrar mejor el tiempo.
Vamos a adaptar una plantilla web que ya funciona y tiene dos caras: un SITIO (portada,
beneficios, cómo funciona, próximas entregas, modo enfoque, testimonio y contacto) y un PANEL
para el estudiante (resumen, tareas, tablero y tiempo enfocado).

Tu tarea: decide los textos, el color, las tareas de ejemplo y las palabras clave de cada
curso. El módulo de datos ya está definido y NO lo cambies: se llama "Tareas" (singular
"tarea", botón "Nueva tarea", ícono ✅, tabla "tareas") con estos 6 campos:
tarea | Tarea | text | | sí | titulo
curso | Curso | select | Matemática, Comunicación, Ciencias, Historia, Inglés, Arte | sí | categoria
fecha | Fecha de entrega | date | | no | ninguno
prioridad | Prioridad | select | Alta, Media, Baja | sí | ninguno
estado | Estado | select | Pendiente, En curso, Hecha | sí | estado
detalle | Detalle | textarea | | no | descripcion

Responde SOLO con el formato siguiente, en Markdown, sin frases antes ni después.
Si falta información, propón algo coherente y márcalo con ⚠️.
Por privacidad, NUNCA incluyas nombres reales, teléfonos ni DNI.

# Mi proyecto

## 1. Identidad
- Nombre: Planly
- Eslogan (máx. 8 palabras; marca con *asteriscos* las 2 palabras a resaltar):
- Propuesta de valor (máx. 30 palabras):
- Color de acento (hex, que transmita orden y energía):

## 2. Partes que usaremos
- Sitio del cliente: sí (estudiantes)
- Panel de control: sí (el estudiante organiza sus tareas)

## 3. Módulo de datos
- Campos: los 6 de arriba, tal cual.
- 6 tareas de ejemplo de 5.º de secundaria, una por línea:
  tarea | curso | días desde hoy | prioridad | estado | detalle (1 frase)
  "Días desde hoy" es un número: -1 = ayer (vencida), 0 = hoy, 3 = dentro de 3 días.
  Usa al menos 5 cursos, una vencida (-1), una que vence pronto (1 o 2) y otras con tiempo
  (3 a 7). 4 en "Pendiente", 1 en "En curso" y 1 en "Hecha".

## 4. Textos del sitio
- Beneficio 1, 2 y 3: emoji | título corto | 1 frase
- Paso 1, 2 y 3: título | 1 frase
- Testimonio: frase | nombre ficticio | grado
- Datos de contacto: zona y horario (sin dirección exacta)

## 5. Anota como hablas
- Para cada curso, de 4 a 6 palabras clave en minúsculas y sin tildes (ej.: Ciencias:
  biologia, quimica, fisica, cta, celula).
- Palabras que significan prioridad Alta (ej.: urgente, importante, examen):
- Palabras que significan prioridad Baja (ej.: sin apuro, cuando pueda):
```

**✋ A mano:** copia toda la respuesta. En VS Code abre **`mi-proyecto.md`** (junto a `index.html`) → `Ctrl + A` → `Ctrl + V` → `Ctrl + S`.
⛔ No la pegues en otro archivo. Si te equivocaste: `Ctrl + Shift + G` → clic derecho en ese archivo → **Discard Changes**.

**✅ Comprueba:** `mi-proyecto.md` tiene las 5 secciones, 6 tareas con "días desde hoy" y palabras clave para los 6 cursos.

---

## Paso 2 · Configuración
**🛠️ Pega en Copilot:**
```
Con las secciones 1, 2 y 3 de #mi-proyecto.md, actualiza SOLO #config.js: proyecto.nombre,
partes, modulo (nombre "Tareas", singular "tarea", nuevo "Nueva tarea", icono "✅"), tabla
"tareas", los 6 campos con sus roles (fecha con tipo "date" y sin rol; prioridad sin rol),
catalogo.soloEstado "Pendiente" y datosEjemplo con las 6 tareas. Para que las fechas de
ejemplo siempre estén cerca de hoy, antes de const CONFIG crea la función
enDias(n) que devuelve la fecha de hoy + n días como "AAAA-MM-DD" (con
toLocaleDateString("en-CA")) y úsala en cada tarea: fecha: enDias(-1), enDias(3), etc.
Cambia los nombres de mensajesEjemplo por nombres genéricos (por ejemplo "Estudiante de
4.º"). Mantén supabase.
```

**✅ Comprueba:** abre `panel.html` → **Configuración** → **Restablecer datos** → menú **Tareas**. Deben verse **6 tareas** con fechas de esta semana y las columnas Curso, Fecha de entrega, Prioridad y Estado.

---

## Paso 3 · Textos del sitio
**🛠️ Pega en Copilot:**
```
Con las secciones 1 y 4 de #mi-proyecto.md, actualiza los textos de #index.html: <title>,
meta description, chip y <h1> de la portada (las palabras con * van dentro de
<span class="titulo-dorado">), propuesta de valor, botones de la portada, beneficios, pasos,
testimonio y contacto. La sección del catálogo ahora se llama "Próximas entregas" (chip, h2
y p). Cambia las 2 tarjetas flotantes por "🚦 Semáforo de entregas" y "⏱️ Modo enfoque", y
los datos "usuarios" y "equipos" por "estudiantes" y "cursos".
Cambia SOLO textos y emojis; no toques clases, ids ni scripts.
```

**✅ Comprueba:** abre `index.html` y pulsa **F5**. Debe verse su eslogan y la sección **"Próximas entregas"**.

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
sesiones con las columnas tarea_id (text), curso (text) y minutos (numeric), además de id y
created_at como en el modelo; y los grant, enable row level security y políticas del modelo
para las tres tablas. No modifiques ningún otro archivo.
```
**✅ Comprueba:** existe `supabase/tablas.sql` con tres `create table`: `tareas`, `mensajes` y `sesiones`.

**✋ A mano (crear el proyecto):**
1. supabase.com → **Start your project** → **Continue with GitHub** → **Authorize supabase**.
2. Solo la primera vez: **New organization** → deja el nombre, Type **Personal**, Plan **Free - $0/month** → **Create organization**.
3. **New project** → Name `planly-5b` → **Generate a password** (guárdala) → Region: deja **Americas** → en *Security* deja marcado **Enable Data API** → **Create new project**. Espera a que diga **Healthy**.
4. Menú de la izquierda → **SQL Editor** (ícono `>_`) → pega **todo** `supabase/tablas.sql` → **Run** (o `Ctrl + Enter`). Si sale un aviso de *destructive operation*, pulsa **Run this query**: es por los `drop policy if exists`, no borra datos.

**✅ Comprueba:** dice **Success**. En **Table Editor** aparecen `tareas`, `mensajes` y `sesiones`.

**✋ A mano (conectar la app):**
1. En **Project Overview** (🏠) está la URL `https://….supabase.co`: pulsa **Copy** y pégala en `js/config.js`, en `supabase` → `url: ""`.
2. Pulsa el botón verde **Connect** (arriba) o ve a **Project Settings → API Keys** y copia la **Publishable key** (`sb_publishable_…`). Pégala en `clave: ""` de `supabase`. Guarda con `Ctrl + S`.
3. Abre `panel.html` → **Configuración** → **Restablecer datos**.

**✅ Comprueba:** arriba en el panel dice **☁️ Supabase**, y en **Table Editor** → `tareas` aparecen las 6 tareas.

**✋ A mano (prueba con 2 PC):**
1. Pásale tu `js/config.js` a un compañero. Él lo reemplaza en su proyecto.
2. Compañero: en el panel, **＋ Nueva tarea** → llénala con fecha de mañana y estado **Pendiente** → **Guardar**.
3. Tú: abre `index.html` y pulsa **F5**.

**✅ Comprueba:** ves la tarea de tu compañero en "Próximas entregas".

---

## Paso 6 · 🚦 Próximas entregas con semáforo
**🛠️ Pega en Copilot:**
```
Convierte el catálogo del sitio en "Próximas entregas" con semáforo:
- En #config.js agrega CONFIG.semaforo = { porVencer: 2 }.
- En #cliente.js:
  · Crea semaforo(fecha) que calcule los días que faltan desde hoy (fechas "AAAA-MM-DD" en
    hora local) y devuelva { clase, texto }: sin fecha → "sin-fecha", "⚪ Sin fecha";
    vencida → "vencida", "🔴 Venció hace N días"; hoy o hasta porVencer días →
    "por-vencer", "🟠 Vence hoy" o "🟠 Vence en N días"; si no → "a-tiempo",
    "🟢 Faltan N días" (con singular y plural correctos).
  · En cargarCatalogo(), en vez de usar soloEstado, muestra todas las tareas que NO estén en
    "Hecha", ordenadas por fecha (la más cercana primero, sin fecha al final).
  · En tarjeta(): quita la imagen y el precio; muestra los chips de curso y "Prioridad X", el
    nombre, el detalle, el semáforo con la fecha (Util.fecha) y en el pie el estado y un botón
    "⏱️ Enfocarme" con data-enfocar = id (por ahora no hace nada). Agrega a la tarjeta la
    clase tarea--[clase del semáforo]. Quita "Me interesa" y su código.
  Inserta los textos con Util.seguro().
- En #cliente.css: las tarjetas .tarea tienen un borde izquierdo de 6 px: rojo (--alerta)
  si vencida, ámbar (#D97706) si por vencer, verde (--exito) si a tiempo.
Cambia SOLO esos 3 archivos. Al final lista los archivos cambiados y cómo probarlo.
```

**✅ Comprueba:** `index.html` → **F5**. En **"Próximas entregas"** está primero la **🔴 vencida**, luego las **🟠 por vencer** y al final las **🟢**. La tarea **Hecha** no aparece.

---

## Paso 7 · 🗂️ Tablero para arrastrar y soltar
**🛠️ Pega en Copilot:**
```
Agrega al panel un tablero para arrastrar y soltar tareas:
- En #panel.html agrega al menú lateral el enlace "🗂️ Tablero" (data-vista="tablero") y una
  section class="vista" data-vista="tablero" hidden con el título "Tablero", el texto "Anota
  como hablas y mueve tus tareas de columna." y un div class="kanban" id="kanban".
- En #panel.js:
  · Copia la función semaforo(fecha) de cliente.js.
  · pintarKanban(): una columna (data-columna = estado) por cada opción del campo estado, con
    su título y cantidad. Cada tarea, ordenada por fecha, es una tarjeta draggable="true" con
    data-id, su nombre, "curso · Prioridad X", el texto del semáforo (o "✔ Terminada" si está
    Hecha) y botones ← y → (con aria-label "Mover a [estado]") para moverla a la columna
    anterior o siguiente, así también funciona en celular y con teclado. Columna vacía:
    "Suelta aquí una tarea".
  · Arrastrar y soltar con los eventos dragstart (dataTransfer con el id), dragover
    (preventDefault y resaltar la columna) y drop: llama a moverTarea(id, estado), que hace
    Datos.actualizar con el nuevo estado, muestra "¡Tarea terminada! 🎉" si es Hecha (o
    "Movida a …") y vuelve a cargar. Los botones ← → también usan moverTarea.
  · Llama a pintarKanban() dentro de cargar(). Inserta los textos con Util.seguro().
- Estilos en #panel.css con las variables de base.css: 3 columnas en pantallas grandes y 1
  en celular; borde izquierdo de color según el semáforo (verde si está Hecha).
Cambia SOLO esos 3 archivos. Al final lista los archivos cambiados y cómo probarlo.
```

**✅ Comprueba:**
1. `panel.html` → **F5** → menú **🗂️ Tablero**. Hay 3 columnas con sus tareas y su semáforo.
2. **Arrastra** una tarea de **Pendiente** a **En curso** con el mouse: se queda ahí y aparece **"Movida a En curso"**.
3. Pulsa **→** en esa tarea: pasa a **Hecha** y dice **"¡Tarea terminada! 🎉"**.
4. `index.html` → **F5**: esa tarea ya no está en "Próximas entregas".

---

## Paso 8 · 🤖 Anota como hablas (Gemini)
**🛠️ Pega en Copilot:**
```
Agrega al tablero "Anota como hablas" con IA:
- En #config.js agrega CONFIG.ia con: clave "" (clave de Gemini), modelo
  "gemini-flash-latest", instrucciones (es el asistente de Planly; convierte lo que escribe
  el estudiante en UNA tarea; responde SOLO con un objeto JSON con las claves tarea (texto
  corto, sin la fecha ni la prioridad, con mayúscula inicial), curso (exactamente uno de los
  6 cursos), fecha (AAAA-MM-DD calculada desde la fecha de hoy que le dan, o "" si no dice) y
  prioridad (Alta si dice urgente o importante, Baja si dice sin apuro, si no Media)),
  cursos (un objeto con cada curso y sus palabras clave de la sección 5 de
  #mi-proyecto.md), alta y baja (las palabras de prioridad de la sección 5).
- Crea el archivo js/ia.js con el mismo patrón que data.js: const IA con
  async anotar(frase) que, si CONFIG.ia.clave tiene valor, llama con fetch a
  https://generativelanguage.googleapis.com/v1beta/models/ + CONFIG.ia.modelo +
  ":generateContent" (POST, cabecera "x-goog-api-key", systemInstruction = las
  instrucciones, contents = "Hoy es [día de la semana] [AAAA-MM-DD]. Frase: ..." y
  generationConfig.responseMimeType "application/json") y valida todo lo que llega: curso que
  no exista → el primero; fecha que no sea AAAA-MM-DD → ""; prioridad que no sea Alta, Media
  o Baja → Media. Si no hay clave o si Gemini falla, usa el modo demo (sin mayúsculas ni
  tildes): fecha con "hoy", "mañana", "pasado mañana" o un día de la semana (el próximo, con
  Util.hoy(n)); curso por palabras clave; prioridad por las listas alta y baja; y la tarea
  es el texto antes de la primera coma sin la fecha ni las palabras de prioridad. Devuelve
  { tarea, curso, fecha, prioridad, modo }. Exporta también modo().
- En #panel.html carga js/ia.js antes de js/animaciones.js. En la vista Tablero, antes del
  kanban, agrega una tarjeta con un formulario: el label "🤖 Anota como hablas" con un chip
  del modo, un input (placeholder "Ej.: exposición de biología el jueves, es muy
  importante") y un botón "Anotar"; y un div id="anotar-vista" con aria-live="polite".
- En #panel.js: el chip dice "Con Gemini" o "Modo demo". Al anotar, muestra "Entendiendo…" y
  luego una propuesta con la tarea, "📚 curso · 📅 fecha · ⚡ prioridad · semáforo" (si había
  clave pero respondió el demo, "(Modo demo: Gemini no respondió)") y los botones "Guardar
  tarea" (Datos.crear con estado "Pendiente", limpia el input y vuelve a cargar) y
  "Descartar". Usa Util.seguro().
- Estilos en #panel.css con las variables de base.css.
Cambia SOLO esos archivos. Al final lista los archivos cambiados y cómo probarlo.
```

**✅ Comprueba (modo demo):** **Tablero** → **F5**. El chip dice **"Modo demo"**. Escribe `exposición de biología el jueves, es muy importante` → **Anotar**. La propuesta dice **Exposición de biología · Ciencias · (fecha del jueves) · Alta**. **Guardar tarea**: aparece en **Pendiente**. Prueba también `leer el cuento para mañana sin apuro` (Comunicación, mañana, **Baja**).

**✋ A mano (conectar Gemini, con el profesor):**
1. El **profesor** crea **una sola clave para todo el salón** (es solo para el taller; al final la borra): **aistudio.google.com** → menú **Claves de API** → **Crear clave de API** → nombre `taller-5b` → en *Elige un proyecto importado* deja **Proyecto de Gemini** (si no hay ninguno, **Crear proyecto**) → crear → **Copiar clave**. La clave empieza con `AQ.`: es el formato nuevo, es normal. No pulses **Configurar la facturación**: el nivel gratuito alcanza.
2. El profesor la prueba una vez en `herramientas/probar-gemini.html` y se la pasa a cada grupo.
3. Pégala en `js/config.js`, en `ia` → `clave: ""`. Guarda con `Ctrl + S`. No hay que instalar ni ejecutar nada.

**✅ Comprueba (con Gemini):** **F5** → el chip dice **"Con Gemini"**. Escribe algo más libre, por ejemplo `el profe de química dejó un informe de laboratorio para el próximo viernes y vale nota`. Gemini entiende el curso (**Ciencias**), la fecha del viernes y la prioridad.

---

## Paso 9 · ⏱️ Modo enfoque y tiempo enfocado
**🛠️ Pega en Copilot:**
```
Agrega el modo enfoque (Pomodoro):
- En #config.js agrega CONFIG.pomodoro = { enfoque: 25, descanso: 5 } (minutos).
- En #index.html, antes del testimonio, agrega una section id="enfoque" con el título "Modo
  enfoque", un select "¿En qué vas a trabajar?" (con label), un texto de la fase, un reloj
  grande mm:ss (role="timer"), los botones "▶ Empezar" y "↺ Reiniciar", y un texto
  id="enfoque-hoy" con aria-live="polite". Agrega "Modo enfoque" al nav.
- En #cliente.js:
  · Llena el select con las tareas de "Próximas entregas" (nombre · curso) cada vez que se
    cargan. "⏱️ Enfocarme" de una tarjeta elige esa tarea en el select y baja al reloj.
  · "▶ Empezar" corre el reloj cada segundo (el botón pasa a "⏸ Pausar"; al pausar dice
    "▶ Seguir") y muestra el tiempo también en el título de la pestaña. "↺ Reiniciar" vuelve
    a 25:00.
  · Al llegar a 0 en enfoque: suena un pitido corto 3 veces (AudioContext, sin archivos),
    guarda Datos.crear("sesiones", { tarea_id, curso, minutos }), muestra el aviso "¡Sesión
    terminada! Toma un descanso" y pasa a "☕ Descanso" de 5 minutos. Al terminar el descanso
    vuelve a "🎯 Enfoque".
  · enfoque-hoy muestra "Hoy: N sesiones · X minutos enfocado 💪" con las sesiones de hoy.
- En #panel.html, en la vista Resumen debajo de .rejilla-resumen, agrega una tarjeta "⏱️
  Tiempo enfocado esta semana" con un chip id="racha" y un div id="enfoque-semana". En
  #panel.js, con Datos.listar("sesiones"): una barra por curso con los minutos de los últimos
  7 días, el total "X minutos en N sesiones", y la racha "🔥 N días" (días seguidos con al
  menos una sesión, contando hasta hoy o ayer). Llámala dentro de cargar().
- Usa Util.seguro(). Estilos en #cliente.css y #panel.css con las variables de base.css.
Cambia SOLO esos archivos. Al final lista los archivos cambiados y cómo probarlo.
```

**✅ Comprueba:**
1. `index.html` → **F5**. En una tarea pulsa **⏱️ Enfocarme**: baja al reloj con esa tarea elegida.
2. Para no esperar 25 minutos, cambia en `js/config.js` → `pomodoro` → `enfoque: 0.5` (30 segundos) y pulsa **F5**.
3. **▶ Empezar**: el reloj baja, también en la pestaña. Al llegar a 0 suena el pitido, aparece **"¡Sesión terminada!"** y pasa a **☕ Descanso**.
4. `panel.html` → **Resumen** → **F5**: en **"Tiempo enfocado esta semana"** aparece el curso de esa tarea y la racha **🔥 1 día**.
5. Vuelve a poner `enfoque: 25`.

---

## Paso 10 · 🚀 Reto libre
Elijan una idea y **escriban su propio prompt** para Copilot. Debe tener: **archivos con `#`**, **"Cambia SOLO esos archivos"**, **todo lo que debe hacer** y **"Al final lista los archivos cambiados y cómo probarlo."**

| Idea | Archivos |
|---|---|
| 🤖 "Divide tu tarea": Gemini parte una tarea grande en 3 a 5 pasos con fechas | `#ia.js` `#panel.js` |
| 🔔 Al abrir el panel, un aviso con las tareas que vencen hoy y mañana | `#panel.js` |
| 📅 Vista "Mi semana": las tareas agrupadas de lunes a domingo | `#panel.html` `#panel.js` |
| 🎵 Elegir el sonido del final del Pomodoro y la duración del enfoque | `#index.html` `#cliente.js` |

**✅ Comprueba:** funciona y pueden explicar qué archivo cambió y por qué.

---

## 🚑 Si algo sale mal
| Problema | Qué hacer |
|---|---|
| Copilot cambió algo que no pedí | **Undo** y pega otra vez el prompt |
| Página en blanco o un botón no hace nada | **F12** → **Console** → copia el error rojo → pega en Copilot: `Tengo este error en la consola. Diagnostica la causa y aplica la corrección mínima.` y el error debajo |
| Arrastrar no funciona | En celular no se puede arrastrar: usa los botones **←** y **→** |
| El semáforo marca mal los días | Revisa que la fecha se guarde como `AAAA-MM-DD` y que `semaforo()` use la fecha local (no `new Date("AAAA-MM-DD")` directo, que la toma en otra zona horaria) |
| No suena el pitido | Sube el volumen. El navegador solo deja sonar después de que tocaste un botón de la página |
| "Anota como hablas" dice "(Modo demo: Gemini no respondió)" | Revisa la clave en `ia.clave`. Si el error dice que el modelo no existe, cambia `modelo` por uno de aistudio.google.com. Si se agotó el límite, espera un minuto |
| La consola dice `401` o `ACCESS_TOKEN_TYPE_UNSUPPORTED` | La clave falló. El profesor la prueba en `herramientas/probar-gemini.html`; si falla, la borra en aistudio.google.com, crea otra y la vuelve a pasar. Mientras tanto la app sigue en modo demo |
| Aviso "⚠️ Supabase · …" | Revisa la URL y la clave de `supabase` en `js/config.js` y que ejecutaste **todo** `tablas.sql` |
| Siguen los productos de la plantilla | Panel → **Configuración** → **Restablecer datos** |
