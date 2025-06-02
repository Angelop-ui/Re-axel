let carrito = [];
const productos = [
  { nombre: "Zapato Deportivo", precio: 800, imagen: "deportivo.jpg" },
  { nombre: "Zapato Casual", precio: 600, imagen: "casual.jpg" },
  { nombre: "Zapato Formal", precio: 1200, imagen: "formal.png" },
  { nombre: "Bota", precio: 1500, imagen: "bota.png" }
];

const sonidoDing = document.getElementById('sonidoDing');
const sonidoError = document.getElementById('sonidoError');
const carritoBtn = document.getElementById('carritoBtn');
const contenedorProductos = document.getElementById('contenedor-productos');
const inputBusqueda = document.getElementById('busqueda');

function mostrarProductos(filtro = "") {
  if (!contenedorProductos) return;
  contenedorProductos.innerHTML = "";
  const productosFiltrados = productos.filter(p => p.nombre.toLowerCase().includes(filtro.toLowerCase()));
  productosFiltrados.forEach(producto => {
    const div = document.createElement('div');
    div.classList.add('producto');
    div.innerHTML = \`
      <img src="\${producto.imagen}" alt="\${producto.nombre}">
      <h3>\${producto.nombre}</h3>
      <p>$\${producto.precio}</p>
      <button onclick="agregarAlCarrito('\${producto.nombre}', \${producto.precio})">Agregar al carrito</button>
    \`;
    contenedorProductos.appendChild(div);
  });
}

function agregarAlCarrito(nombre, precio) {
  carrito.push({ nombre, precio });
  actualizarCarrito();
  mostrarAlerta();
  if (sonidoDing) sonidoDing.play();
}

function actualizarCarrito() {
  const contador = document.getElementById('contadorCarrito');
  if (contador) contador.innerText = carrito.length;
}

function abrirModal() {
  if (carrito.length === 0) {
    if (sonidoError) sonidoError.play();
    alert('Tu carrito está vacío.');
    return;
  }
  const lista = document.getElementById('listaCarrito');
  const totalCarrito = document.getElementById('totalCarrito');
  lista.innerHTML = "";
  let total = 0;
  carrito.forEach((item, index) => {
    const li = document.createElement('li');
    li.innerHTML = \`\${item.nombre} - $\${item.precio} <button onclick="eliminarDelCarrito(\${index})">x</button>\`;
    lista.appendChild(li);
    total += item.precio;
  });
  totalCarrito.innerText = \`Total: $\${total}\`;
  document.getElementById('modalCarrito').style.display = "flex";
}

function cerrarModal() {
  document.getElementById('modalCarrito').style.display = "none";
}

function eliminarDelCarrito(indice) {
  carrito.splice(indice, 1);
  actualizarCarrito();
  abrirModal();
}

function mostrarAlerta() {
  const alerta = document.getElementById('alerta');
  if (alerta) {
    alerta.hidden = false;
    setTimeout(() => alerta.hidden = true, 2000);
  }
}

function comprar() {
  if (carrito.length > 0) {
    alert('¡Compra realizada con éxito!');
    carrito = [];
    actualizarCarrito();
    cerrarModal();
  }
}

if (carritoBtn) carritoBtn.addEventListener('click', abrirModal);
if (inputBusqueda) inputBusqueda.addEventListener('input', (e) => mostrarProductos(e.target.value));
document.addEventListener("DOMContentLoaded", () => mostrarProductos());