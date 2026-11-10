# 🧭 Grupo 02 · IA Responsable

**Su app:** una IA que **enseña a usar la IA**. El **alumno**, en el **sitio**, conversa con un **Mentor IA (Gemini) que no le hace la tarea**: le da pistas y preguntas. Si alguien le pide la tarea completa, el Mentor lo detecta y lo registra **sin nombre**. Además hay un **test** para saber si usas bien la IA. El **docente**, en el **panel**, publica consejos y ve los resultados. Todo se guarda **en la nube** (Supabase).

| Cara | Archivo | Quién la usa |
|---|---|---|
| 🌐 Sitio | `index.html` | Alumnos: conversan con el Mentor y hacen el test |
| 🛠️ Panel | `panel.html` | Docentes: publican consejos y ven el uso responsable del salón |

**Cómo usar esta guía:**
- **🧠 Pega en el Analista** → en claude.ai o gemini.google.com.
- **🛠️ Pega en Copilot** → en VS Code: `Ctrl + Alt + I` → modo **Agent** → pega → **Enter** → al terminar, **Keep**.
- **✋ A mano** → lo haces tú.
- **✅ Comprueba** → hazlo antes de pasar al siguiente paso.
- **F5** = recargar la página.

---

## Paso 1 · El Analista
**✋ A mano:** abre claude.ai o gemini.google.com y adjunta su ficha **`02.docx`** con 📎.

**🧠 Pega en el Analista:**
```
Actúa como analista de producto digital. Te adjunto la ficha del Lean Canvas de nuestro
emprendimiento IA Responsable, del colegio Los Licenciados de Ayacucho: queremos que los
estudiantes de secundaria usen la inteligencia artificial para aprender y no para copiar.
Vamos a adaptar una plantilla web que ya funciona y tiene dos caras: un SITIO para los alumnos
(portada, beneficios, cómo funciona, consejos, un Mentor IA, un test, testimonio y contacto) y
un PANEL para los docentes (resumen, tabla de consejos y uso responsable del salón).

Tu tarea: decide los textos, el color, los consejos, los casos del test y las reglas del Mentor.
El módulo de datos ya está definido y NO lo cambies: se llama "Consejos" (singular "consejo",
botón "Nuevo consejo", ícono 💡, tabla "consejos") con estos 6 campos:
titulo | Consejo | text | | sí | titulo
etapa | Etapa | select | Investigar, Crear, Citar, Verificar | sí | categoria
descripcion | Explicación | textarea | | no | descripcion
ejemplo | Ejemplo | textarea | | no | ninguno
estado | Estado | select | Publicado, Borrador | sí | estado
icono | Ícono | text | | no | icono
Estado que se publica en el sitio: Publicado.

Responde SOLO con el formato siguiente, en Markdown, sin frases antes ni después.
Si falta información, propón algo coherente y márcalo con ⚠️.
Por privacidad, NUNCA incluyas nombres reales, teléfonos ni DNI.

# Mi proyecto

## 1. Identidad
- Nombre:
- Eslogan (máx. 8 palabras; marca con *asteriscos* las 2 palabras a resaltar):
- Propuesta de valor (máx. 30 palabras):
- Color de acento (hex):

## 2. Partes que usaremos
- Sitio del cliente: sí (alumnos)
- Panel de control: sí (docentes)

## 3. Módulo de datos
- Campos: los 6 de arriba, tal cual.
- 6 consejos de ejemplo (al menos uno por etapa), con un ejemplo concreto de estudiante y un
  emoji. 5 en "Publicado" y 1 en "Borrador".

## 4. Textos del sitio
- Beneficio 1, 2 y 3: emoji | título corto | 1 frase
- Paso 1, 2 y 3: título | 1 frase
- Testimonio: frase | nombre ficticio | grado
- Datos de contacto: zona y horario (sin dirección exacta)

## 5. Test "¿Usas bien la IA?"
- 6 casos reales de estudiantes, uno por línea: situación | responsable o no responsable |
  por qué (1 frase). Mitad responsables y mitad no.

## 6. Mentor IA
- 4 reglas del Mentor (frases cortas en primera persona, por ejemplo "No hago tu tarea").
- Frases típicas de un alumno que pide que le hagan la tarea (8, cortas, sin tildes):
- Respuesta del Mentor cuando le piden la tarea (una pista y 2 preguntas):
- 3 respuestas para el modo demo, una por línea: palabras clave separadas por coma (sin
  tildes) | respuesta corta
- Respuesta cuando no sabe (1 frase):
```

**✋ A mano:** copia toda la respuesta. En VS Code abre **`mi-proyecto.md`** (junto a `index.html`) → `Ctrl + A` → `Ctrl + V` → `Ctrl + S`.
⛔ No la pegues en otro archivo. Si te equivocaste: `Ctrl + Shift + G` → clic derecho en ese archivo → **Discard Changes**.

