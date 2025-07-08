// =====================
// Archivo api-productos.js
// Este archivo hace lo siguiente:
// - Pide productos desde una API externa
// - Crea las tarjetas con los datos recibidos
// - Permite agregarlos al carrito y guarda esa info en localStorage
// - Actualiza el contador del carrito
// =====================

document.addEventListener("DOMContentLoaded", () => {
  // Buscamos el contenedor donde vamos a poner los productos
  const contenedor = document.getElementById("api-productos-container");

  // =============================
  // 1. TRAER PRODUCTOS DESDE UNA API EXTERNA (dummyjson.com)
  // =============================

  // Usamos fetch para pedir 12 productos a la API
  fetch("https://dummyjson.com/products?limit=12")
    .then((res) => res.json()) // Convertimos la respuesta en JSON
    .then((data) => {
      // Recorremos los productos recibidos uno por uno
      data.products.forEach((producto) => {
        // Creamos una tarjeta para cada producto
        const card = document.createElement("div");
        card.classList.add("producto-card");

        // Agregamos contenido a la tarjeta (imagen, nombre, descripcion, precio y boton)
        card.innerHTML = `
          <img src="${producto.thumbnail}" alt="${producto.title}" class="producto-img" />
          <h2>${producto.title}</h2>
          <p>${producto.description.slice(0, 60)}...</p>
          <p><strong>Precio:</strong> $${producto.price}</p>
          <button 
            class="agregar-carrito" 
            data-id="${producto.id}" 
            data-title="${producto.title}" 
            data-price="${producto.price}" 
            data-img="${producto.thumbnail}">
            Sumar al carrito 🛒
          </button>
        `;

        // Metemos la tarjeta dentro del contenedor
        contenedor.appendChild(card);
      });
    });

  // =============================
  // 2. AGREGAR PRODUCTOS AL CARRITO USANDO LOCALSTORAGE
  // =============================

  // Escuchamos todos los clicks dentro del contenedor
  contenedor.addEventListener("click", (e) => {
    // Si se clickeo un boton que dice "Agregar al carrito"
    if (e.target.classList.contains("agregar-carrito")) {
      // Armamos un objeto con los datos del producto desde el boton
      const producto = {
        id: parseInt(e.target.dataset.id),
        name: e.target.dataset.title,
        amount: parseFloat(e.target.dataset.price),
        img: e.target.dataset.img,
        description: "Producto de API"
      };

      // Buscamos si ya hay carrito guardado
      let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

      // Agregamos el nuevo producto
      carrito.push(producto);

      // Guardamos el carrito actualizado
      localStorage.setItem("carrito", JSON.stringify(carrito));

      // Actualizamos el numerito del carrito
      const contador = document.getElementById("contador-carrito");
      if (contador) contador.textContent = carrito.length;

      // Mostramos mensaje de confirmacion
      alert(`🛒 "${producto.name}" agregado al carrito`);
    }
  });

  // =============================
  // 3. MOSTRAR CANTIDAD EN EL CARRITO AL CARGAR LA PAGINA
  // =============================

  const contador = document.getElementById("contador-carrito");
  if (contador) {
    const carrito = JSON.parse(localStorage.getItem("carrito")) || [];
    contador.textContent = carrito.length;
  }
});
