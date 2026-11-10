# 🌻 Grupo 07 · Ayllu Cuida

**Su app:** acompaña a **adultos mayores que pasan mucho tiempo solos**. El **sitio** está hecho para ellos: **letra grande, alto contraste y lectura en voz alta**. Pueden ver las **actividades de la semana**, contar **cómo se sienten hoy** con una carita, **pedir que un voluntario los acompañe** y **conversar con Ayllu**, un compañero con **inteligencia artificial (Gemini)**. En el **panel**, los voluntarios publican actividades, atienden las **solicitudes de compañía** y ven el **ánimo de la semana**. Todo se guarda **en la nube** (Supabase), **sin nombres ni teléfonos**.

| Cara | Archivo | Quién la usa |
|---|---|---|
| 🌐 Sitio | `index.html` | Adultos mayores: actividades, ánimo, compañía y conversación |
| 🛠️ Panel | `panel.html` | Voluntarios: actividades, solicitudes y ánimo de la semana |

**Cómo usar esta guía:**
- **🧠 Pega en el Analista** → en claude.ai o gemini.google.com.
- **🛠️ Pega en Copilot** → en VS Code: `Ctrl + Alt + I` → modo **Agent** → pega → **Enter** → al terminar, **Keep**.
- **✋ A mano** → lo haces tú.
- **✅ Comprueba** → hazlo antes de pasar al siguiente paso.
- **F5** = recargar la página.

---

## Paso 1 · El Analista
**✋ A mano:** abre claude.ai o gemini.google.com y adjunta su ficha **`7.docx`** con 📎.

**🧠 Pega en el Analista:**
```
Actúa como analista de producto digital. Te adjunto la ficha del Lean Canvas de nuestro
emprendimiento: Ayllu Cuida, un acompañante virtual para adultos mayores de Ayacucho que pasan
mucho tiempo solos. Vamos a adaptar una plantilla web que ya funciona y tiene dos caras: un
SITIO para adultos mayores (portada, beneficios, cómo funciona, actividades de la semana,
"¿Cómo se siente hoy?", conversación con Ayllu, testimonio y contacto) y un PANEL para los
voluntarios (resumen, actividades, solicitudes de compañía y ánimo de la semana).
Los textos del sitio van dirigidos a adultos mayores: trátalos de "usted", con frases cortas
y palabras sencillas.

Tu tarea: decide los textos, el color, las actividades de ejemplo y las respuestas de Ayllu.
El módulo de datos ya está definido y NO lo cambies: se llama "Actividades" (singular
"actividad", botón "Nueva actividad", ícono 🌻, tabla "actividades") con estos 6 campos:
titulo | Actividad | text | | sí | titulo
tipo | Tipo | select | Juego, Lectura, Música, Ejercicio, Consejo | sí | categoria
cuando | Día y hora | text | | sí | ninguno
estado | Estado | select | Publicada, Borrador | sí | estado
icono | Ícono (emoji) | text | | no | icono
descripcion | Descripción | textarea | | no | descripcion
Estado que se publica en el sitio: Publicada.

Responde SOLO con el formato siguiente, en Markdown, sin frases antes ni después.
Si falta información, propón algo coherente y márcalo con ⚠️.
Por privacidad, NUNCA incluyas nombres reales, teléfonos ni DNI.

# Mi proyecto

## 1. Identidad
- Nombre: Ayllu Cuida
- Eslogan (máx. 8 palabras; marca con *asteriscos* las 2 palabras a resaltar):
- Propuesta de valor (máx. 30 palabras):
- Color de acento (hex, cálido y que se lea bien con letra oscura encima):

## 2. Partes que usaremos
- Sitio del cliente: sí (adultos mayores)
- Panel de control: sí (voluntarios)

## 3. Módulo de datos
- Campos: los 6 de arriba, tal cual.
- 6 actividades de ejemplo, una por línea:
  título | tipo | día y hora (ej.: "Lunes 4:00 p. m.") | estado | ícono | descripción (1 frase)
  Usa los 5 tipos. 5 en "Publicada" y 1 en "Borrador". Que sean tranquilas y se puedan
  hacer desde casa o por videollamada (música andina, ejercicios sentados, leyendas, etc.).

## 4. Textos del sitio
- Beneficio 1, 2 y 3: emoji | título corto | 1 frase
- Paso 1, 2 y 3: título | 1 frase
- Testimonio: frase | nombre ficticio | "Abuelita de [distrito]" o "Familiar desde [ciudad]"
- Datos de contacto: zona y horario (sin dirección exacta)

## 5. Ayllu
- Saludo de Ayllu (1 o 2 frases, de "usted"):
- 4 respuestas del modo demo, una por línea: palabras clave separadas por coma (sin tildes) |
  respuesta corta y cálida de "usted". Temas: soledad, música, familia y salud (en la de salud,
  sugiere hablar con su médico o su familia, sin dar consejos médicos).
- Respuesta cuando no entiende (1 frase):
```

