# 🗺️ Grupo 08 · Ruta Huamanga

**Su app:** una **guía turística de Huamanga**. En el **sitio**, el visitante ve los lugares (iglesias, miradores, artesanía, comida e historia) en un **mapa interactivo**, le pide a una **inteligencia artificial (Gemini)** que le **arme la ruta** según sus días e intereses, y junta **sellos en su pasaporte turístico** cada vez que visita un lugar. En el **panel**, el equipo publica los lugares, los **ubica en el mapa con un clic** y ve **los más visitados** y **lo que más piden**. Todo se guarda **en la nube** (Supabase).

| Cara | Archivo | Quién la usa |
|---|---|---|
| 🌐 Sitio | `index.html` | Turistas: mapa, ruta con IA y pasaporte |
| 🛠️ Panel | `panel.html` | El equipo: lugares, ubicación en el mapa y estadísticas |

**Cómo usar esta guía:**
- **🧠 Pega en el Analista** → en claude.ai o gemini.google.com.
- **🛠️ Pega en Copilot** → en VS Code: `Ctrl + Alt + I` → modo **Agent** → pega → **Enter** → al terminar, **Keep**.
- **✋ A mano** → lo haces tú.
- **✅ Comprueba** → hazlo antes de pasar al siguiente paso.
- **F5** = recargar la página.

---

## Paso 1 · El Analista arma su ficha
> Su ficha `8.docx` llegó vacía. Primero el Analista les arma el Lean Canvas con el tema **Ruta Huamanga**.

**✋ A mano:** abre claude.ai o gemini.google.com en un chat nuevo.

**🧠 Pega en el Analista:**
```
Actúa como consultor de emprendimientos. Somos estudiantes de 5.º de secundaria del colegio
Los Licenciados de Ayacucho y nuestro emprendimiento es "Ruta Huamanga": una app web que
ayuda a turistas y visitantes a conocer Huamanga (sus iglesias, miradores, barrios
artesanales, comida e historia), armar su ruta por días y llevar un pasaporte de lugares
visitados.

Arma nuestra ficha del Lean Canvas. Responde SOLO con el formato siguiente, en Markdown,
claro y sencillo, sin frases antes ni después. No inventes cifras exactas: si das un dato,
márcalo como ⚠️ "por verificar". No incluyas nombres reales, teléfonos ni DNI.

## Etapa 1 · Idea de emprendimiento (2 a 3 oraciones)
## Etapa 2 · Problema (problema central, 3 causas y 3 consecuencias)
## Etapa 3 · Segmento de clientes (3 segmentos, 1 línea cada uno)
## Etapa 4 · Propuesta de valor (1 frase)
## Etapa 5 · Lean Canvas (los 9 bloques, 1 a 3 viñetas cada uno)
```

**✋ A mano:** copia cada etapa en su lugar de **`8.docx`** y guárdalo para entregarlo.

**✅ Comprueba:** `8.docx` tiene las 5 etapas llenas.

