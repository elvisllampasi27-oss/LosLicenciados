# 🎓 Sesión 08 · Grupo 01 · Tutor Virtual en internet y en el celular

**Hoy:** su app sale de la computadora. La van a **publicar en internet** con su propia dirección para que cualquiera la abra desde cualquier lugar, y la van a **instalar en el celular**. El **panel se queda en su PC**: es la herramienta del equipo y no se publica (buena práctica). Además le agregan **2 funciones de celular**: **📷 Foto del ejercicio** (le toman foto al problema del cuaderno y el Tutor lo explica paso a paso) y **📶 Quiz sin internet** (practican en el micro y el puntaje se envía cuando vuelve la señal).

| Rol | Quién | Qué hace |
|---|---|---|
| 🧑‍💻 Piloto | 1 integrante (cambia en cada paso) | Pega los prompts en Copilot, en la PC del grupo |
| ☁️ Publicador | 1 integrante, en otra PC | Crea el repositorio, sube los archivos (sin el panel) y publica |
| 📱 Probadores | Todos los demás, con su celular | Prueban cada función en su celular y avisan qué falla |

**Cómo usar esta guía:**
- **🛠️ Pega en Copilot** → en VS Code: `Ctrl + Alt + I` → modo **Agent** → pega → **Enter** → al terminar, **Keep**.
- **✋ A mano** → lo haces tú.
- **✅ Comprueba** → hazlo antes de pasar al siguiente paso.
- **F5** = recargar la página.

> ⚠️ **Es una prueba.** Su app queda pública en internet un día. No pongan datos reales de personas.

---

## Paso 1 · ☁️ Crear su repositorio (Publicador, mientras el Piloto sigue)
**✋ A mano:**
1. Entra a **github.com** con la cuenta del grupo → botón **+** (arriba a la derecha) → **New repository**.
2. **Repository name:** `tutor-virtual`. Deja **Public**. No marques nada más → **Create repository**.
3. Deja esa pestaña abierta: en el paso 6 suben los archivos.

**✅ Comprueba:** tienen un repositorio vacío llamado `tutor-virtual`.

---

## Paso 2 · 🏠 El panel se queda en su PC (Piloto)
Lo que se publica es **el sitio** (`index.html`). El **panel** (`panel.html`) solo lo usa el equipo desde su PC, con doble clic, y como los dos usan el mismo Supabase, lo que guardan en el panel aparece en el sitio publicado.

**🛠️ Pega en Copilot:**
```
El panel ya no se publicará en internet: solo se usa desde la PC del equipo.
En #index.html quita todos los enlaces a panel.html (el botón "Panel ↗" del menú y
cualquier otro). En #cliente.js quita el código que solo servía para esos enlaces, si lo
hay. No cambies panel.html.
Cambia SOLO esos 2 archivos. Al final lista los archivos cambiados y cómo probarlo.
```

**✅ Comprueba:**
1. `index.html` → **F5**: el menú ya **no** tiene "Panel".
2. `panel.html` con doble clic sigue abriendo el panel como siempre.

> 💡 **Para pensar:** ¿por qué es mejor no publicar el panel? (Quien tenga la dirección podría cambiar o borrar sus datos. La herramienta del equipo se queda en el equipo.)

---

