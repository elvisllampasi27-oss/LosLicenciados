# 🗺️ Sesión 08 · Grupo 08 · Ruta Huamanga en internet

**Hoy:** publican su página web para que **cualquiera la abra desde cualquier lugar**, con su propia dirección: `usuario.github.io/ruta-huamanga`. Se publica **solo el sitio**: el **panel se queda en su PC** (es la herramienta del equipo; por buena práctica no se publica). Al final, como prueba, la convierten en una **app (APK)** para el celular.

**Todos trabajan:** uno pega el prompt en VS Code, otro crea el repositorio y sube los archivos, y los demás prueban la página en su celular.

**Cómo usar esta guía:**
- **🛠️ Pega en Copilot** → en VS Code: `Ctrl + Alt + I` → modo **Agent** → pega → **Enter** → al terminar, **Keep**.
- **✋ A mano** → lo haces tú.
- **✅ Comprueba** → hazlo antes de pasar al siguiente paso.

> ⚠️ **Es una prueba.** Su página queda pública en internet. No pongan datos reales de personas.

---

## Paso 1 · 🏠 Quitar el botón del panel
**🛠️ Pega en Copilot:**
```
El panel ya no se publicará en internet: solo se usa desde la PC del equipo.
En #index.html quita todos los enlaces a panel.html (el botón "Panel ↗" del menú y
cualquier otro). En #cliente.js quita el código que solo servía para esos enlaces, si lo
hay. No cambies panel.html.
Cambia SOLO esos 2 archivos. Al final lista los archivos cambiados y cómo probarlo.
```

**✅ Comprueba:** `index.html` → **F5**: el menú ya **no** tiene "Panel". `panel.html` con doble clic sigue abriendo el panel.

---

## Paso 2 · ☁️ Crear su repositorio
**✋ A mano:**
1. Entra a **github.com** con la cuenta del grupo → botón **+** (arriba a la derecha) → **New repository**.
2. **Repository name:** `ruta-huamanga`. Deja **Public**. No marques nada más → **Create repository**.

**✅ Comprueba:** tienen un repositorio vacío llamado `ruta-huamanga`.

---

## Paso 3 · ⬆️ Subir los archivos (sin el panel)
**✋ A mano:**
1. En el repositorio pulsa el enlace **uploading an existing file**.
2. Abre la carpeta del proyecto en el Explorador de Windows → `Ctrl + A` para seleccionar **todo lo que hay dentro** → **`Ctrl + clic` en `panel.html`** para quitarlo de la selección.
3. **Arrastra** lo seleccionado a la página de GitHub y espera a que suban todos.
4. Abajo escribe `Ruta Huamanga` → **Commit changes**.

**✅ Comprueba:** en el repositorio se ven `index.html` y las carpetas `css`, `js` y `supabase`. **No** está `panel.html`.

---

## Paso 4 · 🌐 Publicar con GitHub Pages
**✋ A mano:**
1. En el repositorio: **Settings** → en el menú de la izquierda, **Pages**.
2. **Build and deployment** → **Source**: **Deploy from a branch**.
3. **Branch:** **main** y **/ (root)** → **Save**.
4. Espera 1 o 2 minutos y pulsa **F5**: arriba aparece **"Your site is live at…"** con su dirección.

**✅ Comprueba:** la dirección abre su página con el mapa, los lugares y "Arma tu ruta". Si agregan `panel.html` al final de la dirección, sale **404**: el panel no está en internet. ✔️

---

## Paso 5 · 📲 Probar en el celular y compartir
**✋ A mano:**
1. Manden la dirección al grupo de WhatsApp del equipo.
2. Cada uno la abre en su **celular** y prueba el mapa, los lugares y "Arma tu ruta".
3. Mientras tanto, uno abre `panel.html` en la PC del grupo y crea o publica un registro nuevo.

**✅ Comprueba:**
1. La página se ve bien en el celular.
2. Al recargar en el celular, aparece el **registro nuevo** que crearon en el panel de la PC (los dos usan el mismo Supabase).
3. Compartan la dirección con otro grupo: también la pueden abrir.

> 🔄 **Si cambian algo después:** en el repositorio, **Add file → Upload files** → arrastren otra vez todo el contenido de la carpeta, **menos `panel.html`** → **Commit changes**. En 1 o 2 minutos se actualiza.

---

## 🧪 Prueba: la página como app (APK)
> Solo para este grupo, con el profesor. El APK **no se publica** en Google Play: solo se instala para probar.

## Paso 6 · 📱 Hacer la página instalable
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
  Leaflet, mapas, fuentes) NO se intercepta.
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
2. Abre `iconos.html` con doble clic y escribe el emoji **🗺️** (o el que elijan).
3. Pulsa **⬇ icono-512.png** y **⬇ icono-192.png**. Se guardan en **Descargas**: muévelos a la carpeta **`img`**.

**✅ Comprueba:** en la carpeta están `manifest.json`, `sw.js`, `iconos.html`, `js/instalar.js` e `img/` con los **2 íconos**. Súbanlos al repositorio (**Add file → Upload files**, sin `panel.html`) y esperen 1 o 2 minutos.

## Paso 7 · 📦 Convertir a APK con PWABuilder
**✋ A mano (con el profesor):**
1. Entra a **pwabuilder.com**, pega su dirección `https://…github.io/ruta-huamanga/` y pulsa **Start**.
2. Cuando termine de revisarla, pulsa **Package For Stores** → **Android** → **Generate Package** (deja las opciones como están; los nombres de los botones pueden cambiar un poco).
3. Se descarga un `.zip`. Ábrelo: adentro está el archivo **`.apk`**.
4. Pasa el `.apk` a un celular Android (por cable o por WhatsApp a ti mismo) y ábrelo.
5. El celular pide permiso para **instalar apps de origen desconocido**: permítelo solo para esta instalación → **Instalar**.

**✅ Comprueba:**
1. En el celular aparece la app **Ruta Huamanga** con su ícono **🗺️**.
2. Al abrirla se ve su página. Si arriba aparece una barra con la dirección, es normal en esta prueba.
3. Al terminar la prueba, desinstalen la app y vuelvan a bloquear "origen desconocido".

---

## 🚑 Si algo sale mal
| Problema | Qué hacer |
|---|---|
| GitHub Pages dice 404 | Espera 2 minutos más y **F5**. Revisa que `index.html` esté en la raíz del repositorio y no dentro de otra carpeta |
| Todo quedó dentro de una carpeta `LosLicenciados/` | Arrastraron la carpeta en vez de su contenido. **Settings → Delete this repository**, créenlo otra vez y arrastren lo que hay **dentro** |
| Subí `panel.html` por error | En el repositorio, abre `panel.html` → **⋯ → Delete file** → **Commit changes** |
| La página se ve sin datos | Revisen que subieron `js/config.js` con la URL y la clave de Supabase |
| No veo en el celular lo que guardé en el panel | Recarguen la página. Revisen que el registro esté en el estado que se publica |
| La IA no responde en la página publicada | Avísenle al profesor. Mientras tanto funciona en modo demo |
| PWABuilder dice que falta el manifest o el service worker | Revisen que `manifest.json`, `sw.js` e `img/` estén en el repositorio y esperen 2 minutos |
| El celular no deja instalar el `.apk` | Permitan "instalar apps de origen desconocido" para la app con la que abrieron el archivo (Archivos o WhatsApp) |