**🧠 Pega en el Analista (en el mismo chat):**
```
Ahora actúa como analista de producto digital. Vamos a adaptar una plantilla web que ya
funciona y tiene dos caras: un SITIO para turistas (portada, beneficios, cómo funciona,
lugares con mapa, arma tu ruta, pasaporte, testimonio y contacto) y un PANEL para el equipo
(resumen, lugares, ubicar en el mapa y estadísticas).

Tu tarea: decide los textos, el color y los lugares de ejemplo, usando la ficha de arriba.
El módulo de datos ya está definido y NO lo cambies: se llama "Lugares" (singular "lugar",
botón "Nuevo lugar", ícono 📍, tabla "lugares") con estos 10 campos:
nombre | Lugar | text | | sí | titulo
categoria | Categoría | select | Iglesias, Miradores, Artesanía, Gastronomía, Historia | sí | categoria
barrio | Barrio o zona | text | | sí | ninguno
horario | Horario | text | | sí | ninguno
entrada | Entrada (S/) | number | | no | precio
latitud | Latitud | number | | no | ninguno
longitud | Longitud | number | | no | ninguno
estado | Estado | select | Publicado, Borrador | sí | estado
icono | Ícono (emoji) | text | | no | icono
descripcion | Descripción | textarea | | no | descripcion
Estado que se publica en el sitio: Publicado.

Responde SOLO con el formato siguiente, en Markdown, sin frases antes ni después.
Si falta información, propón algo coherente y márcalo con ⚠️.

# Mi proyecto

## 1. Identidad
- Nombre: Ruta Huamanga
- Eslogan (máx. 8 palabras; marca con *asteriscos* las 2 palabras a resaltar):
- Propuesta de valor (máx. 30 palabras):
- Color de acento (hex, que recuerde la piedra de Huamanga o los retablos):

## 2. Partes que usaremos
- Sitio del cliente: sí (turistas)
- Panel de control: sí (equipo)

## 3. Módulo de datos
- Campos: los 10 de arriba, tal cual.
- 8 lugares REALES de Huamanga, uno por línea:
  nombre | categoría | barrio | horario | entrada | latitud | longitud | estado | ícono | descripción (1 frase)
  Usa las 5 categorías. 7 en "Publicado" y 1 en "Borrador". La Plaza de Armas está en
  -13.1631, -74.2244: pon las demás coordenadas aproximadas cerca de ella (con 4 decimales)
  y márcalas con ⚠️, porque las corregiremos en el mapa. Si no sabes un horario o una
  entrada, márcalo con ⚠️.

## 4. Textos del sitio
- Beneficio 1, 2 y 3: emoji | título corto | 1 frase
- Paso 1, 2 y 3: título | 1 frase
- Testimonio: frase | nombre ficticio | ciudad de origen
- Datos de contacto: zona y horario (sin dirección exacta)

## 5. Pasaporte
- Nombre de la insignia al juntar 5 sellos (con emoji):
```

**✋ A mano:** copia toda la respuesta. En VS Code abre **`mi-proyecto.md`** (junto a `index.html`) → `Ctrl + A` → `Ctrl + V` → `Ctrl + S`.
⛔ No la pegues en otro archivo. Si te equivocaste: `Ctrl + Shift + G` → clic derecho en ese archivo → **Discard Changes**.

**✅ Comprueba:** `mi-proyecto.md` tiene las 5 secciones y 8 lugares con latitud y longitud (números negativos, cerca de -13.16 y -74.22).

---

## Paso 2 · Configuración
**🛠️ Pega en Copilot:**
```
Con las secciones 1, 2 y 3 de #mi-proyecto.md, actualiza SOLO #config.js: proyecto.nombre,
partes, modulo (nombre "Lugares", singular "lugar", nuevo "Nuevo lugar", icono "📍"), tabla
"lugares", los 10 campos con sus roles (barrio, horario, latitud y longitud sin rol;
entrada, latitud y longitud con tipo "number"; horario, latitud y longitud con
enTabla: false), catalogo.soloEstado "Publicado" y datosEjemplo con los 8 lugares. Cambia
los nombres de mensajesEjemplo por nombres genéricos (por ejemplo "Turista de Lima").
Mantén supabase.
```

**✅ Comprueba:** abre `panel.html` → **Configuración** → **Restablecer datos** → menú **Lugares**. Deben verse **8 lugares** con las columnas Categoría, Barrio, Entrada y Estado.

---

## Paso 3 · Textos del sitio
**🛠️ Pega en Copilot:**
```
Con las secciones 1 y 4 de #mi-proyecto.md, actualiza los textos de #index.html: <title>,
meta description, chip y <h1> de la portada (las palabras con * van dentro de
<span class="titulo-dorado">), propuesta de valor, botones de la portada, beneficios, pasos,
testimonio y contacto. La sección del catálogo ahora se llama "Descubre Huamanga" (chip, h2
y p). Cambia las 2 tarjetas flotantes por "🗺️ Mapa interactivo" y "🎫 Pasaporte turístico",
y los datos "usuarios" y "equipos" por "visitantes" y "barrios".
Cambia SOLO textos y emojis; no toques clases, ids ni scripts.
```

