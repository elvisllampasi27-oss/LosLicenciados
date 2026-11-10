# 📅 Grupo 04 · Planificador para postulantes

**Su app:** el **postulante** usa el **panel** como su agenda personal: le dice su carrera a una **inteligencia artificial (Gemini)**, que le arma un **plan de estudio** repartido en el calendario hasta el día del examen. Cada día ve **qué le toca estudiar**, marca lo que ya estudió y ve su **avance por curso**. En el **sitio** ve la **cuenta regresiva** al examen y practica con un **mini simulacro con reloj**. Todo se guarda **en la nube** (Supabase).

| Cara | Archivo | Quién la usa |
|---|---|---|
| 🌐 Sitio | `index.html` | Postulantes: cuenta regresiva, temas que ya dominan y simulacro |
| 🛠️ Panel | `panel.html` | El postulante: su plan, lo que toca hoy y su avance |

**Cómo usar esta guía:**
- **🧠 Pega en el Analista** → en claude.ai o gemini.google.com.
- **🛠️ Pega en Copilot** → en VS Code: `Ctrl + Alt + I` → modo **Agent** → pega → **Enter** → al terminar, **Keep**.
- **✋ A mano** → lo haces tú.
- **✅ Comprueba** → hazlo antes de pasar al siguiente paso.
- **F5** = recargar la página.

---

## Paso 1 · El Analista
**✋ A mano:** abre claude.ai o gemini.google.com y adjunta su ficha **`04.docx`** con 📎.

**🧠 Pega en el Analista:**
```
Actúa como analista de producto digital. Te adjunto la ficha del Lean Canvas de nuestro
emprendimiento: una plataforma que arma un plan de estudio personalizado para los postulantes
a la Universidad Nacional de San Cristóbal de Huamanga (UNSCH), en Ayacucho. Vamos a adaptar
una plantilla web que ya funciona y tiene dos caras: un SITIO (portada con cuenta regresiva al
examen, beneficios, cómo funciona, temas que ya domino, mini simulacro, testimonio y contacto) y
un PANEL que es la agenda del postulante (su plan, lo que toca hoy y su avance).

Tu tarea: decide los textos, el color, los temas de ejemplo, las preguntas del simulacro y los
temas de respaldo por área. El módulo de datos ya está definido y NO lo cambies: se llama
"Mi plan" (singular "tema", botón "Nuevo tema", ícono 📅, tabla "temas") con estos 5 campos:
tema | Tema | text | | sí | titulo
curso | Curso | select | Matemática, Comunicación, Ciencias, Humanidades | sí | categoria
fecha | Fecha de estudio | date | | no | ninguno
estado | Estado | select | Pendiente, Estudiado, Repasar | sí | estado
detalle | Qué estudiar | textarea | | no | descripcion
Estado que se publica en el sitio: Estudiado.

Responde SOLO con el formato siguiente, en Markdown, sin frases antes ni después.
Si falta información, propón algo coherente y márcalo con ⚠️.
Por privacidad, NUNCA incluyas nombres reales, teléfonos ni DNI.

# Mi proyecto

## 1. Identidad
- Nombre:
- Eslogan (máx. 8 palabras; marca con *asteriscos* las 2 palabras a resaltar):
- Propuesta de valor (máx. 30 palabras):
- Color de acento (hex, que transmita enfoque y meta):

## 2. Partes que usaremos
- Sitio del cliente: sí (postulantes)
- Panel de control: sí (agenda del postulante)

## 3. Módulo de datos
- Campos: los 5 de arriba, tal cual.
- 5 temas de ejemplo del examen de admisión, uno por línea: tema | curso | estado | detalle
  (2 en "Estudiado", 2 en "Pendiente" y 1 en "Repasar"; sin fecha).

## 4. Textos del sitio
- Beneficio 1, 2 y 3: emoji | título corto | 1 frase
- Paso 1, 2 y 3: título | 1 frase
- Testimonio: frase | nombre ficticio | "Postulante a [carrera]"
- Datos de contacto: zona y horario (sin dirección exacta)

## 5. Plan y simulacro
- Fecha del examen de admisión (AAAA-MM-DD):
- Temas por día recomendados (1 a 3):
- 5 preguntas de simulacro tipo examen de admisión (Matemática, Comunicación, Ciencias,
  Humanidades y una de razonamiento), una por línea: pregunta | opción A | opción B | opción C |
  letra correcta

## 6. Temas de respaldo por área
Para cada área (Ingenierías, Ciencias de la Salud, Ciencias Sociales, Ciencias Económicas),
6 temas prioritarios, uno por línea: tema | curso | detalle (máx. 6 palabras).
El curso debe ser exactamente uno de los 4 del campo curso.
```

