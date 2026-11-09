# 🎤 Guion docente — Sesión 07
## "Adaptamos un software real a nuestro emprendimiento con IA"

**I.E. "Los Licenciados" · 5.º B · Servicio Social Universitario IS-480 · 90 min**

| | |
|---|---|
| **Propósito** | Reconocer las partes de un software (interfaz, diseño, configuración, datos y lógica) y modificarlas dirigiendo a dos IA con un método profesional: **Analista → Ingeniero → prueba**. |
| **Producto** | La plantilla `LosLicenciados` convertida en el software de su emprendimiento, con su sitio y/o su panel funcionando con datos propios. |
| **Material** | Repositorio en GitHub, fichas del Lean Canvas (Sesión 03) en digital, proyector, `docs/GUIA_ALUMNO.md`. |
| **Fuera de esta sesión** | Base de datos en la nube (Supabase), IA dentro de la app y app móvil. Solo se mencionan. |

---

## ✅ Antes de la clase
- [ ] En **una PC del laboratorio**: clonar o descargar el repo, abrir `index.html` con doble clic, entrar al panel y probar Copilot.
- [ ] Revisar si las PC tienen **Git**. Si no lo tienen, usar el plan B: **Code → Download ZIP**.
- [ ] Cada equipo con al menos **1 cuenta de GitHub** (Copilot) y **1 de Gmail** (Gemini).
- [ ] Tener la **ficha de cada equipo** en `.docx` o PDF a mano.
- [ ] Preparar tu **versión profesional de Ayllu Cuida** para la comparativa.
- [ ] Equipo de la **ficha 8** (vacía): traer su idea en 3 líneas o integrarse a otro equipo.

---

## ⏱️ 0–5 · Apertura
**🎤** *"En el mundo real casi nadie programa desde cero: se parte de una base que funciona y se adapta. Hoy van a hacer eso, dirigiendo a dos IA como el jefe de un equipo de software."*

**📽️ Demo de 1 minuto:**
1. Crea un producto en el **panel**.
2. Muéstralo en el **catálogo del sitio**.
3. Envía un mensaje desde el sitio y léelo en el panel.

*"Esto es un software completo, con su cara para clientes y su cara para el equipo. Al final de la clase será el de ustedes."*

---

## ⏱️ 5–20 · Las partes del software
1. **Partes de una página** (3 min): en `index.html` pulsa **🧩 Ver partes de la página**.
   *"Header, nav, main, section, aside y footer: son las mismas partes que ven en los periódicos digitales."*
2. **Partes del software** (5 min): proyecta la tabla de la sección 2 de la guía y abre cada archivo, usando la analogía del restaurante.
3. **Demo "wow"** (4 min):
   - Panel → **Configuración** → cambia el color: *"Una variable cambia todo el panel."*
   - En `config.js` cambia `nombre: "Productos"` por `"Servicios"` y recarga: *"No toqué el HTML. La **configuración** decide qué muestra el software."*
   - Deshaz los cambios.
4. **Mirada al futuro** (1 min): *"Si mañana los datos van a internet, ¿qué archivo cambia?"* → `data.js`. *"Solo uno. Eso es diseñar bien."*

**🧑‍🎓 Alumnos:** pasos 1 y 2 de la guía (conseguir el proyecto y explorar).

---

## ⏱️ 20–30 · El Analista (Gemini)
**🎤** *"El Analista lee su Lean Canvas y decide qué necesita su app: si usan sitio, panel o ambos, y qué datos guardan. No programa: **decide**."*

**📽️** Señala en el prompt sus partes: **rol**, **contexto**, **formato exacto** y **privacidad** (las fichas tienen celulares de los alumnos).

**👀 Revisar con cada equipo:**
- [ ] ¿Sin teléfonos ni DNI?
- [ ] ¿Las **partes** tienen sentido? (Planly → solo panel; Raíces locales → sobre todo sitio; A.D.C → ambos)
- [ ] ¿Hay **un solo campo con rol titulo** y son 6 campos o menos?
- [ ] ¿Revisaron los ⚠️? *"Ustedes son los jefes: si la IA se equivocó, corríjanla."*

