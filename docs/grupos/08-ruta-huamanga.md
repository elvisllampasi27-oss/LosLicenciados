# ⛪ Grupo 08 · Ruta Huamanga (tema asignado)
**Guía turística de Huamanga para Semana Santa y todo el año: lugares, eventos, cómo llegar y tours.**
I.E. "Los Licenciados" · 5.º B · Servicio Social IS-480 UNSCH

| Partes | Módulo de datos | Funciones propias de su app |
|---|---|---|
| Sitio + panel | 📍 Lugares y eventos de Huamanga | **F1** 🗺️ Cómo llegar · **F2** 💬 Reservar tour · **F3** 📅 Próximos eventos |

**Reglas del día:** copia los prompts desde **`docs/grupos/08-ruta-huamanga.md`** en VS Code (esta hoja es para leer) · un prompt → probar → recién el siguiente · revisa con `Ctrl + Shift + G` (rojo = antes, verde = después) antes de **Keep** · cero datos personales reales · Copilot gratis = 50 mensajes al mes (hoy usarán 7) · tiempo total: 68 min.

---

## ① Consigue el proyecto (5 min)
VS Code → `Ctrl + Shift + P` → **Git: Clone** → `https://github.com/elvisllampasi27-oss/LosLicenciados.git`. Sin Git: en GitHub, **Code → Download ZIP**, descomprime y **Archivo → Abrir carpeta…**

✅ **Listo cuando:** `index.html` abre con doble clic y el enlace **Panel ↗** funciona.

## ② El Analista: Claude o Gemini (12 min)
Su equipo no tiene ficha, así que primero la crea la IA y ustedes la revisan.

**②a · La ficha (5 min).** Abre **claude.ai** o **gemini.google.com** y pega:
```
Actúa como asesor de emprendimientos escolares. Crea la ficha Lean Canvas base de "Ruta
Huamanga", una guía turística de Huamanga para Semana Santa y todo el año, para estudiantes
de 5.º de secundaria que la presentarán como su emprendimiento. Responde en exactamente 8
líneas, una por bloque y en este orden: Idea, Problema (con una causa y una consecuencia),
Segmento de clientes, Propuesta de valor (máx. 30 palabras), Solución (catálogo de lugares
y eventos, cómo llegar y reserva de tour), Canales, Fuentes de ingreso y Métricas clave.
Marca con ⚠️ lo que supongas. No incluyas teléfonos, DNI ni direcciones.
```
**Revísenla:** ¿el problema es real en Huamanga? ¿la propuesta de valor se entiende en una lectura? ¿los ingresos son posibles para estudiantes? Si algo no les convence, pidan el cambio en el mismo chat.

✅ **Listo cuando:** el equipo aprueba las 8 líneas y no hay datos personales.

