# Reglas del proyecto para GitHub Copilot

Este proyecto es una plantilla web educativa (I.E. "Los Licenciados", 5.º de secundaria, Ayacucho). Los estudiantes la adaptan a su emprendimiento.

## Stack
- HTML5 semántico, CSS3 con variables y JavaScript puro con scripts clásicos (sin `type="module"`).
- PROHIBIDO agregar frameworks, librerías, CDNs de JS, npm o pasos de compilación. Debe funcionar abriendo el `.html` con doble clic.

## Partes del software (respeta esta separación)
| Archivo | Responsabilidad |
|---|---|
| `index.html` + `css/cliente.css` + `js/cliente.js` | Sitio del cliente (tema claro) |
| `panel.html` + `css/panel.css` + `js/panel.js` | Panel de control (tema oscuro, `data-tema="oscuro"`) |
| `css/base.css` | Sistema de diseño: variables en `:root`, componentes (`.btn`, `.tarjeta`, `.chip`, `.campo`, `.input`, `.tabla`, `.kpi`, `.avatar`, `.vacio`) y animaciones (`.aparecer`, `.flotar`) |
| `js/config.js` | Configuración: nombre, partes activas, módulo, tabla, campos con `rol` y datos de ejemplo |
| `js/data.js` | ÚNICO archivo que accede a `localStorage`. Funciones async `Datos.listar/obtener/crear/actualizar/eliminar/reiniciar`, y helpers `Util` |
| `js/animaciones.js` | Logo esfera, apariciones, contadores, `Animaciones.aviso(texto)` |

## Reglas
1. Cambia SOLO los archivos que pide el prompt. Si necesitas tocar otro, explícalo antes.
2. Nunca uses `localStorage` fuera de `js/data.js`. Para datos usa siempre `Datos.*` con `await`.
3. Para leer campos usa los roles: `Util.campo("titulo")`, `Util.valor(registro, "precio")`. No escribas nombres de campos fijos en `cliente.js` ni `panel.js`.
4. Todo texto que venga de datos se inserta con `Util.seguro()` o `textContent` (evita inyección de HTML).
5. Reutiliza las clases de `base.css` y sus variables (`var(--acento)`, `var(--e-4)`…). No pongas colores hex sueltos fuera de `:root`.
6. Mobile-first, accesible (etiquetas `<label>`, `aria-label` en botones de solo ícono, contraste AA) y respeta `prefers-reduced-motion`.
7. En `config.js`, los tipos de campo válidos son: `text`, `textarea`, `number`, `date`, `select` (con `opciones`). Roles válidos: `titulo` (exactamente uno), `descripcion`, `categoria`, `estado`, `precio`, `icono`.
8. Nombres de variables, funciones, comentarios y textos en español. Comentarios breves.
9. Al terminar, lista los archivos modificados y cómo probar el cambio.
10. Fechas: para mostrar usa `Util.fecha(valor)` (sirve para campos `date` y para `created_at`). Para comparar con un campo `date` usa `Util.hoy()` o `Util.hoy(7)` (texto "AAAA-MM-DD" en hora local). Nunca `toISOString()` para la fecha de hoy: en Perú, desde las 19:00 da el día siguiente.
11. Un campo sin rol se lee por el nombre que guarda `config.js` (por ejemplo `CONFIG.mapa.latitud`), nunca con el nombre escrito en `cliente.js` o `panel.js`.