---

## ⏱️ 30–65 · El Ingeniero (Copilot)
**🎤** *"Copilot ya conoce las reglas del proyecto, porque están en `.github/copilot-instructions.md`. Por eso los prompts son cortos. Regla de oro: **un prompt, probar, recién el siguiente**."*

**📽️ Haz el Prompt 1 en vivo** con Ayllu Cuida y muestra cómo se revisa un cambio y cómo se usan **Keep** y **Undo**.

| Tiempo | Prompt | Verificar |
|---|---|---|
| 30–42 | **1 · Configuración** | Restablecer datos → ¿la tabla tiene sus campos? ¿el catálogo muestra sus datos? |
| 42–52 | **2 · Textos del sitio** | ¿El sitio habla de su emprendimiento? |
| 52–58 | **3 · Identidad visual** | ¿Colores propios en sitio, panel y esfera? |
| 58–65 | **4 · Mejora a elección** | Solo los equipos que terminaron. |

**🎤 Antes del Prompt 1:** *"¿Qué parte decide qué datos guarda la app?"* → `config.js`. *"Saber qué parte cambiar es saber pedirle a la IA."*

**🚑 Problemas esperados**
| Síntoma | Acción |
|---|---|
| Siguen los productos de ejemplo | Panel → Configuración → **Restablecer datos** |
| Página en blanco | `F12` → error rojo → prompt de diagnóstico. Lo más común: una coma faltante en `config.js` |
| Copilot tocó archivos de más | **Undo** → repetir. Momento para explicar por qué los prompts dicen "SOLO" |
| Equipo lento | Prioridad: **Prompt 1**. Los textos se pueden cambiar a mano |
| Equipo rápido | Mejoras "Pantalla de ingreso" o "Exportar CSV" |

---

## ⏱️ 65–75 · Comparativa
**📽️** Muestra tu versión profesional de **Ayllu Cuida** y **los prompts que usaste**.

**🎤** *"Es la misma plantilla. La diferencia no es magia: es **más contexto y más precisión** al pedir."*

Luego 2 o 3 equipos muestran en 1 minuto: emprendimiento → qué partes usan → qué guarda su app → qué mejora agregaron.

> ⚠️ El objetivo es inspirar, no desanimar: *"Están a 2 o 3 prompts de esto."*

---

## ⏱️ 75–85 · Comprensión
**🧑‍🎓** Prompt 5 en modo **Ask** (cómo viaja un dato).

**🎤 Preguntas rápidas:**
1. *¿Qué archivo cambio para que la app guarde también la "talla"?* → `config.js`
2. *¿Y para cambiar el color de los botones?* → `css/base.css`
3. *¿Qué archivo es el único que guarda datos?* → `data.js`
4. *¿Qué parte de la página es el menú lateral?* → `aside`
5. *¿Por qué no le pedimos a la IA "haz toda mi app" de una vez?*

---

## ⏱️ 85–90 · Cierre
**🎤** *"Hoy hicieron lo que hace un equipo real: partieron de una base, la entendieron por partes y la adaptaron con un método. La IA escribió el código, pero **ustedes decidieron qué, dónde y por qué**."*

**📋 Tarea:** completar el checklist de la guía y crear una cuenta en **supabase.com** para la próxima sesión, donde `data.js` se conectará a la nube.

---

## 📊 Evaluación rápida
| Equipo | Partes elegidas | mi-proyecto.md | Configuración | Textos | Colores | Mejora | Explica el recorrido del dato |
|---|---|---|---|---|---|---|---|
| 01 Tutor Virtual | | | | | | | |
| 02 IA Responsable | | | | | | | |
| 03 A.D.C | | | | | | | |
| 04 Planificador | | | | | | | |
| 05 Biblioteca virtual | | | | | | | |
| 06 Raíces locales | | | | | | | |
| 07 Ayllu Cuida | | | | | | | |
| 08 (por definir) | | | | | | | |
| 09 Planly | | | | | | | |
