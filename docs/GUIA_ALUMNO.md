# 🚀 Guía del alumno — Adapta la plantilla a tu emprendimiento

**I.E. "Los Licenciados" · 5.º B · Servicio Social Universitario IS-480**

> Hoy **no empiezas de cero**: recibes un software real que ya funciona (un sitio para clientes y un panel de control) y lo conviertes en el de **tu** emprendimiento, dirigiendo a dos IA:
>
> 🧠 **Gemini o Claude = Analista** → lee tu Lean Canvas y decide qué necesita tu app.
> 🛠️ **Copilot = Ingeniero** → cambia el código siguiendo lo que decidió el Analista.

---

## 1️⃣ Consigue el proyecto (5 min)

**Opción A: con Git (recomendada)**
1. En VS Code: `Ctrl + Shift + P` → escribe **Git: Clone** → pega la URL:
   `https://github.com/elvisllampasi27-oss/LosLicenciados.git`
2. Elige una carpeta y abre el proyecto cuando VS Code lo pregunte.

**Opción B: sin Git**
1. Entra al repositorio en GitHub → botón verde **Code** → **Download ZIP**.
2. Descomprime y en VS Code: **Archivo → Abrir carpeta…**

**Prueba:** abre `index.html` con doble clic. Haz clic en **Panel ↗**. ¡Ya funciona!

---

## 2️⃣ Conoce las partes del software (10 min)

### Las dos caras del producto
| Cara | Archivo | ¿Quién la usa? |
|---|---|---|
| 🌐 **Sitio del cliente** | `index.html` | Tus clientes: ven el catálogo y te escriben |
| 🛠️ **Panel de control** | `panel.html` | Tu equipo: crea, edita y elimina datos; lee mensajes |

### Las partes por dentro
| Parte | Archivo | ¿Qué hace? | En un restaurante sería… |
|---|---|---|---|
| 🧱 Interfaz | `index.html`, `panel.html` | Lo que se **ve** | El salón |
| 🎨 Diseño | `css/base.css` | **Cómo se ve**: colores, letras, botones | La decoración |
| ⚙️ Configuración | `js/config.js` | **Qué datos** guarda tu app | La carta |
| 🗄️ Datos | `js/data.js` | **Dónde** se guardan | El almacén |
| 🧠 Lógica | `js/cliente.js`, `js/panel.js` | **Qué pasa** al hacer clic | El mozo y la cocina |
| ✨ Animaciones | `js/animaciones.js` | Movimiento: esfera, apariciones, contadores | El ambiente |

### 🔎 Explora (hazlo tú, sin IA)
- [ ] En `index.html`, pulsa **🧩 Ver partes de la página**: verás el header, nav, main, section, aside y footer.
- [ ] Abre `componentes.html`: es el catálogo de piezas que puedes pedirle a Copilot por su nombre.
- [ ] En el panel → **Configuración**, cambia el color: todo el panel cambia. Eso son las variables CSS.
- [ ] Crea un producto en el panel y búscalo en el catálogo del sitio. Envía un mensaje desde el sitio y léelo en el panel.

> 💡 **Clave:** si sabes **qué parte** quieres cambiar, sabes **qué archivo** pedirle a la IA.

---

## 3️⃣ El Analista: Gemini o Claude lee tu ficha (10 min)

1. Abre **gemini.google.com** o **claude.ai** (los dos son gratis) y adjunta tu **ficha del Lean Canvas** con el botón **+** o 📎.
2. Pega este prompt **tal cual**:

