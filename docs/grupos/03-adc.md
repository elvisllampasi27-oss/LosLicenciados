# 🚨 Grupo 03 · A.D.C: Alerta & Denuncia Ciudadana

**Su app:** el vecino reporta un delito o un desastre **sin dar su nombre** y con su **ubicación**. La municipalidad recibe los reportes en el **panel**, los atiende y los resuelve. Todo se guarda **en la nube** (Supabase).

| Cara | Archivo | Quién la usa |
|---|---|---|
| 🌐 Sitio | `index.html` | Vecinos: reportan y ven las alertas activas |
| 🛠️ Panel | `panel.html` | Municipalidad: ve, ubica y atiende los reportes |

**Cómo usar esta guía:**
- **🧠 Pega en el Analista** → en claude.ai o gemini.google.com.
- **🛠️ Pega en Copilot** → en VS Code: `Ctrl + Alt + I` → modo **Agent** → pega → **Enter** → al terminar, **Keep**.
- **✋ A mano** → lo haces tú.
- **✅ Comprueba** → hazlo antes de pasar al siguiente paso.
- **F5** = recargar la página.

---

## Paso 1 · El Analista
**✋ A mano:** abre claude.ai o gemini.google.com y adjunta su ficha **`03.docx`** con 📎.

**🧠 Pega en el Analista:**
```
Actúa como analista de producto digital. Te adjunto la ficha del Lean Canvas de nuestro
emprendimiento A.D.C (Alerta & Denuncia Ciudadana), de Ayacucho. Vamos a adaptar una plantilla
web que ya funciona y tiene dos caras: un SITIO para los vecinos (portada, beneficios, cómo
funciona, alertas activas con filtros, testimonio y contacto) y un PANEL para la municipalidad
(resumen con indicadores y gráfico, tabla de reportes y mensajes).

Tu tarea: decide los textos, el color y los datos de ejemplo de nuestra app.
El módulo de datos ya está definido y NO lo cambies: se llama "Reportes" (singular "reporte",
botón "Nuevo reporte", ícono 🚨, tabla "reportes") con estos 7 campos:
titulo | Qué pasó | text | | sí | titulo
tipo | Tipo | select | Robo, Venta de drogas, Violencia, Vandalismo, Huaico, Inundación, Sismo | sí | categoria
descripcion | Detalle | textarea | | no | descripcion
barrio | Barrio o zona | text | | no | ninguno
estado | Estado | select | Recibido, En atención, Resuelto | sí | estado
latitud | Latitud | number | | no | ninguno
longitud | Longitud | number | | no | ninguno
Estado que se publica en el sitio: En atención.

Responde SOLO con el formato siguiente, en Markdown, sin frases antes ni después.
Si falta información, propón algo coherente y márcalo con ⚠️.
Por privacidad, NUNCA incluyas nombres reales, teléfonos, DNI ni direcciones exactas.

# Mi proyecto

## 1. Identidad
- Nombre:
- Eslogan (máx. 8 palabras; marca con *asteriscos* las 2 palabras a resaltar):
- Propuesta de valor (máx. 30 palabras):
- Color de acento (hex, que transmita alerta y confianza):

## 2. Partes que usaremos
- Sitio del cliente: sí (vecinos)
- Panel de control: sí (municipalidad)

## 3. Módulo de datos
- Campos: los 7 de arriba, tal cual.
- 6 reportes de ejemplo en barrios reales de Huamanga (sin direcciones exactas), con coordenadas
  dentro de Huamanga (latitud entre -13.17 y -13.15, longitud entre -74.24 y -74.21):
  2 en "Recibido", 3 en "En atención" y 1 en "Resuelto"; mezcla delitos y desastres.

## 4. Textos del sitio
- Beneficio 1, 2 y 3: emoji | título corto | 1 frase (anonimato, ubicación exacta, alertas)
- Paso 1, 2 y 3: título | 1 frase
- Testimonio: frase | nombre ficticio | barrio
- Datos de contacto: zona y horario de atención (sin dirección exacta)
```

**✋ A mano:** copia toda la respuesta. En VS Code abre **`mi-proyecto.md`** (junto a `index.html`) → `Ctrl + A` → `Ctrl + V` → `Ctrl + S`.
⛔ No la pegues en otro archivo. Si te equivocaste: `Ctrl + Shift + G` → clic derecho en ese archivo → **Discard Changes**.

**✅ Comprueba:** `mi-proyecto.md` tiene las 4 secciones y 6 reportes con latitud y longitud.

---

