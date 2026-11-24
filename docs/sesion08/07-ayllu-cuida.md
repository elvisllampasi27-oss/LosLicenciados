# 🌻 Sesión 08 · Grupo 07 · Ayllu Cuida en internet y en el celular

**Hoy:** su app sale de la computadora. La van a **publicar en internet** con su propia dirección para que cualquiera la abra desde cualquier lugar, y la van a **instalar en el celular**. El **panel se queda en su PC**: es la herramienta del equipo y no se publica (buena práctica). Además le agregan **2 funciones de celular**: **🎙️ Hablar con Ayllu** (dictan en vez de escribir y Ayllu responde en voz alta) y **📞 Llamar a la Línea 113** (un botón grande que abre el marcador del celular).

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
2. **Repository name:** `ayllu-cuida`. Deja **Public**. No marques nada más → **Create repository**.
3. Deja esa pestaña abierta: en el paso 6 suben los archivos.

**✅ Comprueba:** tienen un repositorio vacío llamado `ayllu-cuida`.

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
2. Abre `iconos.html` con doble clic y escribe el emoji **🌻** (o el que elijan).
3. Pulsa **⬇ icono-512.png** y **⬇ icono-192.png**. Se guardan en **Descargas**: muévelos a la carpeta **`img`**.

**✅ Comprueba:** en la carpeta están `manifest.json`, `sw.js`, `iconos.html`, `js/instalar.js` e `img/` con los **2 íconos**. `index.html` con doble clic sigue funcionando.

---

## Paso 4 · 🎙️ Hablar con Ayllu (Piloto)
**🛠️ Pega en Copilot:**
```
Agrega a la conversación con Ayllu la opción de hablar en vez de escribir:
- En #index.html, en el formulario de la conversación, junto al botón Enviar, agrega un
  botón grande "🎙️ Hablar" (mínimo 52 px de alto, aria-label "Hablar con Ayllu").
- En #cliente.js: si existe window.SpeechRecognition o window.webkitSpeechRecognition, al
  pulsar "🎙️ Hablar" empieza a escuchar en "es-PE" y el botón dice "⏹️ Escuchando…".
  Cuando la persona termina de hablar, escribe lo dicho en el campo y ENVÍA el mensaje
  solo (para los adultos mayores es más fácil). La respuesta de Ayllu se lee en voz alta
  automáticamente con la función leer() que ya existe, solo cuando el mensaje fue
  hablado. Si el navegador no puede dictar, oculta el botón. Si se niega el micrófono,
  aviso "Permita el micrófono para hablar con Ayllu".
Cambia SOLO esos 2 archivos. Al final lista los archivos cambiados y cómo probarlo.
```

**✅ Comprueba (en la PC, con Chrome o Edge):** pulsa **🎙️ Hablar** → **Permitir** el micrófono → di *"Hoy me siento un poco sola"*. El mensaje se envía solo y Ayllu **responde en voz alta**.

---

## Paso 5 · 📞 Llamar a la Línea 113 (Piloto)
**🛠️ Pega en Copilot:**
```
Agrega un botón grande para llamar a la Línea 113:
- En #config.js agrega CONFIG.llamar = { numero: "113", texto: "📞 Llamar a la Línea 113" }.
- En #cliente.js, en la caja de ayuda que muestra CONFIG.ayuda (la de las caritas tristes
  y la de la conversación), agrega debajo un enlace con forma de botón grande
  (class="btn btn--primario", mínimo 56 px de alto) con href "tel:" + CONFIG.llamar.numero
  y el texto CONFIG.llamar.texto.
- En #index.html, en la barra del modo fácil, agrega un tercer botón-enlace "📞" con href
  "tel:113" y aria-label "Llamar a la Línea 113 (salud mental)".
- Estilos en #cliente.css con las variables de base.css.
Cambia SOLO esos 3 archivos. Al final lista los archivos cambiados y cómo probarlo.
```

**✅ Comprueba (en la PC):** toca la carita **😢**: debajo de la Línea 113 aparece el botón grande **📞 Llamar a la Línea 113**. En la PC, al pulsarlo, Windows pregunta con qué app abrirlo: es normal (en el celular se prueba sin llamar).

---