**✅ Comprueba:** abre `index.html` y pulsa **F5**. Debe verse su eslogan y la sección **"Descubre Huamanga"** con los **7 lugares publicados**.

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
visitas con la columna lugar_id (text); una tabla rutas con las columnas dias (numeric) e
intereses (text); las dos con id y created_at como en el modelo; y los grant, enable row
level security y políticas del modelo para las cuatro tablas. No modifiques ningún otro
archivo.
```
**✅ Comprueba:** existe `supabase/tablas.sql` con cuatro `create table`: `lugares`, `mensajes`, `visitas` y `rutas`.

**✋ A mano (crear el proyecto):**
1. supabase.com → **Start your project** → **Continue with GitHub**.
2. **New project** → Name `ruta-5b` → **Generate a password** (guárdala) → Region **South America (São Paulo)** → **Create new project**. Espera a que termine de cargar.
3. **SQL Editor** → **New query** → pega **todo** `supabase/tablas.sql` → **Run**.

**✅ Comprueba:** dice **Success**. En **Table Editor** aparecen las 4 tablas.

**✋ A mano (conectar la app):**
1. En Supabase pulsa **Connect** (arriba) o ve a **Project Settings → API**.
2. Copia la **Project URL** y pégala en `js/config.js`, en `supabase` → `url: ""`.
3. Copia la **Publishable key** (`sb_publishable_…`) y pégala en `clave: ""` de `supabase`. Guarda con `Ctrl + S`.
4. Abre `panel.html` → **Configuración** → **Restablecer datos**.

**✅ Comprueba:** arriba en el panel dice **☁️ Supabase**, y en **Table Editor** → `lugares` aparecen los 8 lugares.

**✋ A mano (prueba con 2 PC):**
1. Pásale tu `js/config.js` a un compañero. Él lo reemplaza en su proyecto.
2. Compañero: en el panel, **＋ Nuevo lugar** → llénalo con estado **Publicado** → **Guardar**.
3. Tú: abre `index.html` y pulsa **F5**.

**✅ Comprueba:** ves el lugar de tu compañero en "Descubre Huamanga".

---

## Paso 6 · 🗺️ Mapa interactivo y "Ubicar en el mapa"
**🛠️ Pega en Copilot:**
```
Agrega un mapa real con Leaflet y OpenStreetMap (gratis, sin clave):
- En #config.js agrega CONFIG.mapa = { centro: [-13.1631, -74.2244], zoom: 15 }.
- En #index.html y #panel.html agrega en el <head>, antes de css/base.css, el CSS
  https://unpkg.com/leaflet@1.9.4/dist/leaflet.css, y antes de js/config.js el script
  https://unpkg.com/leaflet@1.9.4/dist/leaflet.js.
- En #index.html, dentro de la sección catalogo y antes de .catalogo, agrega
  <div class="tarjeta mapa" id="mapa" role="region" aria-label="Mapa de lugares de Huamanga">.
- En #cliente.js:
  · Si L existe, crea el mapa en #mapa con CONFIG.mapa (scrollWheelZoom: false) y la capa
    https://tile.openstreetmap.org/{z}/{x}/{y}.png con la atribución "© OpenStreetMap". Si L
    no existe (sin internet), muestra en #mapa "El mapa necesita internet" con la clase .vacio.
  · En pintarCatalogo(), pinta un marcador (con title y alt = nombre) por cada lugar visible
    que tenga latitud y longitud, con un popup: ícono y nombre, "categoría · 🕘 horario".
    Así el filtro de categoría también filtra el mapa.
  · En tarjeta(): debajo de la descripción "🕘 horario · entrada" (si la entrada es 0,
    "Entrada libre"); en el pie, un botón "📍 Ver en el mapa" (data-ver-mapa = id) en lugar
    de "Me interesa" (quita su código). Al pulsarlo, baja al mapa, hace flyTo al lugar con
    zoom 17 y abre su popup; si no tiene ubicación, avisa.