**✋ A mano:** copia toda la respuesta. En VS Code abre **`mi-proyecto.md`** (junto a `index.html`) → `Ctrl + A` → `Ctrl + V` → `Ctrl + S`.
⛔ No la pegues en otro archivo. Si te equivocaste: `Ctrl + Shift + G` → clic derecho en ese archivo → **Discard Changes**.

**✅ Comprueba:** `mi-proyecto.md` tiene las 5 secciones, 6 actividades con día y hora, y las respuestas de Ayllu tratan de "usted".

---

## Paso 2 · Configuración
**🛠️ Pega en Copilot:**
```
Con las secciones 1, 2 y 3 de #mi-proyecto.md, actualiza SOLO #config.js: proyecto.nombre,
partes, modulo (nombre "Actividades", singular "actividad", nuevo "Nueva actividad", icono
"🌻"), tabla "actividades", los 6 campos con sus roles (cuando sin rol),
catalogo.soloEstado "Publicada" y datosEjemplo con las 6 actividades. Cambia los nombres de
mensajesEjemplo por nombres genéricos (por ejemplo "Familiar desde Lima"). Mantén supabase.
```

**✅ Comprueba:** abre `panel.html` → **Configuración** → **Restablecer datos** → menú **Actividades**. Deben verse **6 actividades** con la columna **Día y hora**.

---

## Paso 3 · Textos del sitio
**🛠️ Pega en Copilot:**
```
Con las secciones 1 y 4 de #mi-proyecto.md, actualiza los textos de #index.html: <title>,
meta description, chip y <h1> de la portada (las palabras con * van dentro de
<span class="titulo-dorado">), propuesta de valor, botones de la portada, beneficios, pasos,
testimonio y contacto. La sección del catálogo ahora se llama "Actividades de la semana"
(chip, h2 y p). Cambia las 2 tarjetas flotantes por "💛 Siempre acompañado" y
"🔊 Le leemos en voz alta", y los datos "usuarios" y "equipos" por "abuelitos" y
"voluntarios". Escribe de "usted". Cambia SOLO textos y emojis; no toques clases, ids ni
scripts.
```