## Paso 6 · 🌐 Subir y publicar (Publicador)
**✋ A mano (subir):**
1. En la pestaña del repositorio `ayllu-cuida` pulsa el enlace **uploading an existing file**.
2. Abre la carpeta del proyecto en el Explorador de Windows, selecciona **todo lo que hay dentro** (`Ctrl + A`) y luego **`Ctrl + clic` en `panel.html`** para quitarlo de la selección. **Arrastra** el resto a la página y espera a que suban todos.
3. Abajo escribe `Ayllu Cuida` → **Commit changes**.

**✋ A mano (publicar):**
1. **Settings** → menú de la izquierda **Pages**.
2. **Build and deployment** → **Source**: **Deploy from a branch** → **Branch:** **main** y **/ (root)** → **Save**.
3. Espera 1 o 2 minutos y pulsa **F5**: arriba aparece **"Your site is live at…"**. Copia la dirección y **mándala al grupo de WhatsApp** del equipo.

**✅ Comprueba:**
1. La dirección abre Ayllu Cuida con el modo fácil, las actividades, "¿Cómo se siente hoy?" y la conversación.
2. Agregando `panel.html` al final de la dirección sale **404**: el panel no está en internet. ✔️

---

## Paso 7 · 📲 Probar en el celular (todos)
**✋ A mano (cada Probador, en su celular Android):**
1. Abre la dirección en **Chrome** → **📲 Instalar app** (o **⋮ → Instalar app**) → **Instalar**.
2. Abre la app desde su ícono **🌻** en la pantalla de inicio.
3. En **Converse con Ayllu**, pulsa **🎙️ Hablar** y saluda a Ayllu.
4. Toca la carita **😢** y mira el botón **📞 Llamar a la Línea 113**. **Tócalo solo para ver que abre el marcador; no llames.**
5. Mientras tanto, el **Piloto** abre `panel.html` en la PC del grupo.

**✅ Comprueba:**
1. La app se abre **a pantalla completa**, sin la barra de Chrome.
2. Ayllu entiende lo dicho, responde y **lo lee en voz alta**.
3. El botón 📞 abre el **marcador del celular con el 113** escrito (cuelga sin llamar).
4. En el panel de la PC (**F5**) aparecen la carita y la solicitud de compañía que hicieron desde el celular.

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
| 🔆 Que la letra grande se active sola en celulares pequeños | `#cliente.js` |
| 🎙️ Elegir la carita diciendo "bien" o "triste" | `#cliente.js` |
| 📤 Compartir una actividad con la familia por WhatsApp | `#cliente.js` |
| ⏰ Recordatorio "¿Cómo se siente hoy?" al abrir la app una vez al día | `#cliente.js` |

**✅ Comprueba:** funciona en su dirección de internet, en el celular, y pueden explicar qué archivo cambió y por qué.

---

## 🚑 Si algo sale mal
| Problema | Qué hacer |
|---|---|
| Copilot cambió algo que no pedí | **Undo** y pega otra vez el prompt |
| Página en blanco o un botón no hace nada | **F12** → **Console** → copia el error rojo → pega en Copilot: `Tengo este error en la consola. Diagnostica la causa y aplica la corrección mínima.` y el error debajo |
| No aparece 🎙️ Hablar | Ese navegador no puede dictar: usa **Chrome** (en el celular) o **Edge/Chrome** en la PC |
| Ayllu no habla | Sube el volumen. La respuesta se lee sola solo cuando el mensaje fue hablado |
| El 📞 no abre el marcador | En la PC es normal. En el celular, revisa que sea un enlace `tel:113` |
| GitHub Pages dice 404 | Espera 2 minutos más y **F5**. Revisa que `index.html` esté en la raíz del repositorio y no dentro de otra carpeta |
| Todo quedó dentro de una carpeta `LosLicenciados/` en el repositorio | Arrastraste la carpeta en vez de su contenido. **Settings → Delete this repository**, créalo otra vez y arrastra lo que hay **dentro** |
| No aparece "Instalar app" | Abre la dirección `https://…github.io/…` (no el archivo), revisa que `img/icono-192.png` e `img/icono-512.png` estén en el repositorio y pulsa **F5** |
| La app instalada no muestra mi cambio | Sube la versión en `sw.js`, vuelve a subir los archivos y abre la app dos veces |
| Subí `panel.html` por error | En el repositorio, abre `panel.html` → **⋯ → Delete file** → **Commit changes** |
| El celular no muestra lo que guardé en el panel | Revisa que el panel use el mismo `config.js` (misma URL de Supabase) y que el estado sea el que se publica. Cierra y abre la app |
