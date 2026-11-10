# 🗓️ Grupo 04 · Plataforma de planificación para postulantes
**Un plan de estudio personalizado para postulantes a la UNSCH: qué estudiar, cuándo y qué priorizar.**
I.E. "Los Licenciados" · 5.º B · Servicio Social IS-480 UNSCH

> **Su diferencia con el grupo 05:** aquí cada postulante **planifica su propio estudio** (temas, fechas y avance). No es una biblioteca de materiales.

| Partes | Módulo de datos | Funciones propias de su app |
|---|---|---|
| Solo panel | 📚 Temas por estudiar | **F1** 🗓️ Generar mi plan · **F2** 📅 Hoy y esta semana · **F3** 📊 Avance por curso |

**Reglas del día:** copia los prompts desde **`docs/grupos/04-planificador-postulantes.md`** en VS Code (esta hoja es para leer) · un prompt → probar → recién el siguiente · revisa con `Ctrl + Shift + G` (rojo = antes, verde = después) antes de **Keep** · cero datos personales reales · Copilot gratis = 50 mensajes al mes (hoy usarán 7) · tiempo total: 68 min.

---

## ① Consigue el proyecto (5 min)
VS Code → `Ctrl + Shift + P` → **Git: Clone** → `https://github.com/elvisllampasi27-oss/LosLicenciados.git`. Sin Git: en GitHub, **Code → Download ZIP**, descomprime y **Archivo → Abrir carpeta…**

✅ **Listo cuando:** `index.html` y `panel.html` abren con doble clic.

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
Usaremos SOLO el panel de control (sitio del cliente: no), porque cada postulante organiza
su propio estudio. El módulo son los Temas (tabla "temas") con estos 5 campos:
tema | Tema | text | | sí | titulo
curso | Curso | select | Matemática, Comunicación, Ciencias, Humanidades | sí | categoria
fecha | Fecha de estudio | date | | no | ninguno
estado | Estado | select | Pendiente, Estudiado, Repasar | sí | estado
descripcion | Descripción | textarea | | no | descripcion
Estado que se publica: Estudiado (así sale en verde). La app tendrá además un botón
"Generar mi plan", la tarjeta "Hoy y esta semana" y el avance por curso.

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

✅ **Listo cuando:** `mi-proyecto.md` tiene las 4 secciones, los 5 campos de arriba, revisaron los ⚠️ y no hay teléfonos.

## ③ El Ingeniero: la base (Copilot, modo **Agent**, `Ctrl + Alt + I`)
**P1 · Configuración** (10 min)
```
Con las secciones 1, 2 y 3 de #mi-proyecto.md, actualiza SOLO #config.js:
proyecto.nombre, partes, modulo (nombre, singular, nuevo, icono), tabla, campos con sus roles,
catalogo.soloEstado y datosEjemplo (5 registros). Mantén mensajesEjemplo.
Deja partes.sitio en false y partes.panel en true.
```
✅ **Listo cuando:** Panel → **Configuración → Restablecer datos**, y al abrir `index.html` te lleva al panel, y la tabla muestra sus temas con Curso, Fecha y Estado.

**P2 · Textos del panel** (8 min)
```
Con la sección 1 de #mi-proyecto.md, actualiza los textos del panel. En #panel.html: <title>,
el subtítulo del Resumen ("Resumen de la actividad…"), el subtítulo de la vista de registros,
el de Mensajes y el usuario del menú lateral ("Administrador" y "Equipo 5.º B"). En #panel.js
cambia SOLO la palabra "equipo" del saludo por una que nombre a nuestro usuario.
Cambia SOLO textos y emojis; no toques clases, ids ni la lógica.
```
✅ **Listo cuando:** el Resumen saluda a su usuario y ningún subtítulo dice "tu emprendimiento" ni "Equipo 5.º B".

**P3 · Colores** (5 min)
```
Usa el color de acento de #mi-proyecto.md en #base.css: cambia SOLO --acento, --acento-fuerte,
--sobre-acento, --dorado-1 y --dorado-2 (en :root y en [data-tema="oscuro"]) para crear una
paleta armónica. Elige --sobre-acento (texto de los botones) entre #1C1206 y #FFFFFF según cuál
tenga contraste AA (4.5:1) sobre --acento, e indícame el contraste. En #animaciones.js ajusta
los colores por defecto de la esfera (color y color2) a la nueva paleta.
```
✅ **Listo cuando:** cambian los colores en el panel y la esfera, y el texto de los botones se lee bien.

