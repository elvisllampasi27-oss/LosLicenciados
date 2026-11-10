# ✅ Grupo 09 · Planly
**Organizador digital para que los estudiantes prioricen sus tareas, no olviden entregas y aprovechen su tiempo.**
I.E. "Los Licenciados" · 5.º B · Servicio Social IS-480 UNSCH

| Partes | Módulo de datos | Funciones propias de su app |
|---|---|---|
| Solo panel | 📝 Tareas | **F1** ✓ Botón "Hecha" · **F2** 📅 Agenda · **F3** 🔔 Recordatorio del día |

**Reglas del día:** copia los prompts desde **`docs/grupos/09-planly.md`** en VS Code (esta hoja es para leer) · un prompt → probar → recién el siguiente · revisa con `Ctrl + Shift + G` (rojo = antes, verde = después) antes de **Keep** · cero datos personales reales · Copilot gratis = 50 mensajes al mes (hoy usarán 7) · tiempo total: 68 min.

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
Usaremos SOLO el panel de control (sitio del cliente: no), porque el mismo estudiante
organiza sus tareas. El módulo son las Tareas (tabla "tareas") con estos 6 campos:
tarea | Tarea | text | | sí | titulo
curso | Curso | select | 5 cursos de secundaria | sí | categoria
prioridad | Prioridad | select | Alta, Media, Baja | sí | ninguno
entrega | Fecha de entrega | date | | sí | ninguno
estado | Estado | select | Pendiente, En curso, Hecha | sí | estado
detalle | Detalle | textarea | | no | descripcion
Estado que se publica: Hecha (así sale en verde). La app tendrá además un botón "✓ Hecha",
una agenda y un recordatorio de las tareas que vencen hoy.

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
Deja partes.sitio en false y partes.panel en true.
```
✅ **Listo cuando:** Panel → **Configuración → Restablecer datos**, y al abrir `index.html` te lleva al panel, y la tabla muestra sus tareas con Prioridad, Entrega y Estado.

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
**F1 · ✓ Botón "Hecha"** (10 min)
```
En #panel.js, en cada fila de la tabla, agrega en la celda de acciones un botón "✓ Hecha"
(con aria-label "Marcar como hecha") SOLO si el estado no es "Hecha". Al pulsarlo, cambia el
estado con Datos.actualizar(CONFIG.tabla, id, ...) usando el nombre del campo con rol
"estado", avisa con Animaciones.aviso("¡Tarea terminada!", "✅") y recarga con cargar().
Usa el mismo listener de clics de la tabla y las clases de base.css.
Cambia SOLO #panel.js. Al final lista los archivos cambiados y cómo probarlo.
```
✅ **Listo cuando:** pulsas "✓ Hecha" en una tarea Pendiente → su estado pasa a Hecha (verde), el botón desaparece y sigue así al recargar.

**F2 · 📅 Agenda** (7 min)
```
En la vista Resumen de #panel.html agrega, debajo de .rejilla-resumen, una tarjeta "Agenda"
con un contenedor id="agenda". En #panel.js crea pintarAgenda(): con las tareas que no están
"Hecha" y el campo de tipo date, arma 3 grupos: "Atrasadas" (entrega antes de Util.hoy()),
"Hoy" (igual a Util.hoy()) y "Esta semana" (después de hoy y hasta Util.hoy(7)). Cada grupo
con su color: --alerta, --acento y --exito; cada tarea con su curso y Util.fecha(). Si un
grupo está vacío, muestra "Nada por aquí". Llámala dentro de cargar(). Estilos en
#panel.css con variables de base.css.
Cambia SOLO esos 3 archivos. Al final lista los archivos cambiados y cómo probarlo.
```
✅ **Listo cuando:** creas una tarea que vence ayer, otra hoy y otra en 3 días → cada una sale en su grupo y color; al marcarla Hecha, desaparece.

**F3 · 🔔 Recordatorio del día** (8 min, si les queda tiempo)
```
En #panel.js, al terminar la primera carga del panel, si hay tareas que vencen hoy (campo de
tipo date igual a Util.hoy()) y no están "Hecha", muestra Animaciones.aviso con el texto
"Hoy vence: " y sus nombres separados por comas (máximo 3, y "y 2 más" si hay más), con el
ícono "🔔". Solo una vez al abrir el panel, no cada vez que se recargan los datos.
Cambia SOLO #panel.js. Al final lista los archivos cambiados y cómo probarlo.
```
✅ **Listo cuando:** con una tarea Pendiente que vence hoy, al abrir el panel aparece "🔔 Hoy vence: …". Si la marcas Hecha y recargas, ya no aparece.

## ⑤ Entender (Copilot, modo **Ask**, 5 min)
```
Explícame como mentor qué pasa cuando pulso "✓ Hecha": cómo se encuentra la tarea, cómo se
guarda el cambio y por qué se actualizan la tabla, la Agenda y los indicadores. Menciona
#config.js, #data.js y #panel.js. Termina con 2 preguntas para comprobar que entendí.
```
✅ **Listo cuando:** el equipo responde las 2 preguntas sin mirar la pantalla.

## 🚑 Si algo sale mal
- **Copilot cambió algo que no pedí:** **Undo** y repite el prompt.
- **Página en blanco o un botón no responde:** `F12` → **Console** → copia el error rojo → en Agent escribe `Tengo este error en la consola. Diagnostica la causa y aplica la corrección mínima.` y pega el error debajo.
- **Siguen los datos de la plantilla:** Panel → **Configuración → Restablecer datos**. · **Sin mensajes de Copilot:** usa la cuenta de otro integrante.
