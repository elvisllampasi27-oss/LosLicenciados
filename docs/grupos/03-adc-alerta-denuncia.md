# 🚨 Grupo 03 · A.D.C · Alerta & Denuncia Ciudadana
**Denuncias 100 % anónimas y alertas de desastres, con ubicación, para barrios más seguros.**
I.E. "Los Licenciados" · 5.º B · Servicio Social IS-480 UNSCH

| Partes | Módulo de datos | Funciones propias de su app |
|---|---|---|
| Sitio + panel | 📍 Reportes de delitos y desastres | **F1** 🕵️ Reporte anónimo con ubicación · **F2** 🗺️ Ver en mapa · **F3** 📊 Reportes por tipo |

**Reglas del día:** copia los prompts desde **`docs/grupos/03-adc-alerta-denuncia.md`** en VS Code (esta hoja es para leer) · un prompt → probar → recién el siguiente · revisa con `Ctrl + Shift + G` (rojo = antes, verde = después) antes de **Keep** · cero datos personales reales · Copilot gratis = 50 mensajes al mes (hoy usarán 7) · tiempo total: 68 min.

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
Usaremos sitio y panel. El módulo son los Reportes (tabla "reportes") con estos 6 campos:
titulo | Título | text | | sí | titulo
tipo | Tipo | select | Delito, Vandalismo, Huaico, Sismo, Inundación | sí | categoria
descripcion | Descripción | textarea | | sí | descripcion
estado | Estado | select | Recibido, En atención, Resuelto | sí | estado
latitud | Latitud | number | | no | ninguno
longitud | Longitud | number | | no | ninguno
Estado que se publica: En atención (el sitio muestra esas alertas públicas). En los ejemplos,
coordenadas aproximadas de zonas públicas de Huamanga. La app tendrá además un reporte
anónimo con ubicación GPS, un enlace "Ver en mapa" y el conteo de reportes por tipo.

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
✅ **Listo cuando:** Panel → **Configuración → Restablecer datos**, y la tabla muestra sus reportes con Tipo, Estado, Latitud y Longitud, y el sitio solo los "En atención".

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
**F1 · 🕵️ Reporte anónimo con ubicación** (10 min)
```
Agrega al sitio la función "Reporte anónimo":
- En #config.js agrega CONFIG.mapa = { latitud: "latitud", longitud: "longitud" }.
- En #index.html, antes de Contacto, agrega una section id="reportar" con un formulario SIN
  campo de nombre: título, tipo (select), descripción, el botón "📍 Usar mi ubicación", un
  texto para el estado de la ubicación y el botón "Enviar reporte anónimo". Agrega "Reportar"
  al nav.
- En #cliente.js llena el select con las opciones del campo con rol "categoria". El botón de
  ubicación usa navigator.geolocation.getCurrentPosition: si funciona, guarda latitud y
  longitud con 5 decimales y muestra "Ubicación agregada ✓"; si se niega el permiso o falla,
  muestra un mensaje claro y deja enviar sin ubicación. Al enviar, valida los campos y guarda
  con Datos.crear(CONFIG.tabla, ...) usando los nombres de los campos por rol y CONFIG.mapa,
  con el estado "Recibido". Luego limpia el formulario y avisa con
  Animaciones.aviso("Reporte enviado de forma anónima", "🕵️").
- Estilos en #cliente.css con las clases y variables de base.css.
Cambia SOLO esos 4 archivos. Al final lista los archivos cambiados y cómo probarlo.
```
✅ **Listo cuando:** pulsas 📍 y aceptas → "Ubicación agregada ✓"; al enviar, el panel muestra el reporte "Recibido" con latitud y longitud. Si niegas el permiso, ves el aviso y puedes enviar igual.
💡 En una PC sin GPS la ubicación es aproximada (sale de la red Wi-Fi). Si tarda, aparece el mensaje de error y el reporte se envía igual.

**F2 · 🗺️ Ver en mapa** (7 min)
```
Agrega "🗺️ Ver en mapa" a los reportes que tengan coordenadas:
- En #cliente.js, en cada tarjeta del catálogo, agrega un enlace "🗺️ Ver en mapa" a
  https://www.google.com/maps/search/?api=1&query= + latitud + "," + longitud.
- En #panel.js, en cada fila de la tabla, agrega en la celda de acciones un enlace de solo
  ícono 🗺️ (con aria-label "Ver en mapa") a la misma dirección.
- Lee las coordenadas con los nombres de CONFIG.mapa. Si falta alguna, no muestres el
  enlace. Ábrelo en una pestaña nueva (target="_blank" y rel="noopener") con las clases de
  base.css.
Cambia SOLO #cliente.js y #panel.js. Al final lista los archivos cambiados y cómo probarlo.
```
✅ **Listo cuando:** el enlace de una alerta abre Google Maps en su punto. Un reporte sin ubicación no muestra el enlace.

**F3 · 📊 Reportes por tipo** (8 min, si les queda tiempo)
```
En la vista Resumen de #panel.html agrega, debajo de .rejilla-resumen, una tarjeta "Reportes
por tipo" con un contenedor id="por-tipo". En #panel.js crea pintarPorTipo(): por cada
opción del campo con rol "categoria", dibuja una barra horizontal con la cantidad de reportes
y, al lado, un chip con cuántos están en "Recibido" con el texto "pendientes", resaltado con
la clase chip--alerta. Si no hay reportes, usa la clase .vacio. Llámala dentro de cargar().
Estilos en #panel.css con variables de base.css, sin librerías.
Cambia SOLO esos 3 archivos. Al final lista los archivos cambiados y cómo probarlo.
```
✅ **Listo cuando:** envías 2 reportes de Sismo desde el sitio → la barra de Sismo sube y su chip dice "2 pendientes".

## ⑤ Entender (Copilot, modo **Ask**, 5 min)
```
Explícame como mentor cómo viaja un reporte anónimo: desde que pulso 📍 y envío el formulario
hasta que aparece en el panel y, cuando cambia a "En atención", en las alertas del sitio.
Menciona #config.js, #data.js, #cliente.js y #panel.js, y por qué el navegador pide permiso
para la ubicación. Termina con 2 preguntas para comprobar que entendí.
```
✅ **Listo cuando:** el equipo responde las 2 preguntas sin mirar la pantalla.

## 🚑 Si algo sale mal
- **Copilot cambió algo que no pedí:** **Undo** y repite el prompt.
- **Página en blanco o un botón no responde:** `F12` → **Console** → copia el error rojo → en Agent escribe `Tengo este error en la consola. Diagnostica la causa y aplica la corrección mínima.` y pega el error debajo.
- **Siguen los datos de la plantilla:** Panel → **Configuración → Restablecer datos**. · **Sin mensajes de Copilot:** usa la cuenta de otro integrante.
