# 🎤 Exposición del profesor · Sesión 07 (15 min)
## "Tu app hace algo que solo hace la tuya"

**I.E. "Los Licenciados" · 5.º B · Servicio Social IS-480 UNSCH**

> **Regla de esta exposición:** cada concepto se **ve en pantalla**. Si no se puede señalar, no entra.
> Formato: 🎤 lo que dices · 📽️ lo que muestras · ❓ pregunta al salón *(respuesta)*.

### Tabla de tiempos
| Tiempo | Bloque | Duración |
|---|---|---|
| 0:00 – 1:00 | Apertura: el problema | 1:00 |
| 1:00 – 4:00 | 1 · Las dos caras y las partes de la página | 3:00 |
| 4:00 – 5:30 | 2 · Cada parte es un archivo | 1:30 |
| 5:30 – 7:00 | 3 · Registro, campo y rol | 1:30 |
| 7:00 – 9:30 | 4 · Una función de negocio es un enlace o una regla | 2:30 |
| 9:30 – 11:30 | 5 · Dos IA, dos roles | 2:00 |
| 11:30 – 14:00 | 6 · Cómo pedirle una función a Copilot (+ privacidad) | 2:30 |
| 14:00 – 15:00 | Reparto de guías y arranque | 1:00 |

### Tener abierto antes de empezar
- [ ] `index.html` y `panel.html` del repo, con los datos de ejemplo (Panel → Configuración → Restablecer datos).
- [ ] VS Code con `js/config.js` abierto.
- [ ] `docs/GUIA_ALUMNO.md` en el paso 3 (prompt del Analista), listo para proyectar.
- [ ] Una pestaña con `https://wa.me/51900000000?text=Hola` (sin pulsar Enter todavía).
- [ ] Una pestaña con `https://www.google.com/maps/search/?api=1&query=-13.1588,-74.2239` (sin pulsar Enter).
- [ ] Las guías de grupo impresas, **boca abajo** hasta el minuto 14.

---

## ⏱️ 0:00 – 1:00 · Apertura: el problema
🎤 *"Si los 9 equipos usan la misma plantilla y solo cambian textos y colores, terminan con 9 páginas iguales con distinto nombre. Hoy cada equipo va a agregar **una función que solo tiene su app**. A.D.C va a mandar la ubicación de una denuncia. Ruta Huamanga va a reservar un tour por WhatsApp. Planly va a ordenar tareas por prioridad."*

❓ *¿Qué hace la app de su equipo que no hace la de los demás?* (Que responda un equipo, en una frase.)

---

## ⏱️ 1:00 – 4:00 · Concepto 1: las dos caras y las partes de la página
| Cara | Archivo | Quién la usa |
|---|---|---|
| Sitio del cliente | `index.html` | El público |
| Panel de control | `panel.html` | El equipo |

📽️ En el **panel**, crea un producto → en el **sitio**, aparece en el catálogo → envía un mensaje desde el sitio → léelo en el panel.

🎤 *"Lo que el equipo guarda en el panel, el público lo ve en el sitio."*

❓ *¿Planly necesita sitio para clientes?* (No: lo usa el mismo estudiante. Solo panel.)

**Partes de la página (1 min).** 📽️ En `index.html` pulsa **🧩 Ver partes de la página** y señala cada recuadro:

| Parte | Qué es | En la plantilla |
|---|---|---|
| `header` | Encabezado | Esfera, nombre y botón "Empezar" |
| `nav` | Menú | Beneficios, Cómo funciona, Catálogo, Contacto, Panel ↗ |
| `main` | Contenido principal | Todo lo que está entre el encabezado y el pie |
| `section` | Bloque | Portada, beneficios, catálogo, contacto |
| `aside` | Barra lateral | Filtros y novedades junto al catálogo |
| `footer` | Pie | Nombre y créditos del equipo |

🎤 *"Son las mismas partes que tiene cualquier periódico digital. Cuando le pidan algo a Copilot, díganle en qué parte va."*

