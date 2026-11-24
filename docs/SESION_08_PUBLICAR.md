# 📲 Sesión 08 · Su app en internet y en el celular

**Hoy:** su app sale de su computadora. La van a **publicar en internet** con una dirección propia (`usuario.github.io/su-app`), con el **panel protegido por usuario y contraseña**, y la van a **instalar en el celular** como una app, con su ícono en la pantalla de inicio.

| Paso | Qué logran |
|---|---|
| 1 · 🔐 Acceso al panel | El sitio ya no muestra el panel; para entrar se pide usuario y contraseña |
| 2 · 📱 App instalable | Su app tiene nombre, color e ícono de app |
| 3 · ☁️ Su propio repositorio | Su proyecto queda guardado en su cuenta de GitHub |
| 4 · 🌐 Publicar | Su app tiene una dirección en internet |
| 5 · 📲 Instalar en el celular | Su app aparece en la pantalla de inicio |
| 6 · 🔄 Actualizar | Saben cambiar algo y volver a publicarlo |

**Cómo usar esta guía:**
- **🛠️ Pega en Copilot** → en VS Code: `Ctrl + Alt + I` → modo **Agent** → pega → **Enter** → al terminar, **Keep**.
- **✋ A mano** → lo haces tú.
- **✅ Comprueba** → hazlo antes de pasar al siguiente paso.
- **F5** = recargar la página.

> ⚠️ **Es una prueba.** Su app queda pública en internet un día. No pongan datos reales de personas, y al terminar el profesor borra la clave de la IA.

---

## Paso 1 · 🔐 Acceso al panel
**🛠️ Pega en Copilot:**
```
Protege el panel con un acceso de usuario y contraseña SIMULADO (es solo para pruebas):
- En #config.js agrega, después de supabase, CONFIG.acceso = { usuario: "equipo",
  clave: "taller2026" } con un comentario que diga que es simulado y que cualquiera puede
  leerlo en este archivo.
- En #index.html quita todos los enlaces a panel.html (el botón "Panel ↗" del menú y
  cualquier otro). El panel ya no se muestra en el sitio.
- En #panel.html, justo después de <body>, agrega una <section class="acceso" id="acceso"
  aria-label="Acceso del equipo"> que tape toda la pantalla, con un formulario
  (class="tarjeta") con el título "🔐 Acceso del equipo", los campos Usuario y Contraseña
  (con label, autocomplete username y current-password), un párrafo de error con
  role="alert", el botón "Entrar" y un enlace "← Volver al sitio" a index.html. En la barra
  superior, junto a "＋ Nuevo", agrega un botón "Salir" con id="cerrar-sesion".
- En #panel.js, al inicio: si sessionStorage tiene "loslicenciados_sesion" = "activa", quita
  la pantalla de acceso; si no, pon el foco en el usuario. Al enviar el formulario, si el
  usuario y la clave son iguales a CONFIG.acceso, guarda la sesión en sessionStorage, quita
  la pantalla y muestra el aviso "Bienvenido, [usuario]"; si no, muestra "Usuario o
  contraseña incorrectos.", borra la contraseña y pon el foco en ella. "Salir" borra la
  sesión y recarga la página. (sessionStorage se usa aquí directamente: la sesión se olvida
  al cerrar la pestaña.)
- Estilos en #panel.css con las variables de base.css: la pantalla de acceso fija, encima
  de todo, con el fondo de la página y el formulario centrado (máximo 380 px).
Cambia SOLO esos 5 archivos. Al final lista los archivos cambiados y cómo probarlo.
```

**✋ A mano:** cambien el usuario y la contraseña en `js/config.js` → `acceso` por unos de su grupo. **No usen una contraseña que usen en otro lado**: cualquiera la puede leer en ese archivo.

**✅ Comprueba:**
1. `index.html` → **F5**: el menú ya **no** tiene "Panel".
2. Abre `panel.html`: aparece **🔐 Acceso del equipo**. Prueba una contraseña mala: dice **"Usuario o contraseña incorrectos."**
3. Entra con la buena: aparece el panel. **F5**: sigue abierto. **Salir**: vuelve a pedir acceso.

> 💡 **Para pensar:** ¿por qué esto **no** es seguridad de verdad? (La contraseña está escrita en `config.js` y cualquiera puede verla con **F12**. En una app real se usa un login con servidor, como **Supabase Auth**.)