**✅ Comprueba:** abre `index.html` y pulsa **F5**. Debe verse su eslogan y la sección **"Actividades de la semana"** con las **5 actividades publicadas**.

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
animos con las columnas nivel (numeric) y carita (text); una tabla solicitudes con las
columnas franja (text), motivo (text) y estado (text); las dos con id y created_at como en el
modelo; y los grant, enable row level security y políticas del modelo para las cuatro
tablas. No modifiques ningún otro archivo.
```
**✅ Comprueba:** existe `supabase/tablas.sql` con cuatro `create table`: `actividades`, `mensajes`, `animos` y `solicitudes`.

**✋ A mano (crear el proyecto):**
1. supabase.com → **Start your project** → **Continue with GitHub** → **Authorize supabase**.
2. Solo la primera vez: **New organization** → deja el nombre, Type **Personal**, Plan **Free - $0/month** → **Create organization**.
3. **New project** → Name `ayllu-5b` → **Generate a password** (guárdala) → Region: deja **Americas** → en *Security* deja marcado **Enable Data API** → **Create new project**. Espera a que diga **Healthy**.
4. Menú de la izquierda → **SQL Editor** (ícono `>_`) → pega **todo** `supabase/tablas.sql` → **Run** (o `Ctrl + Enter`). Si sale un aviso de *destructive operation*, pulsa **Run this query**: es por los `drop policy if exists`, no borra datos.

**✅ Comprueba:** dice **Success**. En **Table Editor** aparecen las 4 tablas.

**✋ A mano (conectar la app):**
1. En **Project Overview** (🏠) está la URL `https://….supabase.co`: pulsa **Copy** y pégala en `js/config.js`, en `supabase` → `url: ""`.
2. Pulsa el botón verde **Connect** (arriba) o ve a **Project Settings → API Keys** y copia la **Publishable key** (`sb_publishable_…`). Pégala en `clave: ""` de `supabase`. Guarda con `Ctrl + S`.
3. Abre `panel.html` → **Configuración** → **Restablecer datos**.

**✅ Comprueba:** arriba en el panel dice **☁️ Supabase**, y en **Table Editor** → `actividades` aparecen las 6 actividades.

**✋ A mano (prueba con 2 PC):**
1. Pásale tu `js/config.js` a un compañero. Él lo reemplaza en su proyecto.
2. Compañero (voluntario): en el panel, **＋ Nueva actividad** → llénala con estado **Publicada** → **Guardar**.
3. Tú (abuelito): abre `index.html` y pulsa **F5**.

**✅ Comprueba:** ves la actividad de tu compañero en "Actividades de la semana".

---

## Paso 6 · ♿ Modo fácil y lectura en voz alta
**🛠️ Pega en Copilot:**
```
Haz el sitio fácil de usar para adultos mayores:
- En #config.js agrega CONFIG.accesible = { tamanos: [100, 115, 130, 150] } (% de letra).
- En #index.html, justo antes de <main>, agrega un <aside class="modo-facil"
  aria-label="Modo fácil"> fijo a la derecha, a media altura, con 3 botones grandes (mínimo
  48 px): "A−" (aria-label "A− letra más pequeña"), "A+" (aria-label "A+ letra más grande") y
  "🌗 Contraste" con id="boton-contraste" y aria-pressed.
- En #cliente.js:
  · A− y A+ cambian el tamaño de letra de toda la página (font-size de <html> con los
    porcentajes de CONFIG.accesible.tamanos, sin pasar del primero ni del último).
  · "Contraste" activa o desactiva data-contraste="alto" en <html> y actualiza aria-pressed.
  · Las dos preferencias se guardan en localStorage (claves que empiecen con
    "loslicenciados_") y se aplican al abrir la página.
  · Crea leer(texto) con speechSynthesis (lang "es-PE", rate 0.9, cancela lo anterior); si el
    navegador no puede, muestra un aviso. Cualquier botón con data-escuchar lee su texto.
  · En tarjeta(): en lugar del precio muestra "🗓️ " + el campo cuando, y cambia el botón
    "Me interesa" por "🔊 Escuchar" con data-escuchar = título, día y hora y descripción.
    Quita el código de "Me interesa".
- En #cliente.css: el modo de alto contraste cambia --fondo, --superficie y --superficie-2 a
  #FFFFFF, --texto, --texto-suave y los bordes a #000000, pone borde negro de 2 px a las
  tarjetas y subraya los enlaces.
Cambia SOLO esos 4 archivos. Al final lista los archivos cambiados y cómo probarlo.
```