**✅ Comprueba:** `mi-proyecto.md` tiene las 6 secciones, 6 consejos, 6 casos del test y las reglas del Mentor.

---

## Paso 2 · Configuración
**🛠️ Pega en Copilot:**
```
Con las secciones 1, 2 y 3 de #mi-proyecto.md, actualiza SOLO #config.js: proyecto.nombre,
partes, modulo (nombre "Consejos", singular "consejo", nuevo "Nuevo consejo", icono "💡"),
tabla "consejos", los 6 campos con sus roles (ejemplo con enTabla: false),
catalogo.soloEstado "Publicado" y datosEjemplo con los 6 consejos.
Mantén mensajesEjemplo y supabase.
```

**✅ Comprueba:** abre `panel.html` → **Configuración** → **Restablecer datos** → menú **Consejos**. Deben verse **6 consejos** y el botón **＋ Nuevo consejo**.

---

## Paso 3 · Textos del sitio
**🛠️ Pega en Copilot:**
```
Con las secciones 1 y 4 de #mi-proyecto.md, actualiza los textos de #index.html: <title>,
meta description, chip y <h1> de la portada (las palabras con * van dentro de
<span class="titulo-dorado">), propuesta de valor, botones de la portada, beneficios, pasos,
testimonio y contacto. La sección del catálogo ahora se llama "Consejos para usar bien la IA"
(chip, h2 y p). Cambia las 2 tarjetas flotantes por "🧭 Mentor que no copia" y
"🧪 Test de uso responsable", y los datos "usuarios" y "equipos" por "alumnos" y "consejos".
Cambia SOLO textos y emojis; no toques clases, ids ni scripts.
```

**✅ Comprueba:** abre `index.html` y pulsa **F5**. Debe verse su eslogan y la sección **"Consejos para usar bien la IA"** con 5 consejos.

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
tests con las columnas aciertos (numeric), total (numeric) y nivel (text); una tabla alertas
con la columna tipo (text); las tablas tests y alertas también con id y created_at como en el
modelo; y los grant, enable row level security y políticas del modelo para las cuatro tablas.
No modifiques ningún otro archivo.
```
**✅ Comprueba:** existe `supabase/tablas.sql` con cuatro `create table`: `consejos`, `mensajes`, `tests` y `alertas`.

**✋ A mano (crear el proyecto):**
1. supabase.com → **Start your project** → **Continue with GitHub** → **Authorize supabase**.
2. Solo la primera vez: **New organization** → deja el nombre, Type **Personal**, Plan **Free - $0/month** → **Create organization**.
3. **New project** → Name `ia-responsable-5b` → **Generate a password** (guárdala) → Region: deja **Americas** → en *Security* deja marcado **Enable Data API** → **Create new project**. Espera a que diga **Healthy**.
4. Menú de la izquierda → **SQL Editor** (ícono `>_`) → pega **todo** `supabase/tablas.sql` → **Run** (o `Ctrl + Enter`). Si sale un aviso de *destructive operation*, pulsa **Run this query**: es por los `drop policy if exists`, no borra datos.

**✅ Comprueba:** dice **Success**. En **Table Editor** aparecen `consejos`, `mensajes`, `tests` y `alertas`.

**✋ A mano (conectar la app):**
1. En **Project Overview** (🏠) está la URL `https://….supabase.co`: pulsa **Copy** y pégala en `js/config.js`, en `supabase` → `url: ""`.
2. Pulsa el botón verde **Connect** (arriba) o ve a **Project Settings → API Keys** y copia la **Publishable key** (`sb_publishable_…`). Pégala en `clave: ""` de `supabase`. Guarda con `Ctrl + S`.
3. Abre `panel.html` → **Configuración** → **Restablecer datos**.

**✅ Comprueba:** arriba en el panel dice **☁️ Supabase**, y en **Table Editor** → `consejos` aparecen los 6 consejos.

**✋ A mano (prueba con 2 PC):**
1. Pásale tu `js/config.js` a un compañero. Él lo reemplaza en su proyecto.
2. Compañero (docente): en el panel, **＋ Nuevo consejo** → llénalo con estado **Publicado** → **Guardar**.
3. Tú (alumno): abre `index.html` y pulsa **F5**.

**✅ Comprueba:** ves el consejo de tu compañero en la sección de consejos.

---