**✋ A mano:** copia toda la respuesta. En VS Code abre **`mi-proyecto.md`** (junto a `index.html`) → `Ctrl + A` → `Ctrl + V` → `Ctrl + S`.
⛔ No la pegues en otro archivo. Si te equivocaste: `Ctrl + Shift + G` → clic derecho en ese archivo → **Discard Changes**.

**✋ A mano:** revisen la **fecha del examen** en la sección 5 con el profesor. Si tiene ⚠️, corríjanla en `mi-proyecto.md`.

**✅ Comprueba:** `mi-proyecto.md` tiene las 6 secciones, 5 preguntas de simulacro y 6 temas para cada una de las 4 áreas.

---

## Paso 2 · Configuración
**🛠️ Pega en Copilot:**
```
Con las secciones 1, 2 y 3 de #mi-proyecto.md, actualiza SOLO #config.js: proyecto.nombre,
partes, modulo (nombre "Mi plan", singular "tema", nuevo "Nuevo tema", icono "📅"), tabla
"temas", los 5 campos con sus roles (fecha con tipo "date" y sin rol),
catalogo.soloEstado "Estudiado" y datosEjemplo con los 5 temas (fecha: ""). Mantén
mensajesEjemplo y supabase.
```

**✅ Comprueba:** abre `panel.html` → **Configuración** → **Restablecer datos** → menú **Mi plan**. Deben verse **5 temas** y el botón **＋ Nuevo tema**. Pulsa **＋ Nuevo tema**: el campo **Fecha de estudio** abre un calendario.

---

## Paso 3 · Textos del sitio
**🛠️ Pega en Copilot:**
```
Con las secciones 1 y 4 de #mi-proyecto.md, actualiza los textos de #index.html: <title>,
meta description, chip y <h1> de la portada (las palabras con * van dentro de
<span class="titulo-dorado">), propuesta de valor, botones de la portada, beneficios, pasos,
testimonio y contacto. La sección del catálogo ahora se llama "Temas que ya domino" (chip, h2
y p). Cambia las 2 tarjetas flotantes por "🤖 Plan con IA" y "⏱️ Simulacro con reloj", y los
datos "usuarios" y "equipos" por "días para el examen" y "temas".
Cambia SOLO textos y emojis; no toques clases, ids ni scripts.
```

**✅ Comprueba:** abre `index.html` y pulsa **F5**. Debe verse su eslogan y la sección **"Temas que ya domino"** con los 2 temas en estado Estudiado.

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
simulacros con las columnas aciertos (numeric) y total (numeric), además de id y created_at
como en el modelo; y los grant, enable row level security y políticas del modelo para las
tres tablas. No modifiques ningún otro archivo.
```
**✅ Comprueba:** existe `supabase/tablas.sql` con tres `create table`: `temas`, `mensajes` y `simulacros`.

**✋ A mano (crear el proyecto):**
1. supabase.com → **Start your project** → **Continue with GitHub** → **Authorize supabase**.
2. Solo la primera vez: **New organization** → deja el nombre, Type **Personal**, Plan **Free - $0/month** → **Create organization**.
3. **New project** → Name `plan-5b` → **Generate a password** (guárdala) → Region: deja **Americas** → en *Security* deja marcado **Enable Data API** → **Create new project**. Espera a que diga **Healthy**.
4. Menú de la izquierda → **SQL Editor** (ícono `>_`) → pega **todo** `supabase/tablas.sql` → **Run** (o `Ctrl + Enter`). Si sale un aviso de *destructive operation*, pulsa **Run this query**: es por los `drop policy if exists`, no borra datos.

**✅ Comprueba:** dice **Success**. En **Table Editor** aparecen `temas`, `mensajes` y `simulacros`.

**✋ A mano (conectar la app):**
1. En **Project Overview** (🏠) está la URL `https://….supabase.co`: pulsa **Copy** y pégala en `js/config.js`, en `supabase` → `url: ""`.
2. Pulsa el botón verde **Connect** (arriba) o ve a **Project Settings → API Keys** y copia la **Publishable key** (`sb_publishable_…`). Pégala en `clave: ""` de `supabase`. Guarda con `Ctrl + S`.
3. Abre `panel.html` → **Configuración** → **Restablecer datos**.

