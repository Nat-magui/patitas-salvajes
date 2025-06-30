// Mensaje en consola
console.log("¡Bienvenida a Patitas Felices!");

// Mensaje de bienvenida al cargar completamente
window.addEventListener("load", () => {
  alert("Gracias por visitar Patitas Felices 🐱✨");
});

// Espera a que el DOM esté listo
document.addEventListener("DOMContentLoaded", () => {
  // =====================
  // 🔁 Mostrar productos
  // =====================
  const contenedor = document.getElementById("productos-container");

  if (contenedor && typeof productos !== "undefined") {
    productos.forEach((producto) => {
      const card = document.createElement("div");
      card.classList.add("producto-card");

      card.innerHTML = `
        <img src="${producto.img}" alt="Foto de ${producto.name}: ${producto.description}" class="producto-img" />
        <h2>${producto.name}</h2>
        <p>${producto.description}</p>
        <p><strong>Precio:</strong> $${producto.amount}</p>
        <button class="agregar-carrito" data-id="${producto.id}" aria-label="Agregar ${producto.name} al carrito">Agregar al carrito</button>
      `;

      contenedor.appendChild(card);
    });

    // Evento para agregar al carrito
    contenedor.addEventListener("click", (e) => {
      if (e.target.classList.contains("agregar-carrito")) {
        const id = parseInt(e.target.dataset.id);
        const producto = productos.find((p) => p.id === id);

        let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
        carrito.push(producto);
        localStorage.setItem("carrito", JSON.stringify(carrito));

        const contadorCarrito = document.getElementById("contador-carrito");
        if (contadorCarrito) {
          contadorCarrito.textContent = carrito.length;
        }

        alert(`🛒 ¡"${producto.name}" fue agregado al carrito!`);
      }
    });
  }

  // =====================
  // 🧮 Contador al cargar
  // =====================
  const contadorCarrito = document.getElementById("contador-carrito");
  if (contadorCarrito) {
    const carrito = JSON.parse(localStorage.getItem("carrito")) || [];
    contadorCarrito.textContent = carrito.length;
  }

  // =====================
  // 🍔 Menú hamburguesa
  // =====================
  const toggleBtn = document.querySelector(".menu-toggle");
  const navLista = document.querySelector(".nav-lista");

  if (toggleBtn && navLista) {
    toggleBtn.addEventListener("click", () => {
      navLista.classList.toggle("activa");

      const expanded = toggleBtn.getAttribute("aria-expanded") === "true";
      toggleBtn.setAttribute("aria-expanded", !expanded);
    });

    navLista.querySelectorAll("a").forEach((enlace) => {
      enlace.addEventListener("click", () => {
        navLista.classList.remove("activa");
        toggleBtn.setAttribute("aria-expanded", "false");
      });
    });
  }
});