```
Actúa como analista de producto digital. Te adjunto la ficha del Lean Canvas de nuestro
emprendimiento. Vamos a adaptar una plantilla web que ya funciona y tiene dos caras:
- SITIO DEL CLIENTE: portada, beneficios (3), cómo funciona (3 pasos), catálogo con filtros,
  testimonio y formulario de contacto.
- PANEL DE CONTROL: resumen con indicadores y gráfico, una tabla para crear/editar/eliminar
  registros, y bandeja de mensajes.

Completa EXACTAMENTE este formato en Markdown, sin agregar ni quitar secciones.
Si falta información, propón algo coherente y márcalo con ⚠️.
Por privacidad, NUNCA incluyas teléfonos, DNI ni direcciones.

# Mi proyecto

## 1. Identidad
- Nombre:
- Eslogan (máx. 8 palabras; marca con *asteriscos* las 2-3 palabras a resaltar):
- Propuesta de valor (máx. 30 palabras):
- Color de acento (hex):

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

3. **Revisen en equipo.** ¿Los ⚠️ son correctos? ¿Los campos sirven para su idea? Si algo está mal, corríjanlo en el mismo chat. Ejemplo: `Quita el campo precio y agrega uno "fecha_visita" de tipo date.`
4. En VS Code abre **`mi-proyecto.md`**, borra su contenido, pega la respuesta y guarda.

✅ **Listo cuando:** `mi-proyecto.md` tiene las 4 secciones y ningún dato personal.

---

## 4️⃣ El Ingeniero: Copilot adapta el código (35 min)

**Cómo:** `Ctrl + Alt + I` → modo **Agent** → pega el prompt → revisa → **Keep** (aceptar) o **Undo** (deshacer).

> 📌 Copilot lee automáticamente las reglas del proyecto (`.github/copilot-instructions.md`), por eso los prompts son cortos.
> ⚠️ Copilot gratis = **50 mensajes al mes**. **Un prompt → probar → recién el siguiente.**

### ⚙️ Prompt 1: Configuración (lo más importante)
```
Con las secciones 1, 2 y 3 de #mi-proyecto.md, actualiza SOLO #config.js:
proyecto.nombre, partes, modulo (nombre, singular, nuevo, icono), tabla, campos con sus roles,
catalogo.soloEstado y datosEjemplo (5 registros). Mantén mensajesEjemplo.
```
✅ **Prueba:** abre `panel.html` → **Configuración → Restablecer datos**. ¿La tabla y el formulario tienen **tus** campos? ¿El catálogo del sitio muestra **tus** datos?

### 🧱 Prompt 2: Textos del sitio
```
Con las secciones 1 y 4 de #mi-proyecto.md, actualiza los textos de #index.html: <title>,
meta description, chip y <h1> de la portada (las palabras marcadas con * van dentro de
<span class="titulo-dorado">), propuesta de valor, beneficios, pasos, testimonio y datos de
contacto. Cambia SOLO textos y emojis; no toques clases, ids ni scripts.
```
✅ **Prueba:** recarga `index.html`. ¿Se ve tu emprendimiento? *(Si tu equipo no usa el sitio, salta este prompt.)*

### 🎨 Prompt 3: Identidad visual
```
Usa el color de acento de #mi-proyecto.md en #base.css: cambia SOLO --acento, --acento-fuerte,
--dorado-1 y --dorado-2 (en :root y en [data-tema="oscuro"]) para crear una paleta armónica.
Verifica contraste AA del texto oscuro sobre --acento. En #animaciones.js ajusta los colores por
defecto de la esfera (color y color2) a la nueva paleta.
```
✅ **Prueba:** ¿cambiaron los colores en el sitio, en el panel y en la esfera?

### ✨ Prompt 4: Una mejora a elección (si te sobra tiempo)
| Mejora | Prompt |
|---|---|
| 💬 **WhatsApp** | `Agrega en #index.html un botón flotante de WhatsApp (abajo a la derecha, accesible) que abra https://wa.me/51900000000 con un mensaje que incluya el nombre de CONFIG.proyecto. Estilos en #cliente.css.` |
| ❓ **Preguntas frecuentes** | `Agrega en #index.html, antes de Contacto, una sección "Preguntas frecuentes" con 4 preguntas sobre nuestro emprendimiento (#mi-proyecto.md) usando <details>/<summary>. Estilos en #cliente.css con las variables de base.css.` |
| 📥 **Exportar a Excel** | `En #panel.js y #panel.html agrega en la vista de registros un botón "Exportar CSV" que descargue los registros visibles con las columnas de CONFIG.campos (separador ; y BOM UTF-8 para Excel).` |
| 📊 **Gráfico por estado** | `En la vista Resumen de #panel.html agrega una tarjeta con barras horizontales que muestren cuántos registros hay por cada opción del campo con rol "estado". Lógica en #panel.js, sin librerías.` |
| 🔐 **Pantalla de ingreso** | `Agrega en #panel.html una pantalla de ingreso simulada (solo visual, contraseña "licenciados") que se muestre antes del panel y recuerde la sesión con funciones nuevas en #data.js. Aclara en un comentario que NO es seguridad real.` |
| 🧸 **Mascota 3D** | `Reemplaza la esfera grande de la portada de #index.html por la imagen assets/mascota.png con la clase "flotar" y un texto alternativo adecuado. Mantén las tarjetas flotantes.` *(Antes guarda tu imagen o un ícono de Fluent Emoji 3D en `assets/`.)* |

### 🤓 Prompt 5: Entender (obligatorio, en modo **Ask**)
```
Explícame como mentor cómo viaja un dato en este proyecto: desde que lleno el formulario del
panel hasta que aparece en el catálogo del sitio. Menciona qué hacen #config.js, #data.js,
#panel.js y #cliente.js en ese recorrido. Termina con 2 preguntas para comprobar que entendí.
```

---

## 🚑 Si algo sale mal

| Problema | Solución |
|---|---|
| Copilot cambió algo que no debía | **Undo** en el chat o `Ctrl + Z`. Repite el prompt agregando "cambia SOLO lo indicado". |
| Página en blanco o botones que no responden | `F12` → **Console** → copia el error rojo → en Copilot: `Tengo este error: [error]. Diagnostica la causa y aplica la corrección mínima.` |
| Siguen saliendo los datos de la plantilla | Panel → **Configuración → Restablecer datos**. |
| No cambian las fuentes | Necesitas internet: Google Fonts las descarga. |
| Se acabaron los mensajes de Copilot | Usa la cuenta de otro integrante, o pega el prompt y el archivo en Gemini o Claude. |
| Claude o Gemini dicen que llegaste al límite | Cambia a la otra IA: el prompt del Analista funciona igual en las dos. |

## ⚖️ Reglas del equipo profesional
1. **Un prompt a la vez → probar → recién el siguiente.**
2. **Revisa antes de aceptar.** El responsable del código eres tú, no la IA.
3. **Cambios pequeños, hazlos tú.** Una palabra o un color no necesitan IA.
4. **Cero datos personales reales** en la IA y en la app.
5. **No aceptes lo que no puedas explicar.**

## ✅ Checklist de salida
- [ ] `mi-proyecto.md` completo y revisado.
- [ ] `config.js` con nuestro módulo, campos y datos (Prompt 1).
- [ ] Sitio con nuestros textos (Prompt 2), si lo usamos.
- [ ] Colores propios (Prompt 3).
- [ ] Probamos el recorrido: crear en el panel → ver en el sitio → mensaje del sitio → leer en el panel.
- [ ] Se ve bien en celular (`F12` → 📱).
- [ ] Puedo explicar las partes del software y cómo viaja un dato.