## Paso 3 · 📱 App instalable (Piloto)
**🛠️ Pega en Copilot:**
```
Convierte el proyecto en una app instalable (PWA):
- Crea manifest.json (junto a index.html) con: name = CONFIG.proyecto.nombre de #config.js,
  short_name de máximo 12 letras, description de 1 frase, lang "es-PE", start_url
  "./index.html", scope "./", display "standalone", background_color = --fondo y
  theme_color = --acento de #base.css (en hex), e icons: img/icono-192.png (192x192,
  purpose "any"), img/icono-512.png (512x512, purpose "any") e img/icono-512.png
  (512x512, purpose "maskable").
- Crea sw.js (junto a index.html), un service worker con una constante VERSION = "app-v1" y
  la lista de los archivos del SITIO (index.html, base.css, cliente.css, config.js, data.js,
  animaciones.js, cliente.js, ia.js, instalar.js, manifest e íconos; NO el panel). En
  install los guarda en la caché (si uno falla, que no se caiga la instalación) y llama a
  skipWaiting; en activate borra las cachés de otras versiones y llama a clients.claim; en
  fetch, solo para pedidos GET del mismo origen: primero internet (y guarda la copia), y si
  no hay internet, la copia guardada (o index.html). Lo de otros dominios (Supabase, IA,
  librerías, fuentes) NO se intercepta.
- Crea js/instalar.js: registra sw.js solo si existe navigator.serviceWorker y la página se
  abrió con http o https (con doble clic no funciona y no debe dar error). Escucha
  beforeinstallprompt: guarda el evento y muestra el botón #boton-instalar; al pulsarlo,
  llama a prompt() y luego lo vuelve a ocultar. En appinstalled muestra el aviso
  "¡App instalada!".
- En #index.html agrega en el <head> <link rel="manifest" href="manifest.json"> y
  <link rel="apple-touch-icon" href="img/icono-192.png">, carga js/instalar.js después del
  último script, y agrega, antes del botón "Empezar", un botón
  class="btn btn--secundario btn--sm" id="boton-instalar" hidden con el texto
  "📲 Instalar app".
- Crea iconos.html (junto a index.html), una página que usa css/base.css y js/config.js:
  un campo "Emoji del ícono" (con label) que empieza con CONFIG.modulo.icono, dos canvas
  de 512 y 192 px que dibujan el fondo completo con el color --acento y el emoji grande al
  centro (fuente "Segoe UI Emoji"), se redibujan al cambiar el emoji, y dos botones que
  descargan icono-512.png e icono-192.png.
Crea SOLO esos archivos y cambia SOLO #index.html. Al final lista los archivos y cómo
probarlo.
```

**✋ A mano (los íconos):**
1. En la carpeta del proyecto crea una carpeta nueva llamada **`img`**.
2. Abre `iconos.html` con doble clic y escribe el emoji **🎓** (o el que elijan).
3. Pulsa **⬇ icono-512.png** y **⬇ icono-192.png**. Se guardan en **Descargas**: muévelos a la carpeta **`img`**.

**✅ Comprueba:** en la carpeta están `manifest.json`, `sw.js`, `iconos.html`, `js/instalar.js` e `img/` con los **2 íconos**. `index.html` con doble clic sigue funcionando.

---

## Paso 4 · 📷 Foto del ejercicio (Piloto)
**🛠️ Pega en Copilot:**
```
Agrega al Tutor la opción de mandar una foto del ejercicio:
- En #index.html, en el formulario del Tutor, junto al botón de enviar, agrega un botón
  "📷" (aria-label "Tomar foto del ejercicio") y un <input type="file" accept="image/*"
  capture="environment" hidden> que se abre al pulsarlo.
- En #cliente.js: al elegir la foto, redúcela con un canvas a máximo 1024 px de lado y
  conviértela a JPEG (calidad 0.8) en base64. Muéstrala como miniatura en la burbuja del
  alumno y envíala al Tutor junto con el texto escrito (o "Explícame este ejercicio paso a
  paso" si no escribió nada). En el historial de la conversación guarda solo el texto.
- En #ia.js: la función que responde recibe también una imagen opcional { mimeType, data }
  y, si hay, agrega a las parts del mensaje del usuario
  { inline_data: { mime_type, data } } además del texto. En modo demo responde: "En modo
  demo no puedo leer fotos. Escribe el ejercicio y te ayudo." Las fórmulas de la respuesta
  se dibujan con KaTeX como las demás.
- No guardes la foto en ningún lado (ni en Supabase ni en el navegador).
Cambia SOLO esos 3 archivos. Al final lista los archivos cambiados y cómo probarlo.
```

