// Este mensaje aparece en la consola del navegador
// Solo para desarrolladores (no lo ve el usuario)
console.log("¡Bienvenida a Patitas Felices!");

// Cuando toda la página termina de cargar, muestra un mensaje emergente
// Se ejecuta en TODAS las paginas donde este script esta incluido (como index.html)
window.addEventListener("load", () => {
  alert("Gracias por visitar Patitas Felices 🐱✨");
});

// Espera que el HTML este listo para manipular elementos
document.addEventListener("DOMContentLoaded", () => {
  const contenedor = document.getElementById("productos-container");

  // Mostrar productos en pantalla
  productos.forEach((producto) => {
    const card = document.createElement("div");
    card.classList.add("producto-card"); // Le aplica el estilo CSS

    card.innerHTML = `
  <img src="${producto.img}" alt="Foto de ${producto.name}: ${producto.description}" class="producto-img" />
  <h2>${producto.name}</h2>
  <p>${producto.description}</p>
  <p><strong>Precio:</strong> $${producto.amount}</p>
  <button class="agregar-carrito" data-id="${producto.id}" aria-label="Agregar ${producto.name} al carrito">Agregar al carrito</button>
`;

    contenedor.appendChild(card); // Muestra la tarjeta en la página
  });

  // Escuchar clicks en "Agregar al carrito"
  contenedor.addEventListener("click", (e) => {
    if (e.target.classList.contains("agregar-carrito")) {
      const id = parseInt(e.target.dataset.id);
      const producto = productos.find((p) => p.id === id);

      let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
      carrito.push(producto);
      localStorage.setItem("carrito", JSON.stringify(carrito));

      // 🔁 Actualiza el contador del carrito en tiempo real
      const contadorCarrito = document.getElementById("contador-carrito");
      if (contadorCarrito) {
        contadorCarrito.textContent = carrito.length;
      }

      alert(`🛒 ¡"${producto.name}" fue agregado al carrito!`);
    }
  });

  // Mostrar la cantidad de productos en el ícono del carrito (al cargar la página)
  const contadorCarrito = document.getElementById("contador-carrito");
  if (contadorCarrito) {
    const carrito = JSON.parse(localStorage.getItem("carrito")) || [];
    contadorCarrito.textContent = carrito.length;
  }
});