## Paso 6 · 🧭 Mentor IA con reglas (Gemini)
**🛠️ Pega en Copilot:**
```
Agrega al sitio un "Mentor IA" que enseña sin hacer la tarea:
- En #config.js agrega CONFIG.ia con: clave "" (clave de Gemini), modelo
  "gemini-flash-lite-latest", reglas (las 4 de la sección 6 de #mi-proyecto.md), instrucciones (es
  el Mentor IA del colegio Los Licenciados de Ayacucho, responde en español, con amabilidad y
  en máximo 6 líneas; nunca hace la tarea, el examen ni el trabajo completo; si el alumno le
  pide eso, empieza su respuesta EXACTAMENTE con [COPIA] y luego da una pista y 2 preguntas;
  si pide entender un tema, lo explica con un ejemplo; recuerda verificar datos y decir cuándo
  se usó IA; no pide datos personales), patronesCopia (las frases típicas de la sección 6),
  respuestaCopia, respuestas (las 3 del modo demo como { palabras: [...], texto: "..." }) y
  respuestaPorDefecto.
- Crea el archivo js/ia.js con el mismo patrón que data.js: const IA con una función
  async responder(mensaje, historial) que, si CONFIG.ia.clave tiene valor, llama con fetch a
  https://generativelanguage.googleapis.com/v1beta/models/ + CONFIG.ia.modelo +
  ":generateContent" (POST, cabecera "x-goog-api-key" con la clave, cuerpo con
  systemInstruction = las instrucciones y contents = historial + el mensaje) y devuelve el
  texto de la respuesta. Si no hay clave, o si Gemini falla, usa el modo demo: si el mensaje
  contiene alguno de patronesCopia (sin importar mayúsculas ni tildes) devuelve "[COPIA] " +
  respuestaCopia; si no, busca las palabras clave de respuestas o devuelve la respuesta por
  defecto; si Gemini falló, agrega al final "(Modo demo: Gemini no respondió)". Exporta
  también modo(), que devuelve "gemini" o "demo".
- En #index.html carga js/ia.js antes de js/cliente.js. Antes de la sección Contacto agrega
  una section id="mentor" con el título "Tu Mentor IA", un chip que muestre el modo, un aside
  "📜 Mis reglas" con una lista ordenada y la nota "Así se controla una IA: con instrucciones,
  igual que las reglas de Copilot", una zona de mensajes con aria-live="polite" y un
  formulario con un input (con label) y un botón "Enviar". Agrega "Mentor IA" al nav.
- En #cliente.js: muestra las reglas de CONFIG.ia.reglas en la lista; el chip dice
  "🧭 Mentor IA con Gemini" o "🧭 Mentor IA (modo demo)" según IA.modo(); muestra un saludo.
  Al enviar, muestra el mensaje como burbuja del alumno, una burbuja "Pensando…" y luego la
  respuesta. Si la respuesta empieza con [COPIA]: quita esa etiqueta, guarda
  Datos.crear("alertas", { tipo: "Pidió la tarea completa" }) SIN el mensaje ni el nombre, y
  muestra arriba de la burbuja el chip "🚩 Intento de copia registrado" (clase chip
  chip--alerta). Texto con Util.seguro() y saltos de línea como <br>. Guarda la conversación
  en un historial con el formato de Gemini (role "user" y "model").
- Estilos en #cliente.css con las variables de base.css.
Cambia SOLO esos archivos. Al final lista los archivos cambiados y cómo probarlo.
```

**✅ Comprueba (modo demo):** `index.html` → **F5** → menú **Mentor IA**. Se ven las 4 reglas y el chip **"(modo demo)"**.
1. Escribe `hazme la tarea de fracciones` → el Mentor **no la hace**: da una pista y preguntas, con el chip **🚩 Intento de copia registrado**.
2. Escribe una de sus palabras clave → responde sin el chip 🚩.
3. En Supabase → **Table Editor** → `alertas`: aparece una fila con el tipo y la fecha, **sin nombre ni mensaje**.

**✋ A mano (conectar Gemini):**
1. El profesor te da la **clave del taller**.
2. Pégala en `js/config.js`, en `ia` → `clave: ""`. Guarda con `Ctrl + S`.

**✅ Comprueba (con Gemini):** **F5** → el chip dice **"🧭 Mentor IA con Gemini"**.
1. Escribe `resuelve mi problema: un auto va a 60 km/h durante 2 horas, ¿cuánto recorre?` → Gemini **no da el resultado**: da una pista y aparece **🚩**.
2. Escribe `explícame qué es la velocidad` → lo explica con un ejemplo, sin 🚩.

---

