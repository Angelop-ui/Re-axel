// Lista de productos
const productos = [
    {
        nombre: "Zapato Deportivo",
        precio: 800,
        imagen: "Zapato-Deportivo.jpg"
    },
    {
        nombre: "Zapato Casual",
        precio: 600,
        imagen: "Zapato-Casual.jpg"
    },
    {
        nombre: "Zapato Formal",
        precio: 1200,
        imagen: "Zapato-Formal.png"
    },
    {
        nombre: "Bota",
        precio: 1500,
        imagen: "Bota.png"
    }
];

let carrito = [];
const sonidoDing = document.getElementById('sonidoDing');
const sonidoError = document.getElementById('sonidoError');
const carritoBtn = document.getElementById('carritoBtn');
const listaProductos = document.getElementById('listaProductos');
const buscador = document.getElementById('buscador');

// Función para mostrar los productos
function mostrarProductos(filtrados) {
    listaProductos.innerHTML = '';
    filtrados.forEach(producto => {
        const div = document.createElement('div');
        div.classList.add('producto');
        div.innerHTML = `
            <img src="${producto.imagen}" alt="${producto.nombre}">
            <h3>${producto.nombre}</h3>
            <p>$${producto.precio}</p>
            <button onclick="agregarAlCarrito('${producto.nombre}', ${producto.precio})">Agregar al carrito</button>
        `;
        listaProductos.appendChild(div);
    });
}

// Mostrar todos los productos al cargar
mostrarProductos(productos);

// Función para agregar al carrito
function agregarAlCarrito(nombre, precio) {
    carrito.push({ nombre, precio });
    actualizarCarrito();
    mostrarAlerta();
    sonidoDing.play();
}

// Función para actualizar el botón del carrito
::contentReference[oaicite:23]{index=23}
 

