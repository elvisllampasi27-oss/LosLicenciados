# 🤝 Grupo 07 · Ayllu Cuida
**Compañía virtual para adultos mayores que pasan mucho tiempo solos.**
I.E. "Los Licenciados" · 5.º B · Servicio Social IS-480 UNSCH

| Partes | Módulo de datos | Funciones propias de su app |
|---|---|---|
| Sitio + panel | 🎲 Actividades (juegos, lectura, música, conversación, bienestar) | **F1** 📔 Diario de emociones · **F2** 🤝 Pedir compañía · **F3** 📊 Ánimo de la semana |

**Reglas del día:** copia los prompts desde **`docs/grupos/07-ayllu-cuida.md`** en VS Code (esta hoja es para leer) · un prompt → probar → recién el siguiente · revisa con `Ctrl + Shift + G` (rojo = antes, verde = después) antes de **Keep** · cero datos personales reales · Copilot gratis = 50 mensajes al mes (hoy usarán 7) · tiempo total: 68 min.

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
Nuestra app tendrá además un diario de emociones, un botón para pedir compañía a un
voluntario por WhatsApp y un resumen del ánimo de la semana. El módulo de datos son las
actividades e incluye un campo "fecha" de tipo date, sin rol.

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

✅ **Listo cuando:** `mi-proyecto.md` tiene las 4 secciones, el campo `fecha` de tipo date, revisaron los ⚠️ y no hay teléfonos.

## ③ El Ingeniero: la base (Copilot, modo **Agent**, `Ctrl + Alt + I`)
**P1 · Configuración** (10 min)
```
Con las secciones 1, 2 y 3 de #mi-proyecto.md, actualiza SOLO #config.js:
proyecto.nombre, partes, modulo (nombre, singular, nuevo, icono), tabla, campos con sus roles,
catalogo.soloEstado y datosEjemplo (5 registros). Mantén mensajesEjemplo.
```
✅ **Listo cuando:** Panel → **Configuración → Restablecer datos**, y la tabla muestra sus actividades con la columna Fecha.

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
**F1 · 📔 Diario de emociones** (10 min)
```
Agrega al sitio la función "Diario de emociones":
- En #config.js agrega CONFIG.diario.emociones con 4 opciones (emoji y texto): 😊 Contento,
  😌 Tranquilo, 😢 Triste y 🥺 Me siento solo/a.
- En #index.html, antes de la sección Contacto, agrega una section id="diario" con la pregunta
  "¿Cómo te sientes hoy?", un botón grande por emoción (con aria-label), una nota opcional
  (textarea con label, máximo 200 caracteres), un botón "Guardar" y una lista "Tus últimos
  registros". Agrega "Diario" al nav.
- En #cliente.js guarda con Datos.crear("diario", { emocion, nota }), donde emocion es el
  texto de la opción, y muestra los 5 más recientes con su emoji, la nota con Util.seguro()
  y Util.hace(). Si no eligió emoción, avisa.
  Si elige Triste o Me siento solo/a, muestra Animaciones.aviso("Gracias por contarnos. Un
  voluntario puede acompañarte", "🤝").
- Estilos en #cliente.css con las clases y variables de base.css; botones de 56 px como mínimo.
Cambia SOLO esos 4 archivos. Al final lista los archivos cambiados y cómo probarlo.
```
✅ **Listo cuando:** eliges 🥺, escribes una nota y guardas → sale el aviso 🤝, la nota aparece en "Tus últimos registros" y sigue ahí al recargar.

**F2 · 🤝 Pedir compañía** (7 min)
```
En #cliente.js, en cada tarjeta del catálogo, cambia el botón "Me interesa" por un enlace
"🤝 Pedir compañía" con las clases btn btn--primario btn--sm, que abra en una pestaña nueva
(target="_blank" y rel="noopener") https://wa.me/51900000000?text= seguido de este mensaje
codificado con encodeURIComponent: "Hola, " + CONFIG.proyecto.nombre + ". Quiero compañía
de un voluntario para: " + el título de la actividad + " (" + su fecha con Util.fecha() + ")".
La fecha sale del campo de tipo date de CONFIG.campos; si la actividad no tiene fecha, omite
el paréntesis. Quita el código que ya no se use.
Cambia SOLO #cliente.js. Al final lista los archivos cambiados y cómo probarlo.
```
✅ **Listo cuando:** el botón de una tarjeta abre WhatsApp con el nombre y la fecha **correcta** de esa actividad.

**F3 · 📊 Ánimo de la semana** (8 min, si les queda tiempo)
```
En la vista Resumen de #panel.html agrega, debajo de .rejilla-resumen, una tarjeta "Ánimo de
la semana" con un contenedor id="animo". En #panel.js crea pintarAnimo(): lee
Datos.listar("diario"), toma los registros de los últimos 7 días y dibuja una barra horizontal
por cada opción de CONFIG.diario.emociones (emoji, texto, cantidad y ancho proporcional);
debajo, las 3 notas más recientes con Util.seguro(). Si no hay registros, usa la clase .vacio.
Llámala dentro de cargar(). Estilos en #panel.css con variables de base.css, sin librerías.
Cambia SOLO esos 3 archivos. Al final lista los archivos cambiados y cómo probarlo.
```
✅ **Listo cuando:** registras 3 emociones en el sitio, abres el panel y las barras muestran esas cantidades.

## ⑤ Entender (Copilot, modo **Ask**, 5 min)
```
Explícame como mentor cómo viaja una emoción del diario: desde que la elijo en el sitio hasta
que aparece en "Tus últimos registros" y en el panel, si existe pintarAnimo. Menciona qué
hacen #config.js, #data.js, #cliente.js y #panel.js. Termina con 2 preguntas para comprobar
que entendí.
```
✅ **Listo cuando:** el equipo responde las 2 preguntas sin mirar la pantalla.

## 🚑 Si algo sale mal
- **Copilot cambió algo que no pedí:** **Undo** y repite el prompt.
- **Página en blanco o un botón no responde:** `F12` → **Console** → copia el error rojo → en Agent escribe `Tengo este error en la consola. Diagnostica la causa y aplica la corrección mínima.` y pega el error debajo.
- **Siguen los datos de la plantilla:** Panel → **Configuración → Restablecer datos**. · **Sin mensajes de Copilot:** usa la cuenta de otro integrante.