❓ *¿Qué parte es el menú lateral?* (`aside`.)

---

## ⏱️ 4:00 – 5:30 · Concepto 2: cada parte es un archivo
📽️ Proyecta esta tabla (sin abrir los archivos):

| Quiero cambiar… | Archivo |
|---|---|
| Qué datos guarda la app | `js/config.js` |
| Los textos del sitio | `index.html` |
| Los colores | `css/base.css` |
| Qué pasa al hacer clic en el sitio | `js/cliente.js` |
| Qué pasa al hacer clic en el panel | `js/panel.js` |
| Dónde se guardan los datos | `js/data.js` (no se toca hoy) |

🎤 *"Si sabes **qué parte** quieres cambiar, sabes **qué archivo** nombrarle a la IA."*

❓ *Quiero un botón de "Reservar" en cada tarjeta del catálogo que abra WhatsApp. ¿Qué archivo?* (`cliente.js`, porque las tarjetas del catálogo se arman ahí con los datos. `index.html` solo si es un botón fijo, como uno en la portada.)

---

## ⏱️ 5:30 – 7:00 · Concepto 3: registro, campo y rol
📽️ En `config.js` señala `campos` y `datosEjemplo`, y di la tabla en voz alta:

| Palabra | Es… | En Ruta Huamanga |
|---|---|---|
| **Registro** | Una fila | "Procesión del Domingo de Ramos" |
| **Campo** | Una columna | `fecha`, `categoria`, `lugar` |
| **Rol** | Cómo se muestra | `rol: "estado"` → insignia de color y filtro |

🎤 *"Si su función necesita un dato, ese dato tiene que existir como campo."*

❓ *En A.D.C, ¿qué es un registro?* (Una denuncia o una alerta.)

---

## ⏱️ 7:00 – 9:30 · Concepto 4: una función de negocio es un enlace o una regla
🎤 *"Las funciones de hoy no necesitan magia. Casi todas son una de estas tres cosas."*

**a) Un enlace que abre otra app.** 📽️ Pulsa Enter en la pestaña de WhatsApp y luego en la de Google Maps.
- `https://wa.me/51900000000?text=Hola` → abre un chat con el mensaje ya escrito.
- `https://www.google.com/maps/search/?api=1&query=LAT,LNG` → abre el mapa en ese punto.

🎤 *"Un botón de 'Reservar' o 'Cómo llegar' es solo un enlace armado con los datos del registro."*

**b) Un dato del celular.** 🎤 *"El navegador puede dar la **ubicación GPS**, pero siempre **pide permiso** primero. Así A.D.C adjunta dónde ocurrió el hecho."*

**c) Reglas en modo demo.** 🎤 *"El Tutor y IA Responsable tendrán un asistente que hoy responde con **palabras clave**: si la pregunta dice 'fracciones', responde lo de fracciones. Todo en un solo archivo nuevo, `js/ia.js`."*

📽️ Pulsa `F12` → **Sources** y abre `config.js`.

🎤 *"Todo lo que está en la página **cualquiera lo puede ver**. Por eso una clave de IA real nunca va aquí. Va en la nube, con Supabase, en otra sesión."*

❓ *¿Por qué no pegamos la clave de Gemini en `ia.js`?* (Cualquiera la vería con F12 y la usaría.)

---

## ⏱️ 9:30 – 11:30 · Concepto 5: dos IA, dos roles
| | 🧠 Analista | 🛠️ Ingeniero |
|---|---|---|
| Herramienta | Claude o Gemini, con la **ficha `.docx` adjunta** | GitHub Copilot en VS Code |
| Qué hace | **Decide** qué necesita la app | **Construye**: cambia el código |
| Resultado | Texto que se pega en `mi-proyecto.md` | Archivos modificados |

🎤 *"Un equipo real no tiene a la misma persona decidiendo y programando. El Analista no toca el código. El Ingeniero no inventa la idea: lee `mi-proyecto.md`."*