**✅ Comprueba:** arriba en el panel dice **☁️ Supabase**, y en **Table Editor** → `temas` aparecen los 5 temas.

**✋ A mano (prueba con 2 PC):**
1. Pásale tu `js/config.js` a un compañero. Él lo reemplaza en su proyecto.
2. Compañero: en el panel, **＋ Nuevo tema** → llénalo con estado **Estudiado** → **Guardar**.
3. Tú: abre `index.html` y pulsa **F5**.

**✅ Comprueba:** ves el tema de tu compañero en "Temas que ya domino".

---

## Paso 6 · 🤖 Arma mi plan con IA (Gemini)
**🛠️ Pega en Copilot:**
```
Agrega al panel la función "Arma mi plan con IA":
- En #config.js agrega CONFIG.plan = { fechaExamen, temasPorDia, areas: ["Ingenierías",
  "Ciencias de la Salud", "Ciencias Sociales", "Ciencias Económicas"] } con la fecha y los
  temas por día de la sección 5 de #mi-proyecto.md. Agrega también CONFIG.ia con: clave ""
  (clave de Gemini), modelo "gemini-flash-lite-latest", instrucciones (es asesor académico de
  postulantes a la UNSCH de Ayacucho; cuando le den una carrera y un área propone los 12 temas
  más importantes para el examen de admisión, de mayor a menor prioridad; responde SOLO con un
  arreglo JSON de objetos con las claves tema, curso y detalle; el curso es exactamente uno de
  los 4 del campo de rol categoria) y temasDemo: un objeto con las 4 áreas como claves y, en
  cada una, los 6 temas de la sección 6 como { tema, curso, detalle }.
- Crea el archivo js/ia.js con el mismo patrón que data.js: const IA con una función
  async planificar(carrera, area) que, si CONFIG.ia.clave tiene valor, llama con fetch a
  https://generativelanguage.googleapis.com/v1beta/models/ + CONFIG.ia.modelo +
  ":generateContent" (POST, cabecera "x-goog-api-key" con la clave, cuerpo con
  systemInstruction = las instrucciones, contents = "Carrera: X. Área: Y." y
  generationConfig.responseMimeType "application/json"), convierte el texto en arreglo con
  JSON.parse (quitando ``` si vienen) y se queda solo con los temas cuyo curso sea válido.
  Si no hay clave, si Gemini falla o si no quedan temas válidos, usa CONFIG.ia.temasDemo[area].
  Devuelve { temas, modo } con modo "gemini" o "demo". Exporta también modo().
- En #panel.html carga js/ia.js antes de js/animaciones.js. En la cabecera de la vista
  registros, junto al botón #boton-nuevo, agrega un botón id="boton-plan" "🤖 Arma mi plan con
  IA". Agrega un <dialog class="modal" id="modal-plan"> igual al modal existente, con los
  campos (con label): carrera (input), área (select) y temas por día (number, 1 a 5), un texto
  que diga el modo y los botones Cancelar y "Crear mi plan".
- En #panel.js: llena el select de áreas con CONFIG.plan.areas y temas por día con
  CONFIG.plan.temasPorDia. El texto del modal dice "Gemini propondrá los temas según tu
  carrera." o "Modo demo: se usarán temas preparados para tu área." según IA.modo(). Al
  pulsar "Crear mi plan": aviso "Armando tu plan…", llama a IA.planificar y guarda cada tema con
  Datos.crear(CONFIG.tabla, ...) usando los nombres de los campos por su rol, estado
  "Pendiente" y la fecha Util.hoy(n) repartiendo N temas por día desde hoy; no programes temas
  después de CONFIG.plan.fechaExamen. Al final, aviso "Plan creado (con Gemini / modo demo):
  X temas desde hoy" y vuelve a cargar los datos.
