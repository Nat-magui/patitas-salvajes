// =====================
// Archivo carrito.js
// Este archivo maneja:
// - Mostrar los productos guardados en el carrito
// - Calcular y mostrar el total
// - Eliminar productos individualmente
// - Vaciar todo el carrito
// =====================

// Con el DOMContentLoaded espera a que el HTML se haya cargado completamente antes de ejecutar el codigo
// Esto evita errores si los elementos todavia no estan disponibles

document.addEventListener("DOMContentLoaded", () => {
  // Captura el contenedor donde se mostraran los productos en carrito.html
  const carritoContainer = document.getElementById("carrito-container");

  // Captura el elemento donde se mostrara el total a pagar
  const totalTexto = document.getElementById("total");

  // Captura el boton que permite vaciar todo el carrito
  const botonVaciar = document.getElementById("vaciar-carrito");

  // Traemos el carrito desde localStorage y lo convertimos a objeto
  // Si no hay nada guardado, arrancamos con un array vacio
  let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

  // Funcion que dibuja todos los productos guardados en el carrito
  function mostrarCarrito() {
    carritoContainer.innerHTML = ""; // Limpiamos el contenedor antes de agregar cosas
    let total = 0; // Arrancamos el total desde cero

    // Recorremos todos los productos del carrito
    carrito.forEach((producto, index) => {
      // Creamos un div para cada producto
      const div = document.createElement("div");
      div.classList.add("producto-carrito");

      // Insertamos el nombre, el precio y un boton para eliminar el producto
      div.innerHTML = `
        <h3>${producto.name}</h3>
        <p>Precio: $${producto.amount}</p>
        <button data-index="${index}" class="eliminar-producto">Eliminar</button>
      `;

      // Agregamos la tarjeta del producto al contenedor
      carritoContainer.appendChild(div);

      // Sumamos el precio de este producto al total
      total += producto.amount;
    });

    // Mostramos el total final calculado
    totalTexto.textContent = `Total: $${total}`;
  }

  // Evento que escucha si se clickeo un boton "Eliminar" dentro del carrito
  carritoContainer.addEventListener("click", (e) => {
    if (e.target.classList.contains("eliminar-producto")) {
      const index = parseInt(e.target.dataset.index); // Tomamos el indice del producto
      carrito.splice(index, 1); // Lo eliminamos del array
      localStorage.setItem("carrito", JSON.stringify(carrito)); // Guardamos el carrito actualizado
      mostrarCarrito(); // Volvemos a renderizar la lista
    }
  });

  // Evento para vaciar todo el carrito al hacer click en el boton
  botonVaciar.addEventListener("click", () => {
    carrito = []; // Vaciamos el array
    localStorage.removeItem("carrito"); // Borramos el item del storage
    mostrarCarrito(); // Limpiamos la vista
  });

  // Cuando la pagina se carga, mostramos lo que haya guardado en el carrito
  mostrarCarrito();
});