**✅ Comprueba:**
1. `index.html` → **F5**. A la derecha están **A−**, **A+** y **🌗 Contraste**.
2. Pulsa **A+** varias veces: toda la página crece hasta un tope. Pulsa **🌗 Contraste**: fondo blanco, letras negras y bordes marcados.
3. **F5**: se mantienen la letra grande y el contraste.
4. En una actividad pulsa **🔊 Escuchar**: la computadora la lee en voz alta (sube el volumen).

---

## Paso 7 · 💛 ¿Cómo se siente hoy? y pedir compañía
**🛠️ Pega en Copilot:**
```
Agrega al sitio "¿Cómo se siente hoy?":
- En #config.js agrega CONFIG.animo = { caritas: [{ emoji: "😄", texto: "Muy bien" },
  { emoji: "🙂", texto: "Bien" }, { emoji: "😐", texto: "Más o menos" }, { emoji: "😟",
  texto: "Triste" }, { emoji: "😢", texto: "Muy triste" }], pedirCompaniaDesde: 3, franjas:
  ["Mañana", "Tarde", "Noche"] } y CONFIG.ayuda = "Si se siente muy mal, llame gratis a la
  Línea 113 del Minsa, opción 5 (salud mental). Atienden las 24 horas."
- En #index.html, antes del testimonio, agrega una section id="animo" con el título
  "¿Cómo se siente hoy?", el texto "Toque una carita. Es anónimo.", un div id="caritas" y un
  div id="animo-respuesta" con aria-live="polite". Agrega "Hoy" al nav.
- En #cliente.js: pinta un botón grande por carita (emoji grande + texto). Al tocar una:
  márcala como elegida y guarda Datos.crear("animos", { nivel: posición, carita: texto }).
  Si la posición es menor que pedirCompaniaDesde, muestra "¡Qué bueno! Gracias por contarnos.
  💛". Si no, muestra "Gracias por contarnos. No está sin compañía." y la pregunta
  "¿Quiere que un voluntario le acompañe?" con un botón grande "🤝 " + franja por cada franja
  (data-compania y data-motivo "Se siente: [texto]"); con la última carita muestra también
  CONFIG.ayuda en una caja con borde rojo. Al pulsar una franja: Datos.crear("solicitudes",
  { franja, motivo, estado: "Pendiente" }) y muestra "🤝 Listo. Un voluntario le acompañará
  en la [franja]." Haz esa parte con una función ofrecerCompania(motivo, conAyuda) que
  devuelva el HTML, para reusarla en el paso siguiente. Usa Util.seguro().
- Estilos en #cliente.css con las variables de base.css (caritas de mínimo 120 px de alto).
Cambia SOLO esos 4 archivos. Al final lista los archivos cambiados y cómo probarlo.
```

**✅ Comprueba:**
1. `index.html` → **F5** → menú **Hoy** → toca **😄**: dice **"¡Qué bueno!"** y no ofrece compañía.
2. Toca **😢**: aparece la **Línea 113** y los botones **🤝 Mañana / Tarde / Noche**.
3. Pulsa **🤝 Tarde**: dice **"Un voluntario le acompañará en la tarde"**.
4. En Supabase → **Table Editor**: en `animos` están tus caritas y en `solicitudes` tu pedido. **No hay ningún nombre.**

---