Cambia SOLO esos archivos. Al final lista los archivos cambiados y cómo probarlo.
```

**✅ Comprueba (modo demo):** `panel.html` → **F5** → menú **Mi plan** → **🤖 Arma mi plan con IA**. Dice **"Modo demo"**. Escribe una carrera, elige el área, **2** temas por día → **Crear mi plan**. Aparecen **6 temas nuevos** en la tabla, con fechas de hoy, mañana y pasado mañana.

**✋ A mano (conectar Gemini):**
1. El profesor te da la **clave del taller**.
2. Pégala en `js/config.js`, en `ia` → `clave: ""`. Guarda con `Ctrl + S`.

**✅ Comprueba (con Gemini):** **F5** → **🤖 Arma mi plan con IA**. Ahora dice **"Gemini propondrá los temas…"**. Escribe `Ingeniería de Sistemas`, área **Ingenierías** → **Crear mi plan**. El aviso dice **"con Gemini"** y aparecen temas distintos a los del modo demo, repartidos en el calendario.

---

## Paso 7 · 📅 Hoy y esta semana
**🛠️ Pega en Copilot:**
```
En la vista Resumen de #panel.html agrega, debajo de .rejilla-resumen, una tarjeta
"📅 Hoy y esta semana" con un chip que muestre la fecha de hoy y un contenedor id="agenda".
En #panel.js crea pintarAgenda(): de los registros que NO están en "Estudiado" y tienen fecha,
arma 3 grupos: "⚠️ Atrasados" (fecha antes de hoy, con borde de color de alerta), "Hoy" y
"Esta semana" (hasta Util.hoy(7)); oculta los grupos vacíos. Cada tema muestra su nombre,
"curso · fecha" (con Util.fecha) y un botón "✓ Estudiado" que hace
Datos.actualizar(CONFIG.tabla, id, { estado: "Estudiado" }), muestra el aviso
"¡Tema estudiado!" y vuelve a cargar. Si no hay nada, usa la clase .vacio con el mensaje
"Nada pendiente esta semana". La primera vez que se pinta, si hay temas para hoy, muestra el
aviso "Hoy te tocan N temas" (recordatorio). Llámala dentro de cargar(). Inserta los textos
con Util.seguro(). Estilos en #panel.css con las variables de base.css.
Cambia SOLO esos 3 archivos. Al final lista los archivos cambiados y cómo probarlo.
```

**✅ Comprueba:**
1. `panel.html` → **Resumen** → **F5**. Aparece el aviso **"Hoy te tocan N temas"** y la tarjeta muestra **Hoy** y **Esta semana** con los temas de tu plan.
2. Menú **Mi plan** → edita un tema y ponle la **fecha de ayer** → **Guardar** → **Resumen**: aparece en **⚠️ Atrasados**.
3. Pulsa **✓ Estudiado** en ese tema: desaparece de la lista y en `index.html` (**F5**) aparece en "Temas que ya domino".

---

## Paso 8 · ⏱️ Cuenta regresiva y simulacro
**🛠️ Pega en Copilot:**
```
Agrega al sitio la cuenta regresiva y un mini simulacro con reloj:
- En #config.js agrega CONFIG.simulacro = { minutos: 5, preguntas: [...] } con las 5
  preguntas de la sección 5 de #mi-proyecto.md como { texto, opciones: [A, B, C],
  respuesta: índice de la correcta (0, 1 o 2) }.
- En #index.html, en los datos de la portada, cambia el <dt> de "días para el examen" por
  <dt id="dias-examen">0</dt>. Antes de la sección Contacto agrega una section id="simulacro"
  con el título "Mini simulacro de admisión" y un contenedor .tarjeta con aria-live="polite".
  Agrega "Simulacro" al nav.
- En #cliente.js: calcula los días que faltan desde hoy hasta CONFIG.plan.fechaExamen y
  muéstralos en #dias-examen con Animaciones.contar. En el simulacro, muestra "5 preguntas · 5
  minutos" y un botón "Empezar simulacro". Al empezar, muestra un reloj mm:ss que baja cada
  segundo (en rojo el último minuto) y todas las preguntas, cada una en un <fieldset> con
  <legend> y sus opciones como radio buttons con label. Al pulsar "Terminar y calificar" o al
  llegar el reloj a 0: detén el reloj, desactiva las opciones, marca en verde la correcta y en
  rojo la elegida si falló, guarda Datos.crear("simulacros", { aciertos, total }), muestra
  "aciertos / total" (o "⏰ Se acabó el tiempo") y un botón "Intentar otra vez". Inserta los
  textos con Util.seguro().
