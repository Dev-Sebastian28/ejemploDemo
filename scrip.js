// 1. DATOS: Simulación de Base de Datos (JSON)
// Aquí puedes agregar, borrar o editar tus repuestos.
const repuestos = [
    {
        id: 1,
        nombre: "Filtro de Aire - Heavy Duty",
        sku: "FA-9901",
        modelos: "Kenworth T800, International WorkStar",
        precio: 125000,
        imagen: "https://via.placeholder.com/300x200?text=Filtro+Aire"
    },
    {
        id: 2,
        nombre: "Pastillas de Freno (Juego Delantero)",
        sku: "BRK-2024",
        modelos: "Volvo FH, Mack Granite",
        precio: 340000,
        imagen: "https://via.placeholder.com/300x200?text=Pastillas+Freno"
    },
    {
        id: 3,
        nombre: "Alternador 24V - 100Amp",
        sku: "ALT-5500",
        modelos: "Scania Serie R, Mercedes Actros",
        precio: 850000,
        imagen: "https://via.placeholder.com/300x200?text=Alternador"
    },
    {
        id: 4,
        nombre: "Kit de Embrague Completo",
        sku: "CLU-7788",
        modelos: "Freightliner Cascadia, Columbia",
        precio: 1200000,
        imagen: "https://via.placeholder.com/300x200?text=Kit+Embrague"
    },
    {
        id: 5,
        nombre: "Válvula de Secado de Aire",
        sku: "VAL-3321",
        modelos: "Universal (Sistema Wabco)",
        precio: 180000,
        imagen: "https://via.placeholder.com/300x200?text=Valvula+Aire"
    },
    {
        id: 6,
        nombre: "Farola Delantera LED",
        sku: "LED-4040",
        modelos: "Kenworth T680",
        precio: 550000,
        imagen: "https://via.placeholder.com/300x200?text=Farola+LED"
    }
];

// 2. REFERENCIAS AL DOM (Elementos del HTML)
const contenedor = document.getElementById('contenedor-repuestos');
const buscador = document.getElementById('buscador');

// 3. FUNCIÓN PARA FORMATEAR PRECIO (Pesos Colombianos)
const formatoMoneda = new Intl.NumberFormat('es-CO', {
    style: 'currency',
    currency: 'COP',
    minimumFractionDigits: 0
});

// 4. FUNCIÓN PRINCIPAL: Renderizar (Mostrar) los productos
function mostrarProductos(lista) {
    // Limpiamos el contenedor antes de agregar nada
    contenedor.innerHTML = '';

    // Si no hay productos que coincidan
    if (lista.length === 0) {
        contenedor.innerHTML = '<div class="col-12 text-center text-muted"><h3>No se encontraron repuestos con ese nombre.</h3></div>';
        return;
    }

    // Recorremos la lista y creamos el HTML para cada uno
    lista.forEach(producto => {
        const tarjeta = document.createElement('div');
        tarjeta.className = 'col-md-4 mb-4';
        
        tarjeta.innerHTML = `
            <div class="card card-repuesto h-100">
                <img src="${producto.imagen}" class="card-img-top" alt="${producto.nombre}">
                <div class="card-body d-flex flex-column">
                    <h5 class="card-title">${producto.nombre}</h5>
                    <p class="card-text text-muted mb-1"><strong>SKU:</strong> ${producto.sku}</p>
                    <p class="card-text small">Compatible: ${producto.modelos}</p>
                    <h5 class="text-primary mt-auto mb-3">${formatoMoneda.format(producto.precio)}</h5>
                    
                    <button class="btn btn-success w-100" onclick="enviarWhatsapp('${producto.nombre}', '${producto.sku}')">
                        <i class="fab fa-whatsapp"></i> Cotizar / Comprar
                    </button>
                </div>
            </div>
        `;
        contenedor.appendChild(tarjeta);
    });
}

// 5. FUNCIÓN DE FILTRADO (Buscador)
function filtrarProductos() {
    const texto = buscador.value.toLowerCase();
    
    const productosFiltrados = repuestos.filter(producto => {
        // Buscamos coincidencia en nombre, SKU o modelos
        return producto.nombre.toLowerCase().includes(texto) || 
               producto.sku.toLowerCase().includes(texto) ||
               producto.modelos.toLowerCase().includes(texto);
    });

    mostrarProductos(productosFiltrados);
}

// 6. FUNCIÓN DE WHATSAPP
function enviarWhatsapp(nombreProducto, sku) {
    // CAMBIA ESTE NÚMERO POR EL TUYO
    const telefono = "3142379754"; 
    
    const mensaje = `Hola, me interesa el repuesto: *${nombreProducto}* con SKU: *${sku}*. ¿Está disponible?`;
    const url = `https://wa.me/${telefono}?text=${encodeURIComponent(mensaje)}`;
    
    window.open(url, '_blank');
}

// 7. INICIALIZACIÓN
// Cargar todos los productos al abrir la página
document.addEventListener('DOMContentLoaded', () => {
    mostrarProductos(repuestos);
});

// Escuchar el evento de escribir en el buscador
buscador.addEventListener('input', filtrarProductos);
