// =====================
// Archivo script.js
// Archivo principal que maneja:
// - Mostrar productos
// - Agregar al carrito
// - Mostrar contador del carrito
// - Funcionalidad del menu hamburguesa
// - Toast de bienvenida (solo en index.html)
// =====================

// Espera a que el DOM este completamente cargado antes de ejecutar el codigo
// Esto evita errores si los elementos todavia no estan disponibles

document.addEventListener("DOMContentLoaded", () => {
  // =====================
  // Mostrar productos (si hay un contenedor y variable productos definida)
  // =====================
  const contenedor = document.getElementById("productos-container");

  // Verificamos que exista el contenedor y que la variable "productos" este disponible
  if (contenedor && typeof productos !== "undefined") {
    // Recorremos todos los productos uno por uno
    productos.forEach((producto) => {
      // Creamos un contenedor para cada producto
      const card = document.createElement("div");
      card.classList.add("producto-card");

      // Le insertamos imagen, nombre, descripcion, precio y boton
      card.innerHTML = `
        <img src="${producto.img}" alt="Foto de ${producto.name}: ${producto.description}" class="producto-img" />
        <h2>${producto.name}</h2>
        <p>${producto.description}</p>
        <p><strong>Precio:</strong> $${producto.amount}</p>
        <button class="agregar-carrito" data-id="${producto.id}" aria-label="Agregar ${producto.name} al carrito">Agregar al carrito</button>
      `;

      // Agregamos la tarjeta al contenedor
      contenedor.appendChild(card);
    });

    // =====================
    // Evento para agregar productos al carrito
    // =====================
    contenedor.addEventListener("click", (e) => {
      if (e.target.classList.contains("agregar-carrito")) {
        // Obtenemos el id del producto a partir del boton clickeado
        const id = parseInt(e.target.dataset.id);

        // Buscamos el producto correspondiente
        const producto = productos.find((p) => p.id === id);

        // Traemos el carrito actual desde localStorage (o lo creamos vacio)
        let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

        // Agregamos el producto al carrito
        carrito.push(producto);

        // Lo guardamos de nuevo en localStorage
        localStorage.setItem("carrito", JSON.stringify(carrito));

        // Actualizamos el contador del carrito
        const contadorCarrito = document.getElementById("contador-carrito");
        if (contadorCarrito) {
          contadorCarrito.textContent = carrito.length;
        }

        // Mostramos alerta de confirmacion
        alert(`🛒 ¡\"${producto.name}\" fue agregado al carrito!`);
      }
    });
  }

  // =====================
  // Mostrar cantidad de productos en el carrito al cargar la pagina
  // =====================
  const contadorCarrito = document.getElementById("contador-carrito");
  if (contadorCarrito) {
    const carrito = JSON.parse(localStorage.getItem("carrito")) || [];
    contadorCarrito.textContent = carrito.length;
  }

  // =====================
  // Menu hamburguesa para mobile
  // =====================
  const toggleBtn = document.querySelector(".menu-toggle");
  const navLista = document.querySelector(".nav-lista");

  if (toggleBtn && navLista) {
    toggleBtn.addEventListener("click", () => {
      navLista.classList.toggle("activa");
      const expanded = toggleBtn.getAttribute("aria-expanded") === "true";
      toggleBtn.setAttribute("aria-expanded", !expanded);
    });

    // Cierra el menu cuando se hace click en un enlace
    navLista.querySelectorAll("a").forEach((enlace) => {
      enlace.addEventListener("click", () => {
        navLista.classList.remove("activa");
        toggleBtn.setAttribute("aria-expanded", "false");
      });
    });
  }
});

// =====================
// Toast de bienvenida (solo para index.html)
// =====================
if (window.location.pathname.includes("index.html")) {
  document.addEventListener("DOMContentLoaded", () => {
    const toast = document.getElementById("toast-bienvenida");
    const cerrarBtn = toast?.querySelector(".cerrar-toast");

    if (toast) {
      toast.classList.add("mostrar"); // Mostramos el toast

      // Se oculta automaticamente despues de 3.5 segundos
      const autoHide = setTimeout(() => {
        toast.classList.remove("mostrar");
      }, 3500);

      // Permite cerrar manualmente el toast si el usuario hace click
      cerrarBtn?.addEventListener("click", () => {
        toast.classList.remove("mostrar");
        clearTimeout(autoHide); // Evita que vuelva a intentar cerrarse solo
      });
    }
  });
}