**✋ A mano:** recuerden fotografiar **solo el ejercicio**: nada de caras, nombres ni datos personales.

**✅ Comprueba (en la PC):** pulsa **📷**: se abre el selector de archivos. Elige una foto de un ejercicio escrito (por ejemplo `2x + 5 = 13`). Aparece la miniatura y el Tutor responde **paso a paso, con las fórmulas dibujadas**. Sin clave de Gemini, dice que en modo demo no puede leer fotos.

---

## Paso 5 · 📶 Quiz sin internet (Piloto)
**🛠️ Pega en Copilot:**
```
Haz que el quiz funcione sin internet:
- En #data.js:
  · En Datos.listar, cuando la nube responde, guarda una copia en localStorage
    ("loslicenciados_copia_" + tabla); si no hay internet (falla el fetch), devuelve esa
    copia sin mostrar el aviso de error.
  · Agrega a Datos guardarPendiente(tabla, datos), que agrega el registro a una lista en
    localStorage ("loslicenciados_pendientes"), y enviarPendientes(), que crea en la nube
    cada pendiente con Datos.crear, quita los que se enviaron y devuelve cuántos envió.
- En #cliente.js: al guardar el resultado del quiz, si navigator.onLine es false (o si
  Datos.crear falla), usa Datos.guardarPendiente y muestra el aviso "Sin internet: tu
  puntaje se enviará cuando vuelva la señal". Al cargar la página y en el evento "online",
  llama a Datos.enviarPendientes() y, si envió alguno, muestra "Se enviaron N puntajes
  guardados".
- En #sw.js: guarda también en la caché los archivos de KaTeX de cdn.jsdelivr.net (para
  ellos: primero la caché y, si no está, internet), para que las fórmulas se vean sin
  internet. Sube VERSION a "app-v2".
Cambia SOLO esos 3 archivos. Al final lista los archivos cambiados y cómo probarlo.
```

**✅ Comprueba (en la PC):** abre `index.html` una vez con internet. **F12** → pestaña **Network** → **Offline**. Haz el quiz: sale **"Sin internet: tu puntaje se enviará…"**. Vuelve a **No throttling**: sale **"Se enviaron 1 puntajes guardados"** y el puntaje aparece en el panel.

---

## Paso 6 · 🌐 Subir y publicar (Publicador)
**✋ A mano (subir):**
1. En la pestaña del repositorio `tutor-virtual` pulsa el enlace **uploading an existing file**.
2. Abre la carpeta del proyecto en el Explorador de Windows, selecciona **todo lo que hay dentro** (`Ctrl + A`) y luego **`Ctrl + clic` en `panel.html`** para quitarlo de la selección. **Arrastra** el resto a la página y espera a que suban todos.
3. Abajo escribe `Tutor Virtual` → **Commit changes**.

**✋ A mano (publicar):**
1. **Settings** → menú de la izquierda **Pages**.
2. **Build and deployment** → **Source**: **Deploy from a branch** → **Branch:** **main** y **/ (root)** → **Save**.
3. Espera 1 o 2 minutos y pulsa **F5**: arriba aparece **"Your site is live at…"**. Copia la dirección y **mándala al grupo de WhatsApp** del equipo.

**✅ Comprueba:**
1. La dirección abre el Tutor con sus preguntas, las fórmulas dibujadas, el quiz y el Tutor.
2. Agregando `panel.html` al final de la dirección sale **404**: el panel no está en internet. ✔️

---

## Paso 7 · 📲 Probar en el celular (todos)
**✋ A mano (cada Probador, en su celular Android):**
1. Abre la dirección en **Chrome** → **📲 Instalar app** (o **⋮ → Instalar app**) → **Instalar**.
2. Abre la app desde su ícono **🎓** en la pantalla de inicio.
3. Prueba **📷** en el Tutor: toma una foto de un ejercicio del cuaderno.
4. Abre la app una vez con internet, pon el **modo avión** y haz el quiz. Quita el modo avión.
5. Mientras tanto, el **Piloto** abre `panel.html` en la PC del grupo.

