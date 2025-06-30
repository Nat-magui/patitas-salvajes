// Array de productos

// Este archivo define un array llamado "productos" con objetos que representan productos individuales.
// Afecta a la pagina productos.html, donde el script usa estos datos para renderizar las tarjetas de productos.

const productos = [
  {
    id: 1, // Identificador unico del producto (sirve para buscarlo luego en el carrito o al hacer clic)
    name: "Ramilletes de Flores Secas", // Nombre del producto (aparece como titulo en la tarjeta)
    description: "Aromático y artesanal, para regalar o decorar.", // Texto descriptivo del producto
    amount: 4000, // Precio del producto. Se usa para mostrarlo y calcular el total en el carrito.
    img: "img/ramilletes-flores.webp" //Imagen ilustrativa del producto

  },
  {
    id: 2,
    name: "Cajoncito con Hierba Gatera - Lupe",
    description: "Perfecto para que tu michi se divierta.",
    amount: 10000,
    img: "img/cajoncito-lupe.webp"
  },
  {
    id: 3,
    name: "Rascador Zoe",
    description: "Rascador vertical compacto para espacios pequeños.",
    amount: 10000,
    img: "img/rascador-zoe.webp"
  },
  {
    id: 4,
    name: "Juguete Cañita con Plumas Elástica",
    description: "Ideal para estimular el instinto de caza.",
    amount: 3000,
    img: "img/cañita-plumas.webp"
  },
  {
    id: 5,
    name: "Mate - Oliver",
    description: "Mate personalizado, hecho a mano.",
    amount: 6500,
    img: "img/mate-oliver.webp"
  },
  {
    id: 6,
    name: "Juguete Pomponcitos - Luchi",
    description: "Pequeños pompones llenos de color para jugar.",
    amount: 2000,
    img: "img/pomponcitos-luchi.webp"
  },
  {
    id: 7,
    name: "Tablita Multiuso - Merlina",
    description: "Tabla de madera versátil para distintos usos.",
    amount: 8000,
    img: "img/tablita-merlina.webp"
  },
  {
    id: 8,
    name: "Cuenquito Lorenzo",
    description: "Cuenquito de cerámica con diseño exclusivo.",
    amount: 7500,
    img: "img/cuenquito-lorenzo.webp"
  },
  {
    id: 9,
    name: "Mantas Peluditas - Pili",
    description: "Manta suave para el descanso de tu mascota.",
    amount: 6500,
    img: "img/manta-pili.webp"
  },
  {
    id: 10,
    name: "Jabón Rosa y Jabonera Gatito - Rufito",
    description: "Jabón artesanal con jabonera de diseño gatuno.",
    amount: 7000,
    img: "img/jabon-rufito.webp"
  },
  {
    id: 11,
    name: "Vela RelaxCat - Bubble",
    description: "Vela aromática pensada para relajar al michi.",
    amount: 3500,
    img: "img/vela-bubble.webp"
  },
  {
    id: 12,
    name: "Kit Bandeja + Comedero Reforzado",
    description: "Set completo para alimentación segura y cómoda.",
    amount: 7500,
    img: "img/kit-bandeja-comedero.webp"
  },
  {
    id: 13,
    name: "Rascador Torre Grande",
    description: "Rascador grande ideal para trepar y descansar.",
    amount: 12000,
    img: "img/rascador-torre-grande.webp"
  },
  {
    id: 14,
    name: "Pelota Interactiva CatPlay",
    description: "Pelota con plumas y luces para horas de juego.",
    amount: 5000,
    img: "img/pelota-catplay.webp"
  },
  {
    id: 15,
    name: "Kit Aromaterapia Michi",
    description: "Set de aceites relajantes aptos para gatos.",
    amount: 9000,
    img: "img/kit-aromaterapia.webp"
  }
];