- Estilos en #cliente.css con las clases y variables de base.css (el fieldset sin borde).
Cambia SOLO esos 4 archivos. Al final lista los archivos cambiados y cómo probarlo.
```

**✅ Comprueba:**
1. `index.html` → **F5**. En la portada se ven los **días para el examen** contando.
2. Menú **Simulacro** → **Empezar simulacro**. El reloj baja desde **05:00**.
3. Responde y pulsa **Terminar y calificar**: aparece tu puntaje, por ejemplo **3 / 5**, con las correctas en verde.
4. En Supabase → **Table Editor** → `simulacros`: aparece tu intento.

---

## Paso 9 · 📊 Mi avance
**🛠️ Pega en Copilot:**
```
En la vista Resumen de #panel.html, junto a la tarjeta "Hoy y esta semana" (en 2 columnas en
pantallas grandes y 1 en celular), agrega una tarjeta "📊 Mi avance" con un contenedor
id="avance". En #panel.js crea pintarAvance(): por cada curso (opciones del campo de rol
categoria), una fila con el nombre, una barra y el porcentaje de temas en "Estudiado" sobre el
total de temas de ese curso. Debajo, "📝 Últimos simulacros": lee Datos.listar("simulacros") y
muestra los 5 más recientes con Util.hace(created_at) y "aciertos / total", o "Aún no hay
simulacros". Llámala dentro de cargar(). Estilos en #panel.css con las variables de base.css,
sin librerías.
Cambia SOLO esos 3 archivos. Al final lista los archivos cambiados y cómo probarlo.
```

**✅ Comprueba:** `panel.html` → **Resumen** → **F5**. En **"Mi avance"** cada curso tiene su barra. Marca un tema con **✓ Estudiado**: su barra sube. Abajo aparece el simulacro que hiciste en el paso 8.

---

## Paso 10 · 🚀 Reto libre
Elijan una idea y **escriban su propio prompt** para Copilot. Debe tener: **archivos con `#`**, **"Cambia SOLO esos archivos"**, **todo lo que debe hacer** y **"Al final lista los archivos cambiados y cómo probarlo."**

| Idea | Archivos |
|---|---|
| 🔁 Botón "Reprogramar atrasados": mueve todos los temas atrasados a partir de hoy | `#panel.html` `#panel.js` |
| 🔥 Racha: cuántos días seguidos marcó al menos un tema como estudiado | `#panel.js` |
| 🗓️ Vista calendario del mes con los temas de cada día | `#panel.html` `#panel.js` `#panel.css` |
| 🎯 Al terminar el simulacro, recomendar el curso donde más falló | `#cliente.js` |

**✅ Comprueba:** funciona y pueden explicar qué archivo cambió y por qué.

---

## 🚑 Si algo sale mal
| Problema | Qué hacer |
|---|---|
| Copilot cambió algo que no pedí | **Undo** y pega otra vez el prompt |
| Página en blanco o un botón no hace nada | **F12** → **Console** → copia el error rojo → pega en Copilot: `Tengo este error en la consola. Diagnostica la causa y aplica la corrección mínima.` y el error debajo |
| El plan dice "modo demo" aunque puse la clave | Revisa que pegaste la clave **completa** en `ia.clave` y pulsa **F5**. Si sigue igual, **avísale al profesor**. Mientras tanto la app funciona en modo demo |
| El plan no crea ningún tema | Revisa que `fechaExamen` sea una fecha futura con formato `AAAA-MM-DD` |
| "Hoy y esta semana" sale vacío | Solo muestra temas con fecha y que no estén en Estudiado. Crea un plan en **Mi plan** |
| Aviso "⚠️ Supabase · …" | Revisa la URL y la clave de `supabase` en `js/config.js` y que ejecutaste **todo** `tablas.sql` |
| No veo lo que guardó mi compañero | **F5** |
| Siguen los productos de la plantilla | Panel → **Configuración** → **Restablecer datos** |