- En #panel.html agrega al menú lateral el enlace "🗺️ Ubicar en el mapa" (data-vista=
  "ubicar") y una section class="vista" data-vista="ubicar" hidden con el título "Ubicar en
  el mapa", un select de lugares (con label), un texto id="ubicar-coordenadas"
  (aria-live="polite"), un botón "Guardar ubicación" y un div id="mapa-panel" (480 px de
  alto, role="region" con aria-label).
- En #panel.js: llena el select con los lugares cada vez que se carguen los datos. Crea el
  mapa del panel la primera vez que se abre la vista #ubicar y llama a invalidateSize()
  (estaba oculto). Muestra todos los lugares como marcadores. Al hacer clic en el mapa, pone
  un círculo rojo y muestra "Nueva ubicación: lat, lng". "Guardar ubicación" guarda latitud y
  longitud (6 decimales) del lugar elegido con Datos.actualizar y vuelve a cargar.
- Inserta los textos con Util.seguro(). Estilos en #cliente.css y #panel.css.
Cambia SOLO esos archivos. Al final lista los archivos cambiados y cómo probarlo.
```

**✅ Comprueba:**
1. `index.html` → **F5**. Arriba de los lugares hay un **mapa de Huamanga** con un marcador por lugar.
2. Filtra por **Iglesias**: el mapa solo muestra las iglesias.
3. En un lugar pulsa **📍 Ver en el mapa**: el mapa se acerca y abre su ficha.

**✋ A mano (corregir las ubicaciones ⚠️):**
1. `panel.html` → menú **🗺️ Ubicar en el mapa**.
2. Elige un lugar, acerca el mapa y **haz clic exactamente donde está** → **Guardar ubicación**.
3. Repítelo con los lugares que tenían ⚠️.

**✅ Comprueba:** en `index.html` (**F5**) los marcadores están en el lugar correcto.

---

## Paso 7 · 🎫 Pasaporte turístico
**🛠️ Pega en Copilot:**
```
Agrega el pasaporte turístico:
- En #config.js agrega CONFIG.pasaporte = { sellosParaInsignia: 5, insignia } con la insignia
  de la sección 5 de #mi-proyecto.md.
- En #index.html, en el aside, antes del bloque "¿Tienes dudas?", agrega un bloque
  "🎫 Mi pasaporte" con un div id="pasaporte" (aria-live="polite").
- En #cliente.js: los sellos se guardan en localStorage ("loslicenciados_sellos", una lista
  de ids). En tarjeta() agrega en el pie un botón "✅ Estuve aquí" (data-sello = id), que se
  ve como "✅ Visitado" y desactivado si ya tiene el sello; agrega el mismo botón en el popup
  del mapa. Al pulsarlo: guarda el sello, registra Datos.crear("visitas", { lugar_id: id })
  (anónimo, sin nombre), muestra un aviso y vuelve a pintar. pintarPasaporte() muestra
  "N / 5 sellos", los íconos de los lugares visitados en círculos punteados y "Te faltan X
  para tu insignia" o la insignia (con el aviso "¡Ganaste la insignia …!" al llegar a 5).
- En #panel.html, en la vista Resumen, debajo de .rejilla-resumen, agrega una tarjeta
  "🎫 Lugares más visitados" con un chip id="visitas-total" y un div id="mas-visitados".
  En #panel.js, dentro de cargar(), lee Datos.listar("visitas") y muestra los 5 lugares con
  más sellos con barras proporcionales y su número; si no hay, la clase .vacio.
