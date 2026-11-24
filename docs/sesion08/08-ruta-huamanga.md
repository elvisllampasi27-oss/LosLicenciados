# 🗺️ Sesión 08 · Grupo 08 · Ruta Huamanga en internet y en el celular

**Hoy:** su app sale a la calle. La van a **publicar en internet** con su propia dirección para que cualquiera la abra desde cualquier lugar, y la van a **instalar en el celular**. El **panel se queda en su PC**: es la herramienta del equipo y no se publica (buena práctica). Además le agregan **2 funciones que solo tienen sentido caminando por Huamanga**: **📍 ¿Qué hay cerca de mí?** (el GPS ordena los lugares por distancia) y **🧭 Cómo llegar** (abre la ruta a pie en el mapa del celular).

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
2. **Repository name:** `ruta-huamanga`. Deja **Public**. No marques nada más → **Create repository**.
3. Deja esa pestaña abierta: en el paso 6 suben los archivos.

**✅ Comprueba:** tienen un repositorio vacío llamado `ruta-huamanga`.

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

**✅ Comprueba:** en la carpeta están `manifest.json`, `sw.js`, `iconos.html`, `js/instalar.js` e `img/` con los **2 íconos**. `index.html` con doble clic sigue funcionando.

---

## Paso 4 · 📍 ¿Qué hay cerca de mí? (Piloto)
**🛠️ Pega en Copilot:**
```
Agrega al sitio "¿Qué hay cerca de mí?" con el GPS del celular:
- En #config.js agrega CONFIG.cerca = { lejos: 30, modo: "walking" } (lejos = km desde el
  centro del mapa a partir de los cuales el visitante está fuera de Huamanga).
- En #index.html, en la sección del catálogo, justo antes del mapa, agrega un div class="cerca"
  con un botón id="boton-cerca" "📍 ¿Qué hay cerca de mí?" y un texto id="cerca-estado"
  con aria-live="polite".
- En #cliente.js:
  · Crea metrosEntre(a, b) que calcule la distancia en metros entre dos puntos { lat, lng }
    con la fórmula de Haversine, y textoDistancia(m) que devuelva "350 m" (redondeado a 10 m)
    o "1.2 km".
  · Al pulsar el botón: si no hay navigator.geolocation, avisa en cerca-estado; si hay,
    muestra "Buscando tu ubicación…" y llama a getCurrentPosition con enableHighAccuracy,
    timeout 10000 y maximumAge 60000. Al recibir la posición: guárdala en miPosicion,
    calcula la distancia a cada lugar publicado que tenga latitud y longitud (en un Map
    id → metros), y escribe "El más cercano: [lugar], a [distancia]." o, si estás a más
    de CONFIG.cerca.lejos km del centro del mapa, "Estás lejos de Huamanga: te mostramos
    la distancia a cada lugar." Si el permiso fue negado (código 1): "Permite el acceso a
    tu ubicación para usar esta función (🔒 junto a la dirección)."; otro error: "No se
    pudo obtener tu ubicación. Intenta de nuevo."
  · Con una posición guardada, pintarCatalogo() ordena los lugares visibles del más cercano
    al más lejano (sin ubicación, al final), y tarjeta() muestra un chip
    class="chip chip--exito" "📍 a [distancia]". Funciona junto con el filtro de categoría.
  · En el mapa Leaflet, pon un L.circleMarker azul con el tooltip "Tú estás aquí" (que
    reemplace al anterior) y, si no estás lejos, haz fitBounds entre tu posición y el lugar
    más cercano (padding 60, maxZoom 17).
  Inserta los textos con Util.seguro().
- Estilos en #cliente.css con las variables de base.css.
Cambia SOLO esos 4 archivos. Al final lista los archivos cambiados y cómo probarlo.
```

**✅ Comprueba (en la PC):** `index.html` → **F5** → **📍 ¿Qué hay cerca de mí?** → **Permitir**. Los lugares se ordenan por distancia, cada uno con su chip **📍 a …**, y en el mapa aparece **"Tú estás aquí"**. (En la PC la ubicación es aproximada; en el celular, en el paso 7, es exacta.)

---

## Paso 5 · 🧭 Cómo llegar (Piloto)
**🛠️ Pega en Copilot:**
```
Agrega "Cómo llegar" con Google Maps (en el celular abre su app de mapas):
- En #cliente.js crea enlaceLlegar(lugares), que recibe una lista de lugares y devuelve
  https://www.google.com/maps/dir/?api=1 + &destination= (latitud,longitud del último) +
  &waypoints= (los anteriores separados con | y codificados con encodeURIComponent, solo si
  hay) + &travelmode= CONFIG.cerca.modo. Si ya se conoce miPosicion (paso anterior),
  agrega &origin= con esa posición.
- En tarjeta(), debajo de los datos del lugar, si tiene latitud y longitud, un enlace
  class="item__llegar" "🧭 Cómo llegar" con enlaceLlegar([lugar]), target="_blank" y
  rel="noopener".
- En el popup de cada marcador del mapa, debajo de "✅ Estuve aquí", el mismo enlace
  "🧭 Cómo llegar".
- En el resultado de "Arma tu ruta", al final de cada día, un enlace
  class="btn btn--fantasma btn--sm" "🧭 Día N en Google Maps" con enlaceLlegar de todas
  las paradas de ese día, en orden.
- Estilos en #cliente.css con las variables de base.css.
Cambia SOLO #cliente.js y #cliente.css. Al final lista los archivos cambiados y cómo
probarlo.
```