## Paso 8 · 🤖 Converse con Ayllu (Gemini)
**🛠️ Pega en Copilot:**
```
Agrega al sitio "Converse con Ayllu":
- En #config.js agrega CONFIG.ia con: clave "" (clave de Gemini), modelo
  "gemini-flash-lite-latest", instrucciones (es Ayllu, un compañero amable para adultos mayores de
  Ayacucho que pasan mucho tiempo solos; habla en español sencillo, con cariño, de "usted",
  en frases cortas y máximo 4 oraciones; escucha y pregunta por su día, recuerdos y gustos;
  no da diagnósticos ni consejos médicos y sugiere hablar con su médico o su familia; no pide
  datos personales; si la persona dice que se siente muy triste, sin ganas de vivir o en
  peligro, responde con calma y empieza su respuesta con [AYUDA]), saludo, respuestas (las 4
  de la sección 5 de #mi-proyecto.md como { palabras: [...], texto: "..." }),
  respuestaPorDefecto, respuestaAyuda ("Lamento mucho que se sienta así. Usted es importante
  y no tiene que pasar esto en soledad. Hay personas que pueden ayudarle ahora mismo.") y
  alerta: ["no quiero vivir", "quiero morir", "morirme", "sin ganas de vivir", "no aguanto",
  "me quiero matar", "matarme", "hacerme dano"].
- Crea el archivo js/ia.js con el mismo patrón que data.js: const IA con
  async conversar(mensaje, historial) que, si CONFIG.ia.clave tiene valor, llama con fetch a
  https://generativelanguage.googleapis.com/v1beta/models/ + CONFIG.ia.modelo +
  ":generateContent" (POST, cabecera "x-goog-api-key" con la clave, cuerpo con
  systemInstruction = las instrucciones y contents = historial + el mensaje). Sin clave usa
  el modo demo: si el mensaje tiene una palabra de alerta (sin mayúsculas ni tildes) responde
  respuestaAyuda; si no, busca las palabras clave o usa respuestaPorDefecto. Si Gemini falla,
  usa el modo demo y agrega "(Modo demo: Gemini no respondió)". Devuelve { texto, ayuda }:
  ayuda es true si la respuesta empezaba con [AYUDA] (quítalo del texto) o si el mensaje
  tiene una palabra de alerta. Exporta también modo().
- En #index.html carga js/ia.js antes de js/animaciones.js. Antes del testimonio agrega una
  section id="conversa" con un chip del modo, el título "Converse con Ayllu", una zona de
  mensajes con aria-live="polite" y un formulario con un input grande (con label) y el botón
  "Enviar". Agrega "Conversar" al nav.
- En #cliente.js: el chip dice "🤖 Ayllu con Gemini" o "🤖 Ayllu (modo demo)". Muestra el
  saludo como primera burbuja. Al enviar, muestra el mensaje, "Escribiendo…" y la respuesta
  (con Util.seguro() y saltos de línea como <br>); cada burbuja de Ayllu tiene un botón 🔊
  con data-escuchar. Guarda el historial con role "user" y "model". Si ayuda es true, agrega
  una caja con borde rojo con ofrecerCompania("Desde la conversación", true).
- Estilos de las burbujas en #cliente.css con letra grande y las variables de base.css.
Cambia SOLO esos archivos. Al final lista los archivos cambiados y cómo probarlo.
```

**✅ Comprueba (modo demo):** `index.html` → **F5** → menú **Conversar**. El chip dice **"(modo demo)"**. Escribe `me siento sola` y Ayllu responde con cariño. Pulsa **🔊** para escucharlo. Escribe `ya no quiero vivir así`: responde con calma y aparecen la **Línea 113** y los botones de **Pedir compañía**.

**✋ A mano (conectar Gemini):**
1. El profesor te da la **clave del taller**.
2. Pégala en `js/config.js`, en `ia` → `clave: ""`. Guarda con `Ctrl + S`.

**✅ Comprueba (con Gemini):** **F5** → el chip dice **"🤖 Ayllu con Gemini"**. Conversa sobre tu pueblo o tu música favorita: responde de "usted", corto, y recuerda lo que le dijiste antes. Escribe `me siento muy mal, nada tiene sentido`: aparece la caja de ayuda **y nunca se ve el texto `[AYUDA]`**.

---