- Usa Util.seguro(). Estilos en #cliente.css y #panel.css con las variables de base.css.
Cambia SOLO esos archivos. Al final lista los archivos cambiados y cómo probarlo.
```

**✅ Comprueba:**
1. `index.html` → **F5** → pulsa **✅ Estuve aquí** en 5 lugares (uno desde el popup del mapa). El pasaporte llega a **5 / 5** y aparece la **insignia**.
2. **F5**: los sellos siguen ahí y esos botones dicen **"✅ Visitado"**.
3. `panel.html` → **Resumen** → **F5**: en **"Lugares más visitados"** aparecen tus 5 lugares.

---

## Paso 8 · 🤖 Arma tu ruta con IA (Gemini)
**🛠️ Pega en Copilot:**
```
Agrega "Arma tu ruta" con IA:
- En #config.js agrega CONFIG.ia con: clave "" (clave de Gemini), modelo
  "gemini-flash-latest", intereses (las 5 categorías), lugaresPorDia: 4, horas: ["9:00 a. m.",
  "11:00 a. m.", "1:00 p. m.", "4:00 p. m.", "6:00 p. m."] e instrucciones (es guía turístico
  de Huamanga; recibe los días, los intereses y la lista de lugares en JSON; arma un
  itinerario usando SOLO lugares de esa lista, nunca inventa lugares, máximo 4 por día,
  ordenados para caminar poco y respetando sus horarios; responde SOLO con un objeto JSON con
  las claves resumen (1 frase) y dias: un arreglo con un objeto por día con la clave paradas,
  un arreglo de { id, hora, consejo } con el consejo en máximo 12 palabras).
- Crea el archivo js/ia.js con el mismo patrón que data.js: const IA con
  async armarRuta(dias, intereses, lugares) que, si CONFIG.ia.clave tiene valor, llama con
  fetch a https://generativelanguage.googleapis.com/v1beta/models/ + CONFIG.ia.modelo +
  ":generateContent" (POST, cabecera "x-goog-api-key", systemInstruction = las instrucciones,
  contents = "Días: N. Intereses: ..." + los lugares en JSON con id, nombre, categoria,
  horario, latitud y longitud, y generationConfig.responseMimeType "application/json"),
  convierte la respuesta con JSON.parse y se queda solo con los días pedidos y las paradas
  cuyo id existe (máx. 4 por día). Si no hay clave o si Gemini falla, usa el modo demo: toma
  los lugares de esos intereses (o todos), ordénalos por cercanía empezando en
  CONFIG.mapa.centro (siempre el más cercano al anterior), repártelos parejo entre los días
  (máximo lugaresPorDia por día) con las horas de CONFIG.ia.horas y de consejo "Horario: …".
  Devuelve { resumen, dias, modo }. Exporta también modo().
- En #index.html carga js/ia.js antes de js/animaciones.js. Antes del testimonio agrega una
  section id="ruta" con un chip del modo, el título "Arma tu ruta", un formulario con un
  select "¿Cuántos días?" (1, 2 o 3), un fieldset "¿Qué te gusta?" con un checkbox (con
  label) por interés y el botón "Armar mi ruta", y un div id="ruta-resultado"
  (aria-live="polite"). Agrega "Arma tu ruta" al nav.
- En #cliente.js: el chip dice "🤖 Ruta con Gemini" o "🤖 Ruta (modo demo)". Al enviar, llama
  a IA.armarRuta con los lugares publicados que tengan ubicación, guarda
  Datos.crear("rutas", { dias, intereses }) y muestra el resumen y cada día ("Día 1", …)
  con su lista: hora, ícono y nombre, y el consejo. Si había clave pero respondió el modo
  demo, agrega "(Modo demo: Gemini no respondió)". Dibuja la ruta en el mapa con una
  L.polyline por día (un color por día) y agrega un botón "🗺️ Ver la ruta en el mapa" que
  baja al mapa y hace fitBounds a la ruta.
