let carrito = [];

const sonidoDing = document.getElementById('sonidoDing');
const sonidoError = document.getElementById('sonidoError');
const carritoBtn = document.getElementById('carritoBtn');

function agregarAlCarrito(nombre, precio) {
  carrito.push({ nombre, precio });
  actualizarCarrito();
  mostrarAlerta();
  sonidoDing.play();
}

function actualizarCarrito() {
  carritoBtn.innerText = `Carrito (${carrito.length})`;
}

function abrirModal() {
  if (carrito.length === 0) {
    sonidoError.play();
    alert('Tu carrito está vacío.');
    return;
  }

  const lista = document.getElementById('listaCarrito');
  lista.innerHTML = "";

  let total = 0;
  carrito.forEach((item, index) => {
    const li = document.createElement('li');
    li.innerHTML = `${item.nombre} - $${item.precio} 
      <button onclick="eliminarDelCarrito(${index})">Eliminar</button>`;
    lista.appendChild(li);
    total += item.precio;
  });

  document.getElementById('totalCarrito').innerText = `Total: $${total}`;
  document.getElementById('modalCarrito').style.display = 'flex';
}

function cerrarModal() {
  document.getElementById('modalCarrito').style.display = 'none';
}

function eliminarDelCarrito(indice) {
  carrito.splice(indice, 1);
  actualizarCarrito();
  abrirModal();
}

function comprar() {
  if (carrito.length > 0) {
    alert('¡Gracias por tu compra!');
    carrito = [];
    actualizarCarrito();
    cerrarModal();
  }
}

function mostrarAlerta() {
  const alerta = document.getElementById('alerta');
  alerta.style.display = 'block';
  setTimeout(() => alerta.style.display = 'none', 2000);
}

carritoBtn.addEventListener('click', abrirModal);