---

## Paso 2 · 📱 App instalable
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
  la lista de los archivos propios del proyecto (html, css, js, manifest e íconos). En
  install los guarda en la caché (si uno falla, que no se caiga la instalación) y llama a
  skipWaiting; en activate borra las cachés de otras versiones y llama a clients.claim; en
  fetch, solo para pedidos GET del mismo origen: primero internet (y guarda la copia), y si
  no hay internet, la copia guardada (o index.html). Lo de otros dominios (Supabase, IA,
  mapas, fuentes) NO se intercepta.
- Crea js/instalar.js: registra sw.js solo si existe navigator.serviceWorker y la página se
  abrió con http o https (con doble clic no funciona y no debe dar error). Escucha
  beforeinstallprompt: guarda el evento y muestra el botón #boton-instalar; al pulsarlo,
  llama a prompt() y luego lo vuelve a ocultar. En appinstalled muestra el aviso
  "¡App instalada!".
- En #index.html y #panel.html agrega en el <head> <link rel="manifest"
  href="manifest.json"> y <link rel="apple-touch-icon" href="img/icono-192.png">, y carga
  js/instalar.js después del último script. En #index.html agrega, antes del botón
  "Empezar", un botón class="btn btn--secundario btn--sm" id="boton-instalar" hidden con
  el texto "📲 Instalar app".
- Crea iconos.html (junto a index.html), una página que usa css/base.css y js/config.js:
  un campo "Emoji del ícono" (con label) que empieza con CONFIG.modulo.icono, dos canvas
  de 512 y 192 px que dibujan el fondo completo con el color --acento y el emoji grande al
  centro (fuente "Segoe UI Emoji"), se redibujan al cambiar el emoji, y dos botones que
  descargan icono-512.png e icono-192.png.
Crea SOLO esos archivos y cambia SOLO #index.html y #panel.html. Al final lista los
archivos y cómo probarlo.
```

**✋ A mano (los íconos):**
1. En la carpeta del proyecto crea una carpeta nueva llamada **`img`**.
2. Abre `iconos.html` con doble clic. Si quieren, cambien el emoji.
3. Pulsa **⬇ icono-512.png** y **⬇ icono-192.png**. Los dos archivos se guardan en **Descargas**: muévelos a la carpeta **`img`** del proyecto.

**✅ Comprueba:** en la carpeta del proyecto están `manifest.json`, `sw.js`, `iconos.html`, `js/instalar.js` y `img/` con los **2 íconos**. `index.html` con doble clic sigue funcionando igual. (La instalación se prueba en el paso 5, porque necesita internet.)

---

## Paso 3 · ☁️ Su propio repositorio
**✋ A mano:**
1. Entra a **github.com** con la cuenta del grupo → botón **+** (arriba a la derecha) → **New repository**.
2. **Repository name:** el nombre de su app en minúsculas y con guiones (ej.: `ruta-huamanga`). Deja **Public**. No marques nada más → **Create repository**.
3. En la página nueva, pulsa el enlace **uploading an existing file**.
4. Abre la carpeta de su proyecto en el Explorador de Windows, selecciona **todo lo que hay dentro** (`Ctrl + A`) y **arrástralo** a la página de GitHub. Espera a que terminen de subir todos.
5. Abajo, en *Commit changes*, escribe `Mi app` → **Commit changes**.

**✅ Comprueba:** en su repositorio se ven `index.html`, `panel.html`, `manifest.json`, `sw.js` y las carpetas `css`, `js`, `img`. Si falta una carpeta, arrástrala otra vez con **Add file → Upload files**.

---

## Paso 4 · 🌐 Publicar con GitHub Pages
**✋ A mano:**
1. En su repositorio: **Settings** (arriba) → en el menú de la izquierda, **Pages**.
2. En **Build and deployment** → **Source**: **Deploy from a branch**.
3. **Branch:** elige **main** y la carpeta **/ (root)** → **Save**.
4. Espera 1 o 2 minutos y pulsa **F5**. Arriba aparece **"Your site is live at…"** con su dirección. Cópiala.

**✅ Comprueba:**
1. Abre su dirección: se ve su sitio, con su catálogo y sus funciones.
2. Agrega `panel.html` al final de la dirección: pide **usuario y contraseña**. Entra y crea un registro.
3. Pásale la dirección a otro grupo: en su computadora ve lo mismo que tú (los datos vienen de Supabase).

---

## Paso 5 · 📲 Instalar en el celular
**✋ A mano:**
1. En el celular (Android), abre **Chrome** y escribe su dirección.
2. Pulsa **📲 Instalar app** en el menú de la página, o en Chrome **⋮ → Instalar app** (o **Agregar a la pantalla principal**).
3. Confirma **Instalar**.

En la computadora también se puede: en Chrome o Edge aparece un ícono de instalar en la barra de direcciones.

**✅ Comprueba:**
1. En la pantalla de inicio del celular aparece **su ícono** con el nombre de su app.
2. Al abrirla, se ve **a pantalla completa**, sin la barra de direcciones de Chrome.
3. Pon el celular en **modo avión** y abre la app: el sitio igual se abre (sin datos nuevos ni IA, porque esos necesitan internet).

---

## Paso 6 · 🔄 Actualizar su app publicada
Cada cambio que hagan en su computadora se publica volviendo a subir los archivos.

**✋ A mano:**
1. Cambia algo pequeño (por ejemplo, el eslogan en `index.html`).
2. En `sw.js` sube la versión: `app-v1` → `app-v2`. Así los celulares se enteran del cambio.
3. En su repositorio: **Add file → Upload files** → arrastra **otra vez todo** el contenido de la carpeta → **Commit changes**. GitHub solo guarda lo que cambió.
4. Espera 1 o 2 minutos.

**✅ Comprueba:** abre su dirección y pulsa **F5**: se ve el cambio. En el celular, cierra la app y ábrela de nuevo (a veces hay que abrirla dos veces).

---

## Paso 7 · 🚀 Reto libre
Elijan una idea y **escriban su propio prompt** para Copilot. Debe tener: **archivos con `#`**, **"Cambia SOLO esos archivos"**, **todo lo que debe hacer** y **"Al final lista los archivos cambiados y cómo probarlo."** Después, vuelvan a publicar (paso 6).

