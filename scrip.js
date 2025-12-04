// script.js

/**
 * Función para generar el enlace de WhatsApp y redirigir al usuario
 * @param {string} nombreProducto - El nombre del repuesto
 * @param {string} sku - El código único del repuesto
 */
function enviarWhatsapp(nombreProducto, sku) {
    // 1. Define tu número de teléfono (código país + número)
    const telefono = "573000000000"; // ¡CAMBIA ESTO POR TU NÚMERO REAL!

    // 2. Crea el mensaje
    const mensaje = `Hola, estoy interesado en el repuesto: ${nombreProducto} (SKU: ${sku}). ¿Me pueden dar precio y disponibilidad?`;

    // 3. Genera la URL codificada
    const url = `https://wa.me/${telefono}?text=${encodeURIComponent(mensaje)}`;

    // 4. Abre WhatsApp en una nueva pestaña
    window.open(url, '_blank');
}

// Aquí agregaremos luego la lógica para cargar productos desde la base de datos...
console.log("Sistema de catálogo cargado correctamente.");