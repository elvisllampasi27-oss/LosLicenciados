# ✦ Los Licenciados: plantilla de emprendimiento

Plantilla web educativa para que los estudiantes de **5.º de secundaria de la I.E. "Los Licenciados"** (Ayacucho) conviertan su **Lean Canvas** en un software real, con ayuda de la IA.

**Servicio Social Universitario IS-480 · UNSCH**

Tiene **dos caras** que comparten los mismos datos:

| 🌐 Sitio del cliente (`index.html`) | 🛠️ Panel de control (`panel.html`) |
|---|---|
| Portada, beneficios, cómo funciona, **catálogo con filtros**, testimonio y **formulario de contacto** | **Resumen** con indicadores y gráfico, **tabla** para crear/editar/eliminar, **bandeja de mensajes** y configuración |
| Tema claro | Tema oscuro grafito + ámbar |

✔ HTML, CSS y JavaScript puro · ✔ Funciona con **doble clic** (sin instalar nada) · ✔ Responsive y accesible · ✔ Listo para conectarse a **Supabase**

---

## 🚀 Empezar

```bash
git clone https://github.com/elvisllampasi27-oss/LosLicenciados.git
```
¿Sin Git? Botón **Code → Download ZIP**.

Abre `index.html` en el navegador. Para trabajar, abre la carpeta en **VS Code** con **GitHub Copilot**.

📘 **Alumnos:** [docs/GUIA_ALUMNO.md](docs/GUIA_ALUMNO.md)
🎤 **Docentes:** [docs/GUION_DOCENTE.md](docs/GUION_DOCENTE.md) · exposición de 15 min: [docs/EXPOSICION_DOCENTE.md](docs/EXPOSICION_DOCENTE.md)
🧩 **Catálogo de componentes:** [componentes.html](componentes.html)
🔑 **Probar la clave de Gemini (docente):** abre [herramientas/probar-gemini.html](herramientas/probar-gemini.html) con doble clic

### 📂 Sesión 07 · Guía de cada grupo (base de datos + funciones propias)

| Grupo | Emprendimiento | Guía |
|---|---|---|
| 01 | 🎓 Tutor Virtual con IA | [01-tutor-virtual.md](docs/grupos/01-tutor-virtual.md) |
| 02 | 🧭 IA Responsable | [02-ia-responsable.md](docs/grupos/02-ia-responsable.md) |
| 03 | 🚨 A.D.C | [03-adc.md](docs/grupos/03-adc.md) |
| 04 | 📅 Planificador para postulantes | [04-planificador.md](docs/grupos/04-planificador.md) |
| 05 | 📚 Biblioteca Virtual | [05-biblioteca.md](docs/grupos/05-biblioteca.md) |
| 06 | 🧺 Raíces Locales | [06-raices-locales.md](docs/grupos/06-raices-locales.md) |
| 07 | 🌻 Ayllu Cuida | [07-ayllu-cuida.md](docs/grupos/07-ayllu-cuida.md) |
| 08 | 🗺️ Ruta Huamanga | [08-ruta-huamanga.md](docs/grupos/08-ruta-huamanga.md) |
| 09 | ✅ Planly | [09-planly.md](docs/grupos/09-planly.md) |

---


## 🧩 Partes del software

```
LosLicenciados/
├── index.html            🧱 Interfaz: sitio del cliente
├── panel.html            🧱 Interfaz: panel de control
├── componentes.html      🧩 Catálogo de componentes (referencia)
├── mi-proyecto.md        📝 Lo que decide el Analista (Gemini)
├── css/
│   ├── base.css          🎨 Sistema de diseño: variables, componentes, animaciones
│   ├── cliente.css       🎨 Estilos del sitio
│   └── panel.css         🎨 Estilos del panel
├── js/
│   ├── config.js         ⚙️ Configuración: QUÉ guarda la app ← empieza aquí
│   ├── data.js           🗄️ Datos: DÓNDE se guarda (único que toca el almacenamiento)
│   ├── animaciones.js    ✨ Esfera de puntos, apariciones, contadores, avisos
│   ├── cliente.js        🧠 Lógica del sitio
│   └── panel.js          🧠 Lógica del panel
├── docs/                 📘 Guía del alumno, guion y exposición docente
├── supabase/             ☁️ SQL de ejemplo para la base de datos
└── .github/
    └── copilot-instructions.md   🤖 Reglas que Copilot lee automáticamente
```

### Cómo viaja un dato
```
config.js (qué campos) → panel.js (formulario) → data.js (guarda) → cliente.js (catálogo)
cliente.js (contacto)  → data.js (guarda)       → panel.js (mensajes)
```

---

## ⚙️ Adaptar a tu emprendimiento

Casi todo se cambia en **`js/config.js`**:

```js
partes: { sitio: true, panel: true },         // ¿qué caras usa tu equipo?
modulo: { nombre: "Tareas", singular: "tarea", nuevo: "Nueva tarea", icono: "✅" },
tabla: "tareas",
campos: [
  { nombre: "titulo",    etiqueta: "Tarea",     tipo: "text",   requerido: true, rol: "titulo" },
  { nombre: "prioridad", etiqueta: "Prioridad", tipo: "select", opciones: ["Alta", "Media", "Baja"], rol: "estado" },
  { nombre: "entrega",   etiqueta: "Entrega",   tipo: "date" },
],
```

| `rol` | Cómo se muestra |
|---|---|
| `titulo` | Nombre principal (exactamente uno) |
| `descripcion` | Texto debajo del título |
| `categoria` | Insignia y filtros del catálogo |
| `estado` | Insignia de color, filtro del panel y qué se publica en el catálogo |
| `precio` | Formato `S/ 0.00` |
| `icono` | Emoji de la tarjeta |

Después de cambiar la configuración: **Panel → Configuración → Restablecer datos**.

---

## ☁️ Base de datos en la nube (Supabase)
La plantilla ya está lista: sin configurar, guarda en el navegador; con Supabase, guarda en la nube y todo el equipo ve los mismos datos.
1. En supabase.com crea un proyecto y, en **SQL Editor**, ejecuta el SQL de tus tablas (modelo: [`supabase/ejemplo-productos.sql`](supabase/ejemplo-productos.sql)).
2. En `js/config.js` completa `supabase.url` (Project URL) y `supabase.clave` (Publishable key).
3. Panel → **Configuración → Restablecer datos**. La insignia del panel dirá **☁️ Supabase**.
> ⚠️ Configuración de taller: las tablas quedan abiertas a quien tenga la clave. No usar en producción.

## 🔜 Próximamente
- **App móvil:** convertir el sitio en PWA instalable.
- **IA en la app**, a través de Supabase, para no exponer claves.

---

🎨 Diseño inspirado en el panel de AcademiApp (logo de esfera con espiral de Fibonacci).
Hecho con HTML, CSS, JavaScript e IA.