## Paso 2 · Configuración
**🛠️ Pega en Copilot:**
```
Con las secciones 1, 2 y 3 de #mi-proyecto.md, actualiza SOLO #config.js: proyecto.nombre,
partes, modulo (nombre "Reportes", singular "reporte", nuevo "Nuevo reporte", icono "🚨"),
tabla "reportes", los 7 campos con sus roles (latitud y longitud con enTabla: false, para que
no ocupen columnas en el panel), catalogo.soloEstado "En atención" y datosEjemplo con los 6
reportes (latitud y longitud como números). Mantén mensajesEjemplo y supabase.
```

**✅ Comprueba:** abre `panel.html` → **Configuración** → **Restablecer datos** → menú **Reportes**. Deben verse **6 reportes** y el botón **＋ Nuevo reporte**.

---

## Paso 3 · Textos del sitio
**🛠️ Pega en Copilot:**
```
Con las secciones 1 y 4 de #mi-proyecto.md, actualiza los textos de #index.html: <title>,
meta description, chip y <h1> de la portada (las palabras con * van dentro de
<span class="titulo-dorado">), propuesta de valor, botones de la portada, beneficios, pasos,
testimonio y contacto. La sección del catálogo ahora se llama "Alertas activas" (chip, h2 y
p, y su enlace en el nav). Cambia las 2 tarjetas flotantes por "🕵️ 100% anónimo" y
"📍 Con tu ubicación", y los datos "usuarios" y "equipos" por "vecinos" y "barrios".
Cambia SOLO textos y emojis; no toques clases, ids ni scripts.
```

**✅ Comprueba:** abre `index.html` y pulsa **F5**. Debe verse su eslogan y una sección **"Alertas activas"** con **3 tarjetas**. No debe quedar ningún texto de la plantilla.

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
not null solo en el campo de rol titulo; la tabla mensajes igual que en el modelo; y los
grant, enable row level security y políticas del modelo para las dos tablas.
No modifiques ningún otro archivo.
```
**✅ Comprueba:** existe `supabase/tablas.sql` con `create table if not exists public.reportes`.

**✋ A mano (crear el proyecto):**
1. supabase.com → **Start your project** → **Continue with GitHub**.
2. **New project** → Name `adc-5b` → **Generate a password** (guárdala) → Region **South America (São Paulo)** → **Create new project**. Espera a que termine de cargar.
3. **SQL Editor** → **New query** → pega **todo** `supabase/tablas.sql` → **Run**.

**✅ Comprueba:** dice **Success**. En **Table Editor** aparecen `reportes` y `mensajes`.

**✋ A mano (conectar la app):**
1. En Supabase pulsa **Connect** (arriba) o ve a **Project Settings → API**.
2. Copia la **Project URL** y pégala en `js/config.js`, en `url: ""`.
3. Copia la **Publishable key** (`sb_publishable_…`) y pégala en `clave: ""`. Guarda con `Ctrl + S`.
4. Abre `panel.html` → **Configuración** → **Restablecer datos**.

**✅ Comprueba:** arriba en el panel dice **☁️ Supabase**, y en **Table Editor** → `reportes` aparecen los 6 reportes.

**✋ A mano (prueba con 2 PC):**
1. Pásale tu `js/config.js` a un compañero. Él lo reemplaza en su proyecto.
2. Compañero: en el panel, **＋ Nuevo reporte** → escribe algo → **Guardar**.
3. Tú: **F5** en tu panel.

**✅ Comprueba:** ves el reporte de tu compañero. Comparten la misma base de datos.
> ⚠️ Solo para el taller: la tabla queda abierta a quien tenga la clave.

---

## Paso 6 · 🕵️ Reporte anónimo con ubicación
**🛠️ Pega en Copilot:**
```
Agrega al sitio la función "Reportar de forma anónima":
- En #config.js agrega CONFIG.mapa = { latitud: "latitud", longitud: "longitud" }.
- En #index.html, antes de la sección Contacto, agrega una section id="reportar" con el título
  "Reporta de forma anónima", un formulario SIN campo de nombre y un botón
  "📍 Usar mi ubicación" con un texto de estado debajo. Agrega "Reportar" al nav.
- En #cliente.js crea los campos del formulario a partir de CONFIG.campos (como el modal del
  panel), excepto el de rol estado y los dos de CONFIG.mapa. El botón 📍 usa
  navigator.geolocation.getCurrentPosition (enableHighAccuracy, timeout 10000): si funciona,
  guarda latitud y longitud y muestra "Ubicación agregada ✓"; si se niega o falla, muestra
  "No se pudo obtener tu ubicación. Puedes enviar el reporte sin ella.". Al enviar valida el
  campo de rol titulo y guarda con Datos.crear(CONFIG.tabla, …) con el estado "Recibido" (la
  primera opción del campo de rol estado) y las coordenadas si existen. Luego limpia el
  formulario y muestra Animaciones.aviso("Reporte enviado de forma anónima", "🕵️").