**②b · El análisis (7 min).** En el **mismo chat**, pega:
```
Actúa como analista de producto digital. Usa como ficha del Lean Canvas de nuestro
emprendimiento la que creaste arriba, con nuestras correcciones. Vamos a adaptar una plantilla web que ya funciona y tiene dos caras:
- SITIO DEL CLIENTE: portada, beneficios (3), cómo funciona (3 pasos), catálogo con filtros,
  testimonio y formulario de contacto.
- PANEL DE CONTROL: resumen con indicadores y gráfico, una tabla para crear/editar/eliminar
  registros, y bandeja de mensajes.

Tu tarea: decide qué partes, datos y textos necesita nuestra app.
Usaremos sitio y panel. El módulo son los Lugares (tabla "lugares") con estos 6 campos:
nombre | Nombre | text | | sí | titulo
categoria | Categoría | select | Iglesia, Museo, Mirador, Semana Santa, Gastronomía | sí | categoria
fecha | Fecha (solo eventos) | date | | no | ninguno
descripcion | Descripción | textarea | | sí | descripcion
latitud | Latitud | number | | sí | ninguno
longitud | Longitud | number | | sí | ninguno
No hay campo con rol estado: todos los lugares se publican (estado que se publica: ninguno).
Usa coordenadas de lugares públicos de Huamanga y marca con ⚠️ las que no hayas comprobado.
La app tendrá además "Cómo llegar" en el mapa, la reserva de tour por WhatsApp y los
próximos eventos.

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
**P1 · Configuración** (9 min)
```
Con las secciones 1, 2 y 3 de #mi-proyecto.md, actualiza SOLO #config.js:
proyecto.nombre, partes, modulo (nombre, singular, nuevo, icono), tabla, campos con sus roles,
catalogo.soloEstado y datosEjemplo (5 registros). Mantén mensajesEjemplo.
No hay campo con rol estado: deja catalogo.soloEstado como "".
```
✅ **Listo cuando:** Panel → **Configuración → Restablecer datos**, y la tabla muestra sus lugares con Categoría, Fecha, Latitud y Longitud, y el sitio los muestra todos.

**P2 · Textos del sitio** (7 min)
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
**F1 · 🗺️ Cómo llegar** (10 min)
```
En #config.js agrega CONFIG.mapa = { latitud: "latitud", longitud: "longitud" }. En
#cliente.js, en cada tarjeta del catálogo, agrega un enlace "🗺️ Cómo llegar" a
https://www.google.com/maps/search/?api=1&query= + latitud + "," + longitud, leídas con los
nombres de CONFIG.mapa. Si falta alguna, no muestres el enlace. Ábrelo en una pestaña nueva
(target="_blank" y rel="noopener") con las clases btn btn--secundario btn--sm.
Cambia SOLO #config.js y #cliente.js. Al final lista los archivos cambiados y cómo probarlo.
```
✅ **Listo cuando:** "🗺️ Cómo llegar" de un lugar abre Google Maps en ese punto de Huamanga. Comprueben 2 lugares.

**F2 · 💬 Reservar tour** (7 min)
```
En #cliente.js, en cada tarjeta del catálogo, cambia el botón "Me interesa" por un enlace
"💬 Reservar tour" con las clases btn btn--primario btn--sm, que abra en una pestaña nueva
(target="_blank" y rel="noopener") https://wa.me/51900000000?text= seguido de este mensaje
codificado con encodeURIComponent: "Hola, " + CONFIG.proyecto.nombre + ". Quiero reservar
un tour a: " + el nombre del lugar + " (" + su fecha con Util.fecha() + ")". La fecha sale
del campo de tipo date de CONFIG.campos; si el lugar no tiene fecha, omite el paréntesis.
Quita el código que ya no se use.
Cambia SOLO #cliente.js. Al final lista los archivos cambiados y cómo probarlo.
```
✅ **Listo cuando:** el botón de un evento abre WhatsApp con su nombre y su fecha correcta; el de un lugar sin fecha, solo con el nombre.

**F3 · 📅 Próximos eventos** (8 min, si les queda tiempo)
```
En #index.html, en el aside del catálogo, cambia el bloque "Lo más nuevo" por "📅 Próximos
eventos" con una lista id="proximos-eventos". En #cliente.js llénala con los lugares cuyo
campo de tipo date sea mayor o igual a Util.hoy(), ordenados por fecha, máximo 5, cada uno con
su nombre y su fecha con Util.fecha(). Si no hay, muestra "No hay eventos próximos". Quita el
código de "Lo más nuevo" que ya no se use.
Cambia SOLO #index.html y #cliente.js. Al final lista los archivos cambiados y cómo probarlo.
```
✅ **Listo cuando:** en el panel creas un evento con fecha de mañana y otro de ayer → solo el de mañana aparece en Próximos eventos.

## ⑤ Entender (Copilot, modo **Ask**, 5 min)
```
Explícame como mentor cómo se arman los enlaces "🗺️ Cómo llegar" y "💬 Reservar tour" a
partir de un lugar: qué datos usan, de dónde salen y para qué sirve encodeURIComponent.
Menciona #config.js, #data.js y #cliente.js. Termina con 2 preguntas para comprobar que
entendí.
```
✅ **Listo cuando:** el equipo responde las 2 preguntas sin mirar la pantalla.

## 🚑 Si algo sale mal
- **Copilot cambió algo que no pedí:** **Undo** y repite el prompt.
- **Página en blanco o un botón no responde:** `F12` → **Console** → copia el error rojo → en Agent escribe `Tengo este error en la consola. Diagnostica la causa y aplica la corrección mínima.` y pega el error debajo.
- **Siguen los datos de la plantilla:** Panel → **Configuración → Restablecer datos**. · **Sin mensajes de Copilot:** usa la cuenta de otro integrante.
