# 🎓 Sesión 08 · Grupo 01 · Tutor Virtual en internet

**Hoy:** publican su página web para que **cualquiera la abra desde cualquier lugar**, con su propia dirección: `usuario.github.io/tutor-virtual`. Se publica **solo el sitio**: el **panel se queda en su PC** (es la herramienta del equipo; por buena práctica no se publica).

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
2. **Repository name:** `tutor-virtual`. Deja **Public**. No marques nada más → **Create repository**.

**✅ Comprueba:** tienen un repositorio vacío llamado `tutor-virtual`.

---

## Paso 3 · ⬆️ Subir los archivos (sin el panel)
**✋ A mano:**
1. En el repositorio pulsa el enlace **uploading an existing file**.
2. Abre la carpeta del proyecto en el Explorador de Windows → `Ctrl + A` para seleccionar **todo lo que hay dentro** → **`Ctrl + clic` en `panel.html`** para quitarlo de la selección.
3. **Arrastra** lo seleccionado a la página de GitHub y espera a que suban todos.
4. Abajo escribe `Tutor Virtual` → **Commit changes**.

**✅ Comprueba:** en el repositorio se ven `index.html` y las carpetas `css`, `js` y `supabase`. **No** está `panel.html`.

---

## Paso 4 · 🌐 Publicar con GitHub Pages
**✋ A mano:**
1. En el repositorio: **Settings** → en el menú de la izquierda, **Pages**.
2. **Build and deployment** → **Source**: **Deploy from a branch**.
3. **Branch:** **main** y **/ (root)** → **Save**.
4. Espera 1 o 2 minutos y pulsa **F5**: arriba aparece **"Your site is live at…"** con su dirección.

**✅ Comprueba:** la dirección abre su página con el quiz y el Tutor. Si agregan `panel.html` al final de la dirección, sale **404**: el panel no está en internet. ✔️

---

## Paso 5 · 📲 Probar en el celular y compartir
**✋ A mano:**
1. Manden la dirección al grupo de WhatsApp del equipo.
2. Cada uno la abre en su **celular** y prueba el quiz y el Tutor.
3. Mientras tanto, uno abre `panel.html` en la PC del grupo y crea o publica un registro nuevo.

**✅ Comprueba:**
1. La página se ve bien en el celular.
2. Al recargar en el celular, aparece el **registro nuevo** que crearon en el panel de la PC (los dos usan el mismo Supabase).
3. Compartan la dirección con otro grupo: también la pueden abrir.

> 🔄 **Si cambian algo después:** en el repositorio, **Add file → Upload files** → arrastren otra vez todo el contenido de la carpeta, **menos `panel.html`** → **Commit changes**. En 1 o 2 minutos se actualiza.

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