| Idea | Archivos |
|---|---|
| 📶 Un aviso "Estás sin internet" cuando se corta la conexión | `#cliente.js` `#cliente.css` |
| 🔗 Botón "Compartir mi app" que use `navigator.share` en el celular | `#index.html` `#cliente.js` |
| ⏳ Que el acceso al panel se cierre solo después de 15 minutos sin usarlo | `#panel.js` |
| 🖼️ Una pantalla de bienvenida con el ícono al abrir la app instalada | `#index.html` `#cliente.css` `#cliente.js` |

**✅ Comprueba:** funciona en su dirección de internet y pueden explicar qué archivo cambió y por qué.

---

## 🚑 Si algo sale mal
| Problema | Qué hacer |
|---|---|
| Copilot cambió algo que no pedí | **Undo** y pega otra vez el prompt |
| Página en blanco o un botón no hace nada | **F12** → **Console** → copia el error rojo → pega en Copilot: `Tengo este error en la consola. Diagnostica la causa y aplica la corrección mínima.` y el error debajo |
| GitHub Pages dice 404 | Espera 2 minutos más y **F5**. Revisa que `index.html` esté en la raíz del repositorio y no dentro de otra carpeta |
| Subí la carpeta y quedó todo dentro de `LosLicenciados/` | Arrastraste la carpeta en vez de su contenido. Borra el repositorio (**Settings → Delete this repository**), créalo otra vez y arrastra lo que hay **dentro** de la carpeta |
| No aparece "Instalar app" | Revisa que abriste la dirección `https://…github.io/…` (no el archivo), que existen `img/icono-192.png` e `img/icono-512.png` en el repositorio, y pulsa **F5** |
| La app instalada no muestra mi cambio | Sube la versión en `sw.js` (`app-v2`, `app-v3`…), vuelve a subir los archivos y abre la app dos veces |
| Olvidé la contraseña del panel | Está en `js/config.js` → `acceso` |
| La IA dejó de responder en la app publicada | Avísale al profesor. Mientras tanto la app funciona en modo demo |
| No veo lo que guardó otro grupo | Es normal: cada grupo tiene su propio Supabase |
