# 📅 Sesión 08 · Grupo 04 · Planificador en internet y en el celular

**Hoy:** su app sale de la computadora. La van a **publicar en internet** con su propia dirección para que cualquiera la abra desde cualquier lugar, y la van a **instalar en el celular**. El **panel se queda en su PC**: es la herramienta del equipo y no se publica (buena práctica). Además le agregan **2 funciones de celular**: **🔔 Hoy te toca** (al abrir la app en el celular ven qué estudiar hoy y les llega un aviso) y **📅 Agendar en el calendario** (cada tema se lleva al calendario del celular con un toque).

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
2. **Repository name:** `planificador-unsch`. Deja **Public**. No marques nada más → **Create repository**.
3. Deja esa pestaña abierta: en el paso 6 suben los archivos.

**✅ Comprueba:** tienen un repositorio vacío llamado `planificador-unsch`.

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
2. Abre `iconos.html` con doble clic y escribe el emoji **📅** (o el que elijan).
3. Pulsa **⬇ icono-512.png** y **⬇ icono-192.png**. Se guardan en **Descargas**: muévelos a la carpeta **`img`**.

**✅ Comprueba:** en la carpeta están `manifest.json`, `sw.js`, `iconos.html`, `js/instalar.js` e `img/` con los **2 íconos**. `index.html` con doble clic sigue funcionando.

---

## Paso 4 · 🔔 Hoy te toca (Piloto)
El plan se arma en el panel de la PC, pero el postulante lo necesita en el celular. Esta función lo lleva al sitio.

**🛠️ Pega en Copilot:**
```
Agrega al sitio "Hoy te toca" con un aviso en el celular:
- En #index.html, después de la portada, agrega una section id="hoy" con el título
  "📅 Hoy te toca", un contenedor id="hoy-lista" con aria-live="polite" y un botón
  id="boton-recordatorio" "🔔 Activar recordatorio". Agrega "Hoy" al nav.
- En #cliente.js: lee los temas con Datos.listar(CONFIG.tabla) y muestra los que NO están
  en "Estudiado" y tienen fecha hasta Util.hoy(7), en 3 grupos: "⚠️ Atrasados" (antes de
  hoy), "Hoy" y "Esta semana", cada tema con su curso y Util.fecha(fecha). Sin temas:
  "Nada pendiente esta semana 🎉".
- El botón pide Notification.requestPermission(). Si el permiso está concedido, hay temas
  para hoy y todavía no se avisó hoy (guarda la fecha en localStorage
  "loslicenciados_aviso_dia"), muestra la notificación con
  navigator.serviceWorker.ready.then((r) => r.showNotification("Hoy te tocan N temas",
  { body: los nombres separados por coma, icon: "img/icono-192.png" })). Hazlo también al
  abrir la página. Si no hay service worker (doble clic), muestra el aviso normal de la
  página. Si el permiso está concedido, oculta el botón.
- Inserta los textos con Util.seguro(). Estilos en #cliente.css con las variables de
  base.css (atrasados con borde --alerta).
Cambia SOLO esos 3 archivos. Al final lista los archivos cambiados y cómo probarlo.
```

**✅ Comprueba (en la PC):** en el panel de la PC arma un plan (🤖 Arma mi plan con IA). En `index.html` → **F5**: la sección **📅 Hoy te toca** muestra los temas de hoy y de la semana. (La notificación se prueba en el celular, en el paso 7.)

---

## Paso 5 · 📅 Agendar en el calendario (Piloto)
**🛠️ Pega en Copilot:**
```
Agrega "Agendar" para llevar cada tema al calendario del celular:
- En #cliente.js crea enlaceCalendario(tema), que devuelve
  https://calendar.google.com/calendar/render?action=TEMPLATE con
  &text= "Estudiar: " + nombre del tema, &details= curso + " — " + detalle, y
  &dates= fecha/fecha del día siguiente en formato AAAAMMDD (evento de todo el día), todo
  con encodeURIComponent.
- En la lista de "Hoy te toca", en cada tema agrega un enlace "📅 Agendar" con
  enlaceCalendario(tema), target="_blank" y rel="noopener".
- Debajo de la lista, un botón "📤 Compartir mi plan de hoy" que, con navigator.share (o
  copiando al portapapeles si no existe), comparte "Hoy estudio: " + los temas de hoy.
Cambia SOLO #cliente.js. Al final lista los archivos cambiados y cómo probarlo.
```

**✅ Comprueba (en la PC):** en **Hoy te toca**, pulsa **📅 Agendar** en un tema: Google Calendar se abre con el evento **"Estudiar: …"** en su fecha, listo para guardar.