- Estilos en #cliente.css con las clases y variables de base.css.
Cambia SOLO esos 4 archivos. Al final lista los archivos cambiados y cómo probarlo.
```

**✅ Comprueba:**
1. `index.html` → **F5** → menú **Reportar**. El formulario **no pide nombre**.
2. Escribe "Prueba de reporte" → **📍 Usar mi ubicación** → **Permitir**. Debe decir **"Ubicación agregada ✓"**.
3. **Enviar reporte**. Sale el aviso **"🕵️ Reporte enviado de forma anónima"**.
4. `panel.html` → **Reportes** → **F5**. Aparece "Prueba de reporte" en **Recibido**.

---

## Paso 7 · 🗺️ Ver en el mapa
**🛠️ Pega en Copilot:**
```
Agrega un enlace "🗺️ Ver en mapa" que abra en una pestaña nueva (target="_blank" y
rel="noopener") https://www.google.com/maps/search/?api=1&query= seguido de latitud,longitud
del registro, leyendo los nombres de los campos desde CONFIG.mapa. Solo si el registro tiene
las dos coordenadas.
- En #cliente.js: dentro de cada tarjeta de alertas activas.
- En #panel.js: en la columna de acciones de cada fila de la tabla (botón de solo ícono 🗺️ con
  aria-label "Ver en mapa").
Cambia SOLO esos 2 archivos. Al final lista los archivos cambiados y cómo probarlo.
```

**✅ Comprueba:**
1. `panel.html` → **Reportes** → **F5** → pulsa **🗺️** en un reporte. Se abre Google Maps en otra pestaña, en Huamanga. Cierra esa pestaña.
2. `index.html` → **F5** → **Alertas activas** → pulsa **🗺️ Ver en mapa** en una tarjeta. Se abre Google Maps en otra pestaña.

---

## Paso 8 · ▶️ Atender y resolver
**🛠️ Pega en Copilot:**
```
En #panel.js, en cada fila de la tabla agrega un botón para avanzar el reporte al siguiente
estado según el orden de las opciones del campo de rol estado: si está en "Recibido" muestra
"▶ Atender" y si está en "En atención" muestra "✓ Resolver"; si ya está en el último estado no
muestra nada. Al pulsarlo usa Datos.actualizar, muestra Animaciones.aviso con el nuevo estado
y recarga la tabla con cargar(). Estilos con las clases btn btn--secundario btn--sm.
Cambia SOLO #panel.js. Al final lista los archivos cambiados y cómo probarlo.
```

**✅ Comprueba:**
1. `panel.html` → **Reportes** → **F5** → en "Prueba de reporte" pulsa **▶ Atender**. Pasa a **En atención**.
2. `index.html` → **F5** → aparece en **Alertas activas**.
3. En el panel pulsa **✓ Resolver**. Pasa a **Resuelto** y, con **F5** en el sitio, desaparece de las alertas.

---

## Paso 9 · 🚀 Reto libre
Elijan una idea y **escriban su propio prompt** para Copilot. Debe tener: **archivos con `#`**, **"Cambia SOLO esos archivos"**, **todo lo que debe hacer** y **"Al final lista los archivos cambiados y cómo probarlo."**

| Idea | Archivos |
|---|---|
| 🆘 Botón "Emergencia" en la portada que arme un mensaje de WhatsApp | `#index.html` `#cliente.js` |
| 📊 En el Resumen del panel, cuántos reportes hay de cada tipo | `#panel.html` `#panel.js` `#panel.css` |
| 🏘️ En el sitio, un filtro de alertas por barrio | `#index.html` `#cliente.js` |
| ⏱️ En el panel, resaltar en rojo los "Recibido" de hace más de 1 día | `#panel.js` `#panel.css` |

**✅ Comprueba:** funciona y pueden explicar qué archivo cambió y por qué.

---

## 🚑 Si algo sale mal
| Problema | Qué hacer |
|---|---|
| Copilot cambió algo que no pedí | **Undo** y pega otra vez el prompt |
| Página en blanco o un botón no hace nada | **F12** → **Console** → copia el error rojo → pega en Copilot: `Tengo este error en la consola. Diagnostica la causa y aplica la corrección mínima.` y el error debajo |
| Aviso "⚠️ Supabase · …" | Revisa la URL y la clave en `js/config.js` y que ejecutaste **todo** `tablas.sql` |
| No veo lo que guardó mi compañero | **F5** |
| Siguen los productos de la plantilla | Panel → **Configuración** → **Restablecer datos** |