- En #panel.html, en Resumen, junto a "Lugares más visitados" (2 columnas en pantallas
  grandes), agrega una tarjeta "🧭 Lo que más piden" con un chip id="rutas-total" y un div
  id="intereses". En #panel.js, con Datos.listar("rutas"), muestra una barra por interés con
  cuántas rutas lo pidieron y "En promedio planean X días".
- Usa Util.seguro(). Estilos en #cliente.css y #panel.css con las variables de base.css.
Cambia SOLO esos archivos. Al final lista los archivos cambiados y cómo probarlo.
```

**✅ Comprueba (modo demo):** `index.html` → **F5** → menú **Arma tu ruta**. El chip dice **"(modo demo)"**. Elige **2 días**, marca **Iglesias** y **Gastronomía** → **Armar mi ruta**. Aparecen **Día 1** y **Día 2** con horas. Pulsa **🗺️ Ver la ruta en el mapa**: se ve la línea que une los lugares.

**✋ A mano (conectar Gemini, con el profesor):**
1. El **profesor** entra a **aistudio.google.com** con su cuenta de Google → **Get API key** → **Create API key** → copia la clave.
2. Pégala en `js/config.js`, en `ia` → `clave: ""`. Guarda con `Ctrl + S`.

**✅ Comprueba (con Gemini):** **F5** → el chip dice **"🤖 Ruta con Gemini"**. Arma una ruta de **2 días**: cada parada trae un **consejo** propio y **todos los lugares son de su app**. En `panel.html` → **Resumen** → **F5**, **"Lo que más piden"** muestra los intereses que marcaste.

---

## Paso 9 · 🚀 Reto libre
Elijan una idea y **escriban su propio prompt** para Copilot. Debe tener: **archivos con `#`**, **"Cambia SOLO esos archivos"**, **todo lo que debe hacer** y **"Al final lista los archivos cambiados y cómo probarlo."**

| Idea | Archivos |
|---|---|
| 📍 Botón "¿Qué hay cerca de mí?" que use el GPS y ordene los lugares por distancia | `#index.html` `#cliente.js` |
| 💾 Guardar la última ruta armada para verla otra vez al volver (localStorage) | `#cliente.js` |
| 🖨️ Botón "Imprimir mi ruta" con una hoja limpia (CSS `@media print`) | `#cliente.css` `#cliente.js` |
| 🎉 Sección "Semana Santa en Huamanga": lugares y fechas especiales | `#index.html` `#config.js` |

**✅ Comprueba:** funciona y pueden explicar qué archivo cambió y por qué.

---

## 🚑 Si algo sale mal
| Problema | Qué hacer |
|---|---|
| Copilot cambió algo que no pedí | **Undo** y pega otra vez el prompt |
| Página en blanco o un botón no hace nada | **F12** → **Console** → copia el error rojo → pega en Copilot: `Tengo este error en la consola. Diagnostica la causa y aplica la corrección mínima.` y el error debajo |
| "El mapa necesita internet" o el mapa sale gris | Leaflet y los mapas se descargan de internet. Revisa la conexión y pulsa **F5** |
| El mapa del panel sale cortado | Cambia de vista y vuelve a **🗺️ Ubicar en el mapa** (necesita `invalidateSize()`) |
| Un lugar no sale en el mapa | No tiene latitud y longitud. Ubícalo en **🗺️ Ubicar en el mapa** |
| La ruta sale con "(Modo demo: Gemini no respondió)" | Revisa la clave en `ia.clave`. Si el error dice que el modelo no existe, cambia `modelo` por uno de aistudio.google.com. Si se agotó el límite, espera un minuto |
| Quiero empezar el pasaporte de cero | **F12** → **Application** → **Local Storage** → borra `loslicenciados_sellos` |
| Aviso "⚠️ Supabase · …" | Revisa la URL y la clave de `supabase` en `js/config.js` y que ejecutaste **todo** `tablas.sql` |
| Siguen los productos de la plantilla | Panel → **Configuración** → **Restablecer datos** |