## Paso 9 · 🤝 Solicitudes y 💛 ánimo en el panel
**🛠️ Pega en Copilot:**
```
En la vista Resumen de #panel.html agrega, debajo de .rejilla-resumen, 2 tarjetas (en 2
columnas en pantallas grandes y 1 en celular): "🤝 Solicitudes de compañía" con un chip
contador id="solicitudes-total" y un contenedor id="solicitudes", y "💛 Ánimo de la semana"
con un contenedor id="animo-semana". En #panel.js:
- pintarSolicitudes(): lee Datos.listar("solicitudes"), toma las "Pendiente" y ordénalas:
  primero las de motivo "Desde la conversación" (con ⚠️ y borde rojo) y luego por franja
  (Mañana, Tarde, Noche). Cada una muestra la franja, "motivo · Util.hace(created_at)" y un
  botón "✓ Atendida" que hace Datos.actualizar("solicitudes", id, { estado: "Atendida" }).
  Si no hay, usa la clase .vacio con "No hay solicitudes pendientes".
- pintarAnimo(): lee Datos.listar("animos") de los últimos 7 días y, por cada carita de
  CONFIG.animo.caritas, una fila con emoji y texto, una barra proporcional (en rojo desde
  pedirCompaniaDesde) y la cantidad; debajo, "N respuestas esta semana".
- Llama a las dos dentro de cargar(). Inserta los textos con Util.seguro(). Estilos en
  #panel.css con las variables de base.css.
Cambia SOLO esos 3 archivos. Al final lista los archivos cambiados y cómo probarlo.
```

**✅ Comprueba:**
1. `panel.html` → **Resumen** → **F5**. En **"Solicitudes de compañía"** está primero la que vino de la conversación (con **⚠️**) y luego la de la carita.
2. Pulsa **✓ Atendida**: el contador baja.
3. En **"Ánimo de la semana"** se ven las caritas que tocaste, con las tristes en rojo.

---

## Paso 10 · 🚀 Reto libre
Elijan una idea y **escriban su propio prompt** para Copilot. Debe tener: **archivos con `#`**, **"Cambia SOLO esos archivos"**, **todo lo que debe hacer** y **"Al final lista los archivos cambiados y cómo probarlo."**

| Idea | Archivos |
|---|---|
| 💌 Muro de cariño: los voluntarios escriben mensajes cortos en el panel y aparecen en el sitio con 🔊 | `#index.html` `#cliente.js` `#panel.html` `#panel.js` |
| 🎤 Hablar en vez de escribir: un botón 🎙️ que dicta el mensaje a Ayllu (SpeechRecognition) | `#index.html` `#cliente.js` |
| ⏰ "Actividad de hoy" en grande arriba de la página, según el día de la semana | `#index.html` `#cliente.js` |
| 📈 En el panel, el ánimo día por día de la última semana | `#panel.html` `#panel.js` |

**✅ Comprueba:** funciona y pueden explicar qué archivo cambió y por qué.

---

## 🚑 Si algo sale mal
| Problema | Qué hacer |
|---|---|
| Copilot cambió algo que no pedí | **Undo** y pega otra vez el prompt |
| Página en blanco o un botón no hace nada | **F12** → **Console** → copia el error rojo → pega en Copilot: `Tengo este error en la consola. Diagnostica la causa y aplica la corrección mínima.` y el error debajo |
| 🔊 no se escucha | Sube el volumen y prueba en **Chrome** o **Edge**. Si no hay voz en español instalada, lee con otra voz |
| La página quedó con letra enorme o en contraste | Pulsa **A−** y **🌗 Contraste** otra vez (se guarda en el navegador) |
| Ayllu dice "(Modo demo: Gemini no respondió)" | Revisa que pegaste la clave **completa** en `ia.clave` y pulsa **F5**. Si sigue igual, **avísale al profesor**. Mientras tanto la app funciona en modo demo |
| Se ve el texto `[AYUDA]` en la respuesta | Pega en Copilot: `En #ia.js quita "[AYUDA]" del inicio del texto antes de devolverlo y marca ayuda: true.` |
| Aviso "⚠️ Supabase · …" | Revisa la URL y la clave de `supabase` en `js/config.js` y que ejecutaste **todo** `tablas.sql` |
| Siguen los productos de la plantilla | Panel → **Configuración** → **Restablecer datos** |
