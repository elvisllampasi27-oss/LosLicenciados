/* =============================================================
   ⚙️ CONFIGURACIÓN DEL PROYECTO — el archivo que más vas a cambiar
   Aquí decides:
     1. El nombre de tu emprendimiento.
     2. Qué partes usas: sitio del cliente, panel de control o ambos.
     3. Qué datos guarda tu app (los campos del formulario y la tabla).
   El sitio y el panel se arman SOLOS a partir de esto.
   ============================================================= */

const CONFIG = {
  // 1. Identidad
  proyecto: {
    nombre: "Mi Emprendimiento",
  },

  // ☁️ Base de datos en la nube (Supabase). Vacío = se guarda en el navegador.
  // Supabase → Project Overview: copia la URL (botón Copy). Botón "Connect" o Project Settings → API Keys: copia la "Publishable key".
  supabase: {
    url: "",   // ej. "https://abcdefgh.supabase.co"
    clave: "", // ej. "sb_publishable_..."
  },

  // 2. Partes del software que usa tu equipo
  partes: {
    sitio: true,   // index.html → la cara que ve el cliente
    panel: true,   // panel.html → la cara que usa tu equipo para gestionar
  },

  // 3. Módulo principal: QUÉ guarda la app
  modulo: {
    nombre: "Productos",   // título en el panel (plural)
    singular: "producto",  // en singular y minúsculas
    nuevo: "Nuevo producto", // texto del botón (ej. "Nueva tarea")
    icono: "📦",
  },

  // Nombre de la tabla (en Supabase será el nombre de la tabla en la nube).
  // Solo minúsculas, sin espacios ni tildes.
  tabla: "productos",

  /* Campos de la tabla.
     tipo:  "text" | "textarea" | "number" | "date" | "select" (con opciones)
     rol (opcional) le dice al sistema cómo mostrar el campo:
       "titulo"      → nombre principal (obligatorio en un campo)
       "descripcion" → texto debajo del título
       "categoria"   → insignia de categoría
       "estado"      → insignia de color y filtro del panel
       "precio"      → se muestra como S/ 0.00
       "icono"       → emoji que representa al registro
     enTabla: false (opcional) → el campo no se muestra como columna en el panel */
  campos: [
    { nombre: "nombre", etiqueta: "Nombre", tipo: "text", requerido: true, rol: "titulo" },
    { nombre: "categoria", etiqueta: "Categoría", tipo: "select", opciones: ["Artesanía", "Alimentos", "Textiles"], rol: "categoria" },
    { nombre: "precio", etiqueta: "Precio (S/)", tipo: "number", rol: "precio" },
    { nombre: "estado", etiqueta: "Estado", tipo: "select", opciones: ["Activo", "Pendiente", "Borrador"], rol: "estado" },
    { nombre: "icono", etiqueta: "Ícono (emoji)", tipo: "text", rol: "icono" },
    { nombre: "descripcion", etiqueta: "Descripción", tipo: "textarea", rol: "descripcion" },
  ],

  // Qué registros se muestran en el catálogo del sitio (solo los de este estado)
  catalogo: {
    soloEstado: "Activo",
  },

  // Datos de ejemplo: se cargan la primera vez para que la app no se vea vacía
  datosEjemplo: [
    { nombre: "Retablo ayacuchano", categoria: "Artesanía", precio: 120, estado: "Activo", icono: "🏠", descripcion: "Hecho a mano por artesanos de Quinua." },
    { nombre: "Queso andino", categoria: "Alimentos", precio: 18, estado: "Activo", icono: "🧀", descripcion: "Queso fresco de leche de vaca, 1 kg." },
    { nombre: "Manta tejida", categoria: "Textiles", precio: 85, estado: "Activo", icono: "🧶", descripcion: "Tejido en telar con lana de oveja." },
    { nombre: "Cerámica de Quinua", categoria: "Artesanía", precio: 45, estado: "Pendiente", icono: "🏺", descripcion: "Iglesia de cerámica tradicional." },
    { nombre: "Maíz morado", categoria: "Alimentos", precio: 6, estado: "Activo", icono: "🌽", descripcion: "Bolsa de 1 kg para chicha y mazamorra." },
    { nombre: "Chalina de alpaca", categoria: "Textiles", precio: 60, estado: "Borrador", icono: "🧣", descripcion: "Suave y abrigadora." },
  ],

  // Mensajes de ejemplo (llegan desde el formulario de contacto del sitio)
  mensajesEjemplo: [
    { nombre: "Rosa Quispe", mensaje: "Hola, ¿hacen envíos a Huanta?", leido: false },
    { nombre: "Juan Huamán", mensaje: "Me interesa el retablo ayacuchano.", leido: false },
    { nombre: "María Palomino", mensaje: "¡Felicitaciones por el emprendimiento!", leido: true },
  ],
};
