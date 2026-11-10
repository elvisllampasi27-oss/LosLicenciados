# Estructura común de las guías por grupo (uso docente)

Todas las guías de `docs/grupos/NN-nombre.md` tienen **las mismas secciones, en el mismo orden**. Solo cambia el contenido marcado como *propio*. Máximo **2 hojas** impresas (`pdf/`). Los alumnos **copian los prompts desde el `.md`** en VS Code; la hoja impresa es para leer.

## Secciones
| # | Sección | Igual en todas | Propio de cada grupo |
|---|---|---|---|
| — | **Encabezado** | Formato | Nombre, idea en 1 frase, partes (sitio y/o panel), módulo de datos y las funciones propias F1 a F3 |
| — | **Reglas del día** | Todo | Ruta del archivo `.md` del grupo |
| ① | **Consigue el proyecto** (5 min) | Todo | — |
| ② | **Analista** (10 min) | Prompt de `GUIA_ALUMNO.md` + línea "Tu tarea…" + dónde pegar | Bloque con **los campos exactos** del módulo y las funciones que vienen |
| ③ | **Ingeniero: la base** (P1 10 · P2 8 · P3 5 min) | P1 y P3 | P1: `partes.sitio: false` (04 y 09) o `soloEstado: ""` (08). P2: textos del panel en lugar de `index.html` (04 y 09) |
| ④ | **Ingeniero: funciones propias** (F1 10 · F2 7 · F3 8 min, opcional) | Formato del prompt | Todo |
| ⑤ | **Entender** (P5, modo Ask, 5 min) | Formato | El recorrido de un dato **de su propia función** |
| 🚑 | **Si algo sale mal** | 3 líneas | — |

Cada paso termina con **✅ Listo cuando:** y una comprobación que el alumno puede ver en pantalla.

## Presupuesto
- **Tiempo** (75 min después de la exposición): ① 5 · ② 10 · P1 10 · P2 8 · P3 5 · F1 10 · F2 7 · F3 8 · ⑤ 5 = **68 min** + 7 de margen.
- **Grupo 08 (sin ficha):** ① 5 · ②a ficha 5 · ②b análisis 7 · P1 9 · P2 7 · P3 5 · F1 10 · F2 7 · F3 8 · ⑤ 5 = **68 min**.
- **Copilot:** 7 mensajes de 50 (P1, P2, P3, F1, F2, F3, P5). El Analista y la ficha del 08 usan Claude o Gemini.

## Reglas para escribir los prompts de funciones
1. **Ningún corchete** ni dato por completar: el alumno pega el prompt tal cual. (El único `[` es el selector CSS `[data-tema="oscuro"]` del P3.)
2. Archivos con `#` y **"Cambia SOLO…"**. Un archivo nuevo se nombra sin `#` ("Crea el archivo js/ia.js"). El prompt termina con **"Al final lista los archivos cambiados y cómo probarlo."**
3. **Dónde va cada cosa:**
   - Algo dentro de **cada tarjeta del catálogo** → `cliente.js` (las tarjetas se arman ahí con los datos).
   - Algo **fijo** (una sección nueva, un bloque del aside, un botón en la portada) → `index.html`, y su lógica en `cliente.js`.
   - Algo del **panel** → `panel.html` + `panel.js` + `panel.css`. Algo en cada fila de la tabla → solo `panel.js`.
   - Una **lista de opciones o de textos** que usan el sitio y el panel → `config.js`.
4. **Datos:** siempre `Datos.*` con `await`. Una tabla nueva se crea sola con `Datos.crear("nombre", {...})`, y **Restablecer datos** también la borra.
5. **Campos:** los que tienen rol se leen con `Util.valor(registro, "rol")`. Uno sin rol se lee por el nombre que guarda `config.js` (`CONFIG.mapa.latitud`, `CONFIG.quiz.campoOpciones`…) o, si es el único de su tipo, por tipo (`tipo === "date"`). Nunca con el nombre escrito en `cliente.js` o `panel.js`.
6. **Fechas:** para mostrar, `Util.fecha(valor)` (sirve para un campo `date` y para `created_at`). Para comparar con un campo `date`, `Util.hoy()` y `Util.hoy(7)`. Nunca `toISOString()` para la fecha de hoy.
7. **Texto de datos** con `Util.seguro()` o `textContent`. Avisos con `Animaciones.aviso(texto, icono)`.
8. **Enlaces externos:** WhatsApp `https://wa.me/51900000000?text=` + `encodeURIComponent(...)`; Maps `https://www.google.com/maps/search/?api=1&query=` + coordenadas. Siempre en pestaña nueva con `rel="noopener"`.
9. **Asistentes (`js/ia.js`, grupos 01 y 02):** mismo patrón que `data.js` (`const IA` con `async responder(texto)`), modo demo por palabras clave o reglas, comentario sobre Gemini a través de Supabase y **ninguna clave de API**.
10. **Accesibilidad:** `<label>` en cada campo, `aria-label` en botones de solo emoji, clases y variables de `base.css`.
11. **Listar TODO lo que cambia:** la IA hace solo lo que se le pide.

## Prompts probados de verdad (09/11/2026)
| Grupo | Función | Resultado |
|---|---|---|
| 01 | F2 Asistente tutor (`js/ia.js`) | ✅ Palabras clave sin importar mayúsculas ni tildes; respuesta por defecto; texto insertado sin HTML |
| 03 | F1 Reporte anónimo con GPS | ✅ Permiso concedido y denegado, con doble clic (`file://`) y con Live Server; sin campo de nombre |
| 06 | F1 Carrito + F2 WhatsApp | ✅ Subtotales, total y mensaje de WhatsApp coinciden (S/ 140.50) |