**✅ Comprueba:**
1. La app se abre **a pantalla completa**, sin la barra de Chrome.
2. La cámara se abre y el Tutor explica el ejercicio de la foto, con fórmulas.
3. En modo avión el quiz funciona, con fórmulas, y al volver la señal sale **"Se enviaron…"**.
4. En el panel de la PC (**Progreso**) aparece ese puntaje.

## Paso 8 · 🔄 Actualizar su app publicada (Piloto + Publicador)
**✋ A mano:**
1. Cambia algo pequeño que hayan anotado los Probadores (por ejemplo, un texto).
2. En `sw.js` sube la versión: `app-v1` → `app-v2`.
3. Publicador: en el repositorio, **Add file → Upload files** → arrastra **otra vez todo** el contenido de la carpeta, **menos `panel.html`** → **Commit changes**.

**✅ Comprueba:** en 1 o 2 minutos, **F5** en la dirección muestra el cambio. En el celular, cierra la app y ábrela dos veces.

---

## Paso 9 · 🚀 Reto libre
Elijan una idea y **escriban su propio prompt** para Copilot. Debe tener: **archivos con `#`**, **"Cambia SOLO esos archivos"**, **todo lo que debe hacer** y **"Al final lista los archivos cambiados y cómo probarlo."** Después, vuelvan a publicar (paso 8).

| Idea | Archivos |
|---|---|
| 🖼️ Que el Tutor también acepte una foto de la galería (sin `capture`) | `#index.html` |
| 🔊 Botón para escuchar la explicación del Tutor en voz alta | `#cliente.js` |
| 📶 Un aviso fijo "Estás sin internet" mientras no hay señal | `#cliente.js` `#cliente.css` |
| 📤 Compartir mi puntaje del quiz con `navigator.share` | `#cliente.js` |

**✅ Comprueba:** funciona en su dirección de internet, en el celular, y pueden explicar qué archivo cambió y por qué.

---

## 🚑 Si algo sale mal
| Problema | Qué hacer |
|---|---|
| Copilot cambió algo que no pedí | **Undo** y pega otra vez el prompt |
| Página en blanco o un botón no hace nada | **F12** → **Console** → copia el error rojo → pega en Copilot: `Tengo este error en la consola. Diagnostica la causa y aplica la corrección mínima.` y el error debajo |
| 📷 no abre la cámara en la PC | Es normal: en la PC abre los archivos. La cámara se prueba en el celular |
| El Tutor dice que no puede leer fotos | Está en modo demo o la clave falló: avísale al profesor |
| La foto tarda mucho | Revisa que se reduzca a 1024 px antes de enviarla (paso 4) |
| Sin internet no salen las preguntas | Abre la app **una vez con internet** antes, para que guarde la copia |
| GitHub Pages dice 404 | Espera 2 minutos más y **F5**. Revisa que `index.html` esté en la raíz del repositorio y no dentro de otra carpeta |
| Todo quedó dentro de una carpeta `LosLicenciados/` en el repositorio | Arrastraste la carpeta en vez de su contenido. **Settings → Delete this repository**, créalo otra vez y arrastra lo que hay **dentro** |
| No aparece "Instalar app" | Abre la dirección `https://…github.io/…` (no el archivo), revisa que `img/icono-192.png` e `img/icono-512.png` estén en el repositorio y pulsa **F5** |
| La app instalada no muestra mi cambio | Sube la versión en `sw.js`, vuelve a subir los archivos y abre la app dos veces |
| Subí `panel.html` por error | En el repositorio, abre `panel.html` → **⋯ → Delete file** → **Commit changes** |
| El celular no muestra lo que guardé en el panel | Revisa que el panel use el mismo `config.js` (misma URL de Supabase) y que el estado sea el que se publica. Cierra y abre la app |