## ④ El Ingeniero: sus funciones propias
**F1 · 🗓️ Generar mi plan** (10 min)
```
Agrega al panel el botón "🗓️ Generar mi plan":
- En #config.js agrega CONFIG.plan = { fechaExamen: "2027-03-07", temasPorDia: 2 } con un
  comentario: fecha de ejemplo, cámbienla por la fecha oficial del examen.
- En #panel.html agrega el botón en la cabecera de la vista de registros, junto a "Nuevo".
- En #panel.js, al pulsarlo, pide confirmación, toma los temas con estado "Pendiente" en
  orden y repártelos, CONFIG.plan.temasPorDia por día, desde Util.hoy() hasta
  CONFIG.plan.fechaExamen (Util.hoy(1) es mañana, Util.hoy(2) pasado mañana…). Guarda la
  fecha de cada tema en el campo de tipo date con Datos.actualizar, recarga con cargar() y
  avisa cuántos temas se programaron. Si no alcanzan los días, avisa cuántos quedaron sin
  fecha.
Cambia SOLO esos 3 archivos. Al final lista los archivos cambiados y cómo probarlo.
```
✅ **Listo cuando:** con 5 temas Pendientes y 2 por día, la columna Fecha muestra hoy, hoy, mañana, mañana y pasado mañana.

**F2 · 📅 Hoy y esta semana** (7 min)
```
En la vista Resumen de #panel.html agrega, debajo de .rejilla-resumen, una tarjeta "Hoy y
esta semana" con un contenedor id="semana". En #panel.js crea pintarSemana(): con el campo
de tipo date, muestra en 2 listas los temas que no están "Estudiado": "Hoy" (fecha igual a
Util.hoy()) y "Próximos 7 días" (después de hoy y hasta Util.hoy(7)), cada uno con su curso
como chip y la fecha con Util.fecha(). Si una lista está vacía, muestra un texto amable.
Llámala dentro de cargar(). Estilos en #panel.css con variables de base.css.
Cambia SOLO esos 3 archivos. Al final lista los archivos cambiados y cómo probarlo.
```
✅ **Listo cuando:** después de F1, el Resumen muestra en "Hoy" los 2 primeros temas del plan y el resto en "Próximos 7 días".

**F3 · 📊 Avance por curso** (8 min, si les queda tiempo)
```
En la vista Resumen de #panel.html agrega una tarjeta "Avance por curso" con un contenedor
id="avance". En #panel.js crea pintarAvance(): por cada opción del campo con rol
"categoria", dibuja una barra horizontal con el % de temas en estado "Estudiado" sobre el
total de ese curso y el texto "3 de 5". Si un curso no tiene temas, muestra 0 %. Llámala
dentro de cargar(). Estilos en #panel.css con variables de base.css, sin librerías.
Cambia SOLO esos 3 archivos. Al final lista los archivos cambiados y cómo probarlo.
```
✅ **Listo cuando:** marcas como "Estudiado" 1 de 2 temas de Matemática → su barra muestra 50 % y "1 de 2".

## ⑤ Entender (Copilot, modo **Ask**, 5 min)
```
Explícame como mentor qué pasa cuando pulso "Generar mi plan": cómo se eligen los temas,
cómo se calcula la fecha de cada día y cómo se guarda. Menciona #config.js, #data.js y
#panel.js, y por qué usamos Util.hoy() y no toISOString(). Termina con 2 preguntas para
comprobar que entendí.
```
✅ **Listo cuando:** el equipo responde las 2 preguntas sin mirar la pantalla.

## 🚑 Si algo sale mal
- **Copilot cambió algo que no pedí:** **Undo** y repite el prompt.
- **Página en blanco o un botón no responde:** `F12` → **Console** → copia el error rojo → en Agent escribe `Tengo este error en la consola. Diagnostica la causa y aplica la corrección mínima.` y pega el error debajo.
- **Siguen los datos de la plantilla:** Panel → **Configuración → Restablecer datos**. · **Sin mensajes de Copilot:** usa la cuenta de otro integrante.