---

## Paso 6 · 🌐 Subir y publicar (Publicador)
**✋ A mano (subir):**
1. En la pestaña del repositorio `planificador-unsch` pulsa el enlace **uploading an existing file**.
2. Abre la carpeta del proyecto en el Explorador de Windows, selecciona **todo lo que hay dentro** (`Ctrl + A`) y luego **`Ctrl + clic` en `panel.html`** para quitarlo de la selección. **Arrastra** el resto a la página y espera a que suban todos.
3. Abajo escribe `Planificador` → **Commit changes**.

**✋ A mano (publicar):**
1. **Settings** → menú de la izquierda **Pages**.
2. **Build and deployment** → **Source**: **Deploy from a branch** → **Branch:** **main** y **/ (root)** → **Save**.
3. Espera 1 o 2 minutos y pulsa **F5**: arriba aparece **"Your site is live at…"**. Copia la dirección y **mándala al grupo de WhatsApp** del equipo.

**✅ Comprueba:**
1. La dirección abre el Planificador con la cuenta regresiva, los temas que ya dominan y el simulacro.
2. Agregando `panel.html` al final de la dirección sale **404**: el panel no está en internet. ✔️

---

## Paso 7 · 📲 Probar en el celular (todos)
**✋ A mano (cada Probador, en su celular Android):**
1. Abre la dirección en **Chrome** → **📲 Instalar app** (o **⋮ → Instalar app**) → **Instalar**.
2. Abre la app desde su ícono **📅** en la pantalla de inicio.
3. En **📅 Hoy te toca** pulsa **🔔 Activar recordatorio** → **Permitir**.
4. Cierra la app y vuelve a abrirla.
5. En un tema pulsa **📅 Agendar** → **Guardar** en el calendario.

**✅ Comprueba:**
1. La app se abre **a pantalla completa**, sin la barra de Chrome.
2. **Hoy te toca** muestra los mismos temas que el plan del panel de la PC.
3. Al permitir, llega la notificación **"Hoy te tocan N temas"** (una vez al día).
4. El tema queda guardado en la app **Calendario** del celular, en su fecha.

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
| ✅ Marcar un tema como Estudiado desde el celular | `#cliente.js` |
| ⏱️ Que el simulacro avise con vibración cuando falte 1 minuto | `#cliente.js` |
| 📅 Agendar toda la semana con un solo botón (archivo `.ics`) | `#cliente.js` |
| 🔢 Mostrar en el ícono cuántos temas faltan (`navigator.setAppBadge`) | `#cliente.js` |

**✅ Comprueba:** funciona en su dirección de internet, en el celular, y pueden explicar qué archivo cambió y por qué.

---

## 🚑 Si algo sale mal
| Problema | Qué hacer |
|---|---|
| Copilot cambió algo que no pedí | **Undo** y pega otra vez el prompt |
| Página en blanco o un botón no hace nada | **F12** → **Console** → copia el error rojo → pega en Copilot: `Tengo este error en la consola. Diagnostica la causa y aplica la corrección mínima.` y el error debajo |
| No llega la notificación | Revisa que diste **Permitir** y que la app esté abierta desde `https://…` (no con doble clic). Llega una vez al día: para probar otra vez, borra `loslicenciados_aviso_dia` (**F12 → Application → Local Storage**) |
| "Hoy te toca" sale vacío | Arma el plan en el panel de la PC y revisa que los temas tengan fecha y no estén en Estudiado |
| "Agendar" abre el calendario en la fecha equivocada | La fecha debe ir como `AAAAMMDD` y el fin es el día siguiente |
| GitHub Pages dice 404 | Espera 2 minutos más y **F5**. Revisa que `index.html` esté en la raíz del repositorio y no dentro de otra carpeta |
| Todo quedó dentro de una carpeta `LosLicenciados/` en el repositorio | Arrastraste la carpeta en vez de su contenido. **Settings → Delete this repository**, créalo otra vez y arrastra lo que hay **dentro** |
| No aparece "Instalar app" | Abre la dirección `https://…github.io/…` (no el archivo), revisa que `img/icono-192.png` e `img/icono-512.png` estén en el repositorio y pulsa **F5** |
| La app instalada no muestra mi cambio | Sube la versión en `sw.js`, vuelve a subir los archivos y abre la app dos veces |
| Subí `panel.html` por error | En el repositorio, abre `panel.html` → **⋯ → Delete file** → **Commit changes** |
| El celular no muestra lo que guardé en el panel | Revisa que el panel use el mismo `config.js` (misma URL de Supabase) y que el estado sea el que se publica. Cierra y abre la app |