**✅ Comprueba:**
1. En un lugar pulsa **🧭 Cómo llegar**: se abre Google Maps con la ruta **a pie** hasta ese lugar.
2. En el mapa, abre un marcador: su ficha también tiene **🧭 Cómo llegar**.
3. Arma una ruta de **2 días** → **🧭 Día 1 en Google Maps**: se abre la ruta con **todas las paradas del día** en orden.

---

## Paso 6 · 🌐 Subir y publicar (Publicador)
**✋ A mano (subir):**
1. En la pestaña del repositorio `ruta-huamanga` pulsa el enlace **uploading an existing file**.
2. Abre la carpeta del proyecto en el Explorador de Windows, selecciona **todo lo que hay dentro** (`Ctrl + A`) y luego **`Ctrl + clic` en `panel.html`** para quitarlo de la selección. **Arrastra** el resto a la página y espera a que suban todos.
3. Abajo escribe `Ruta Huamanga` → **Commit changes**.

**✋ A mano (publicar):**
1. **Settings** → menú de la izquierda **Pages**.
2. **Build and deployment** → **Source**: **Deploy from a branch** → **Branch:** **main** y **/ (root)** → **Save**.
3. Espera 1 o 2 minutos y pulsa **F5**: arriba aparece **"Your site is live at…"**. Copia la dirección y **mándala al grupo de WhatsApp** del equipo.

**✅ Comprueba:**
1. La dirección abre Ruta Huamanga con el mapa, los lugares y "Arma tu ruta".
2. Agregando `panel.html` al final de la dirección sale **404**: el panel no está en internet. ✔️

---

## Paso 7 · 📲 Probar en el celular (todos)
**✋ A mano (cada Probador, en su celular Android):**
1. Abre la dirección en **Chrome** → **📲 Instalar app** (o **⋮ → Instalar app**) → **Instalar**.
2. Abre la app desde su ícono **🗺️** en la pantalla de inicio.
3. **📍 ¿Qué hay cerca de mí?** → **Permitir** la ubicación.
4. En el lugar más cercano, **🧭 Cómo llegar**.
5. Mientras tanto, el **Piloto** abre `panel.html` en la PC del grupo y crea un lugar nuevo con estado **Publicado**.

**✅ Comprueba:**
1. La app se abre **a pantalla completa**, sin la barra de Chrome.
2. El lugar más cercano es de verdad el más cercano a donde están (en el colegio, comparen entre todos).
3. **Cómo llegar** abre la app de **Google Maps** con la ruta a pie.
4. Cierra y abre la app: aparece el **lugar nuevo** que creó el Piloto desde el panel de la PC.
5. Pon el **modo avión** y abre la app: el sitio igual se abre (el mapa y los datos necesitan internet).

---

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
| 🎫 Que "✅ Estuve aquí" solo funcione si estás a menos de 200 m del lugar (usa el GPS) | `#cliente.js` |
| 🔗 Botón "Compartir mi ruta" que use `navigator.share` en el celular | `#cliente.js` `#index.html` |
| 🚗 Elegir "a pie" o "en carro" para Cómo llegar | `#index.html` `#cliente.js` |
| 🧭 Que el punto azul "Tú estás aquí" se mueva mientras caminas (`watchPosition`) | `#cliente.js` |

**✅ Comprueba:** funciona en su dirección de internet, en el celular, y pueden explicar qué archivo cambió y por qué.

---

## 🚑 Si algo sale mal
| Problema | Qué hacer |
|---|---|
| Copilot cambió algo que no pedí | **Undo** y pega otra vez el prompt |
| Página en blanco o un botón no hace nada | **F12** → **Console** → copia el error rojo → pega en Copilot: `Tengo este error en la consola. Diagnostica la causa y aplica la corrección mínima.` y el error debajo |
| "Permite el acceso a tu ubicación…" | En Chrome, toca el **🔒** junto a la dirección → **Permisos** → **Ubicación: Permitir**. En el celular, revisa también que el **GPS** esté encendido |
| La distancia sale rara en la PC | Es normal: la PC calcula su ubicación por internet. Prueben en el celular |
| "Cómo llegar" abre Maps en el navegador y no en la app | Está bien; en Android, si tienes Google Maps instalado, pregunta con qué abrir |
| El mapa es una cuadrícula gris sin calles | Pega en Copilot: `El mapa de #index.html y #cliente.js no usa Leaflet. Reemplázalo por un mapa real con Leaflet 1.9.4 y OpenStreetMap, sin cambiar el pasaporte ni la ruta.` |
| GitHub Pages dice 404 | Espera 2 minutos más y **F5**. Revisa que `index.html` esté en la raíz del repositorio y no dentro de otra carpeta |
| Todo quedó dentro de una carpeta `LosLicenciados/` en el repositorio | Arrastraste la carpeta en vez de su contenido. **Settings → Delete this repository**, créalo otra vez y arrastra lo que hay **dentro** |
| No aparece "Instalar app" | Abre la dirección `https://…github.io/…` (no el archivo), revisa que `img/icono-192.png` e `img/icono-512.png` estén en el repositorio y pulsa **F5** |
| La app instalada no muestra mi cambio | Sube la versión en `sw.js`, vuelve a subir los archivos y abre la app dos veces |
| La IA de "Arma tu ruta" dejó de responder | Avísale al profesor. Mientras tanto funciona en modo demo |
| Subí `panel.html` por error | En el repositorio, abre `panel.html` → **⋯ → Delete file** → **Commit changes** |
| El celular no muestra lo que guardé en el panel | Revisa que el panel use el mismo `config.js` (misma URL de Supabase) y que el estado sea **Publicado**. Cierra y abre la app |
