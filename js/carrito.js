// Mostrar productos guardados y permitir vaciar el carrito
// Espera que todo el HTML este cargado antes de ejecutar el código
document.addEventListener("DOMContentLoaded", () => {

  // Captura el contenedor donde se mostraran los productos en carrito.html
  const carritoContainer = document.getElementById("carrito-container");

  // Captura el elemento que mostrara el total en carrito.html
  const totalTexto = document.getElementById("total");

  // Captura el boton que vacia todo el carrito
  const botonVaciar = document.getElementById("vaciar-carrito");

  // Trae el carrito guardado en localStorage y lo convierte en objeto de JS.
  // Si no existe, se crea como array vacio.
  let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

  // Esta función dibuja los productos en el HTML cada vez que se llama
  function mostrarCarrito() {
    carritoContainer.innerHTML = "";  // Limpia todo antes de dibujar
    let total = 0;                    // Variable para sumar el total

    // Recorre todos los productos guardados en el carrito
    carrito.forEach((producto, index) => {
      // Crea una tarjeta visual para cada producto
      const div = document.createElement("div");
      div.classList.add("producto-carrito");  // Clase de estilo para cada tarjeta

      // Inserta el contenido del producto: nombre, precio, botón eliminar
      div.innerHTML = `
        <h3>${producto.name}</h3>
        <p>Precio: $${producto.amount}</p>
        <button data-index="${index}" class="eliminar-producto">Eliminar</button>
      `;

      // Agrega la tarjeta al contenedor
      carritoContainer.appendChild(div);

      // Suma el precio de este producto al total
      total += producto.amount;
    });

    // Muestra el total calculado en pantalla
    totalTexto.textContent = `Total: $${total}`;
  }

  // Escucha los clics dentro del contenedor de productos
  carritoContainer.addEventListener("click", (e) => {
    // Si el clic fue en un boton con clase "eliminar-producto"
    if (e.target.classList.contains("eliminar-producto")) {
      // Toma el indice del producto a eliminar (se guardo con data-index)
      const index = parseInt(e.target.dataset.index);

      // Lo quita del array usando splice
      carrito.splice(index, 1);

      // Actualiza el carrito en localStorage
      localStorage.setItem("carrito", JSON.stringify(carrito));

      // Vuelve a dibujar el carrito en pantalla
      mostrarCarrito();
    }
  });

  // Cuando se hace clic en el botón "Vaciar carrito"
  botonVaciar.addEventListener("click", () => {
    carrito = [];                         // Vacia el array
    localStorage.removeItem("carrito");  // Borra el dato guardado
    mostrarCarrito();                    // Limpia la vista en pantalla
  });

  // Al cargar la pagina, muestra el contenido actual del carrito
  mostrarCarrito();
});