## Paso 7 · 🧪 Test "¿Usas bien la IA?"
**🛠️ Pega en Copilot:**
```
Agrega al sitio el test "¿Usas bien la IA?":
- En #config.js agrega CONFIG.test con: casos (los 6 de la sección 5 de #mi-proyecto.md como
  { texto, responsable: true o false, porque }) y niveles [{ minimo: 80, nombre: "🟢 Responsable",
  mensaje }, { minimo: 50, nombre: "🟡 En camino", mensaje }, { minimo: 0, nombre: "🔴 Cuidado",
  mensaje }].
- En #index.html, antes de la sección Contacto, agrega una section id="test" con el título
  "¿Usas bien la IA?" y un contenedor con aria-live="polite". Agrega "Test" al nav.
- En #cliente.js: muestra un botón "Empezar el test". Luego muestra los casos uno por uno con
  dos botones, "✅ Responsable" y "❌ No responsable". Al responder, desactiva los botones,
  muestra "✅ ¡Bien!" o "❌ No exactamente" con el "porque" del caso, actualiza el contador de
  aciertos y muestra "Siguiente". Al final calcula el porcentaje, elige el primer nivel cuyo
  minimo se cumpla, muestra aciertos / total, el nombre y el mensaje del nivel, guarda
  Datos.crear("tests", { aciertos, total, nivel }) y muestra "Hacer el test otra vez".
  Textos con Util.seguro().
- Estilos en #cliente.css con las clases y variables de base.css.
Cambia SOLO esos 4 archivos. Al final lista los archivos cambiados y cómo probarlo.
```

**✅ Comprueba:** `index.html` → **F5** → menú **Test** → **Empezar el test**. Responde los 6 casos: cada uno muestra su explicación. Al final ves tu nivel (🟢, 🟡 o 🔴). En Supabase → `tests` aparece tu resultado.

---

## Paso 8 · 📊 Uso responsable en el panel
**🛠️ Pega en Copilot:**
```
En la vista Resumen de #panel.html agrega, debajo de .rejilla-resumen, una tarjeta
"🧭 Uso responsable de la IA" con un contenedor id="uso". En #panel.js crea pintarUso(): lee
Datos.listar("tests") y Datos.listar("alertas"). A la izquierda, por cada nivel de
CONFIG.test.niveles, una fila con el nombre, una barra proporcional y la cantidad de tests en
ese nivel (si no hay tests, usa la clase .vacio con un mensaje). A la derecha, un recuadro
"🚩 Intentos de copia" con el total de alertas en grande y "Último: " con Util.hace() de la
más reciente. Llámala dentro de cargar(). Estilos en #panel.css con las variables de base.css.
Cambia SOLO esos 3 archivos. Al final lista los archivos cambiados y cómo probarlo.
```

**✅ Comprueba:** abre `panel.html` → **Resumen** → **F5**. En **"Uso responsable de la IA"** ves cuántos tests hay en cada nivel y el número de **🚩 intentos de copia**. Pídele a un compañero que haga el test y que le pida la tarea al Mentor desde **su** PC; luego pulsa **F5**: los números suben.

---

## Paso 9 · 🚀 Reto libre
Elijan una idea y **escriban su propio prompt** para Copilot. Debe tener: **archivos con `#`**, **"Cambia SOLO esos archivos"**, **todo lo que debe hacer** y **"Al final lista los archivos cambiados y cómo probarlo."**

| Idea | Archivos |
|---|---|
| 📎 "Ayúdame a citar": el alumno pega un texto y el Mentor le dice cómo citarlo y cómo declarar que usó IA | `#index.html` `#cliente.js` |
| ⚖️ "Compara tu respuesta": el alumno escribe su respuesta y el Mentor le dice qué está bien y qué mejorar, sin darle la respuesta | `#index.html` `#cliente.js` |
| 💡 Consejo del día en la portada, elegido al azar entre los publicados | `#index.html` `#cliente.js` |
| 📅 En el panel, intentos de copia por día de la semana | `#panel.html` `#panel.js` |

**✅ Comprueba:** funciona y pueden explicar qué archivo cambió y por qué.

---

## 🚑 Si algo sale mal
| Problema | Qué hacer |
|---|---|
| Copilot cambió algo que no pedí | **Undo** y pega otra vez el prompt |
| Página en blanco o un botón no hace nada | **F12** → **Console** → copia el error rojo → pega en Copilot: `Tengo este error en la consola. Diagnostica la causa y aplica la corrección mínima.` y el error debajo |
| El Mentor dice "(Modo demo: Gemini no respondió)" | Revisa que pegaste la clave **completa** en `ia.clave` y pulsa **F5**. Si sigue igual, **avísale al profesor**. Mientras tanto la app funciona en modo demo |
| Gemini hace la tarea en vez de dar pistas | Pídele a Copilot que refuerce la regla en `CONFIG.ia.instrucciones` (por ejemplo, con un ejemplo de qué responder) |
| Aviso "⚠️ Supabase · …" | Revisa la URL y la clave de `supabase` en `js/config.js` y que ejecutaste **todo** `tablas.sql` |
| No veo lo que guardó mi compañero | **F5** |
| Siguen los productos de la plantilla | Panel → **Configuración** → **Restablecer datos** |