**Dos modos de Copilot.** 📽️ Abre el chat (`Ctrl + Alt + I`) y señala el selector de modo:
- **Agent** → **cambia archivos**. Para los prompts que construyen.
- **Ask** → **solo explica**, no toca nada. Para entender (Prompt 5).

**Las 5 partes de un buen prompt.** 📽️ Proyecta el prompt del Analista y señala cada parte:

| Parte | Dónde está en el prompt del Analista |
|---|---|
| **Rol** | "Actúa como analista de producto digital." |
| **Contexto** | "Te adjunto la ficha del Lean Canvas de nuestro emprendimiento. Vamos a adaptar una plantilla web que ya funciona y tiene dos caras:" + la lista de las dos caras |
| **Tarea** | "Tu tarea: decide qué partes, datos y textos necesita nuestra app." |
| **Restricciones** | "Si falta información, propón algo coherente y márcalo con ⚠️." y "Por privacidad, NUNCA incluyas teléfonos, DNI ni direcciones." |
| **Formato** | "Responde SOLO con el formato siguiente, en Markdown, sin frases antes ni después y sin agregar ni quitar secciones." + la plantilla `# Mi proyecto` |

❓ *Quiero que Copilot me explique `data.js` sin cambiar nada. ¿Qué modo uso?* (Ask.)

---

## ⏱️ 11:30 – 14:00 · Concepto 6: cómo pedirle una función a Copilot (+ privacidad)
📽️ Proyecta un prompt de función de una guía y señala sus 4 partes:

| Parte del prompt | Ejemplo | Por qué |
|---|---|---|
| **Archivos con `#`** | `#cliente.js`, `#index.html` | Copilot no adivina dónde trabajar |
| **"SOLO"** | "cambia SOLO estos archivos" | No toca lo que ya funciona |
| **Lista completa** | botón, mensaje, formato del número… | **La IA hace solo lo que se le pide** |
| **Cómo probarlo** | "lista los archivos cambiados y cómo probarlo" | Ustedes comprueban, no la IA |

📽️ Muestra `Ctrl + Shift + G` → clic en un archivo: **rojo = antes, verde = después**. Luego **Keep** (aceptar) o **Undo** (deshacer).

🎤 *"Copilot gratis tiene **50 mensajes al mes**. Un prompt, probar y recién el siguiente. Si algo falla, no repitan el prompt: copien el error de `F12`."*

🔒 **Privacidad, en cada prompt.** 🎤 *"Ni en la IA ni en la app van teléfonos, DNI ni direcciones reales. En los enlaces de WhatsApp usamos el número de prueba `51900000000`. En A.D.C la denuncia es **anónima**: el formulario no pide nombre."*

❓ *Copilot cambió un archivo que no pedí. ¿Qué hago?* (Undo y repito el prompt con "SOLO".)
❓ *¿Qué dato de su ficha NO va a la IA?* (Los celulares de los integrantes.)

---

## ⏱️ 14:00 – 15:00 · Reparto de guías y arranque
📽️ Voltea las guías. 🎤 *"Todas tienen la misma estructura. Lo que cambia son **sus** funciones. Empiecen por arriba y no salten pasos."*

---

### ❌ Fuera de esta exposición (no se explica hoy)
Git por dentro, backend, cómo funciona un LLM por dentro, Supabase, PWA. Si preguntan: *"Sí existe. Lo vemos en la próxima sesión."*

### 🧾 Los 6 conceptos en una línea (para la pizarra)
1. **Dos caras y partes:** sitio y panel; header, nav, main, section, aside, footer.
2. **Parte = archivo:** sé qué cambiar y sabrás qué nombrar.
3. **Registro, campo y rol:** fila, columna y cómo se muestra.
4. **Función de negocio:** un enlace, un dato del celular o una regla.
5. **Dos IA, dos roles:** el Analista decide, el Ingeniero construye. Agent cambia, Ask explica.
6. **Prompt de función:** `#archivos` + SOLO + lista completa + cómo probar. Nada personal real.
