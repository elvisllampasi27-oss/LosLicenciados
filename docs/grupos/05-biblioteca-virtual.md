# 📚 Grupo 05 · Biblioteca virtual
**Materiales de estudio confiables y ordenados por área para preparar el examen de admisión de la UNSCH.**
I.E. "Los Licenciados" · 5.º B · Servicio Social IS-480 UNSCH

> **Su diferencia con el grupo 04:** aquí se **publican materiales para todos** los postulantes. No es un plan de estudio personal.

| Partes | Módulo de datos | Funciones propias de su app |
|---|---|---|
| Sitio + panel | 📘 Materiales por área | **F1** 📥 Abrir material · **F2** ✍️ Práctica rápida · **F3** 🔥 Más vistos |

**Reglas del día:** copia los prompts desde **`docs/grupos/05-biblioteca-virtual.md`** en VS Code (esta hoja es para leer) · un prompt → probar → recién el siguiente · revisa con `Ctrl + Shift + G` (rojo = antes, verde = después) antes de **Keep** · cero datos personales reales · Copilot gratis = 50 mensajes al mes (hoy usarán 7) · tiempo total: 68 min.

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
Usaremos sitio y panel. El módulo son los Materiales (tabla "materiales") con estos 6 campos:
titulo | Título | text | | sí | titulo
area | Área | select | Matemática, Comunicación, Ciencias, Humanidades | sí | categoria
descripcion | Descripción | textarea | | no | descripcion
enlace | Enlace (https://) | text | | sí | ninguno
estado | Estado | select | Publicado, Borrador | sí | estado
icono | Ícono (emoji) | text | | no | icono
Estado que se publica: Publicado. Los enlaces de ejemplo empiezan con https:// y son de
páginas educativas públicas; marca con ⚠️ los que no hayas comprobado. La app tendrá además
un botón para abrir cada material, una práctica rápida por área y los más vistos.

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
✅ **Listo cuando:** Panel → **Configuración → Restablecer datos**, y la tabla muestra sus materiales con Área, Enlace y Estado, y el sitio solo los Publicados.

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
**F1 · 📥 Abrir material** (10 min)
```
En #config.js agrega CONFIG.biblioteca = { campoEnlace: "enlace" }. En #cliente.js, en cada
tarjeta del catálogo, cambia el botón "Me interesa" por un enlace "📥 Abrir material" con
las clases btn btn--primario btn--sm, que abra en una pestaña nueva (target="_blank" y
rel="noopener") el valor del campo CONFIG.biblioteca.campoEnlace, SOLO si empieza con
"https://". Si no, muestra el texto "Enlace no disponible" sin enlace. Escapa el enlace con
Util.seguro(). Quita el código que ya no se use.
Cambia SOLO #config.js y #cliente.js. Al final lista los archivos cambiados y cómo probarlo.
```
✅ **Listo cuando:** un material con https:// se abre en otra pestaña. Si en el panel cambias su enlace a "www.ejemplo.com", la tarjeta dice "Enlace no disponible".

**F2 · ✍️ Práctica rápida** (7 min)
```
Agrega al sitio la "Práctica rápida":
- En #config.js agrega CONFIG.practica con 3 preguntas por cada área del campo con rol
  "categoria", de nivel admisión UNSCH: texto, 4 opciones, la opción correcta y una
  explicación de una línea.
- En #index.html, antes de Contacto, agrega una section id="practica" con un select con label
  para elegir el área y un contenedor para las preguntas. Agrega "Práctica" al nav.
- En #cliente.js, al elegir un área, muestra sus 3 preguntas con las opciones como botones.
  Al hacer clic, corrige al instante: marca la opción en verde (--exito) o rojo (--alerta),
  muestra la explicación y bloquea esa pregunta. Al terminar las 3, muestra "Acertaste 2 de 3".
- Estilos en #cliente.css con las clases y variables de base.css.
Cambia SOLO esos 4 archivos. Al final lista los archivos cambiados y cómo probarlo.
```
✅ **Listo cuando:** eliges un área y respondes las 3 → ves verde o rojo y la explicación al instante, y el total al final. Revisen que las respuestas sean correctas.

**F3 · 🔥 Más vistos** (8 min, si les queda tiempo)
```
Cuenta los materiales más vistos:
- En #cliente.js, al hacer clic en "📥 Abrir material", guarda con Datos.crear("vistas",
  { titulo }) el título de ese material, sin impedir que se abra.
- En la vista Resumen de #panel.html agrega una tarjeta "Más vistos" con un contenedor
  id="mas-vistos". En #panel.js crea pintarMasVistos(): lee Datos.listar("vistas"), cuenta
  por título y muestra el top 5 con su número de vistas, de mayor a menor. Si no hay vistas,
  usa la clase .vacio. Llámala dentro de cargar(). Estilos en #panel.css.
Cambia SOLO esos 4 archivos. Al final lista los archivos cambiados y cómo probarlo.
```
✅ **Listo cuando:** abres 3 veces un material y 1 vez otro → el panel los muestra en ese orden con 3 y 1 vistas.

## ⑤ Entender (Copilot, modo **Ask**, 5 min)
```
Explícame como mentor qué pasa cuando hago clic en "📥 Abrir material": cómo se arma el
enlace, por qué revisamos que empiece con https:// y cómo se cuenta la vista hasta llegar al
panel. Menciona #config.js, #data.js, #cliente.js y #panel.js. Termina con 2 preguntas para
comprobar que entendí.
```
✅ **Listo cuando:** el equipo responde las 2 preguntas sin mirar la pantalla.

## 🚑 Si algo sale mal
- **Copilot cambió algo que no pedí:** **Undo** y repite el prompt.
- **Página en blanco o un botón no responde:** `F12` → **Console** → copia el error rojo → en Agent escribe `Tengo este error en la consola. Diagnostica la causa y aplica la corrección mínima.` y pega el error debajo.
- **Siguen los datos de la plantilla:** Panel → **Configuración → Restablecer datos**. · **Sin mensajes de Copilot:** usa la cuenta de otro integrante.
