// Arreglo de productos
const productos = [
    { nombre: "Bolsa de cartón", precio: 3 },
    { nombre: "Hilo de botella plástica", precio: 12 },
    { nombre: "Peine de madera", precio: 5 },
    { nombre: "Jabón Natural", precio: 2 },
    { nombre: "Vasos", precio: 18 }
];

// Función para calcular descuento
function calcularDescuento(precio, porcentaje) {
    return precio - (precio * porcentaje / 100);
}

// Mostrar precio con descuento
const productoDescuento = productos[1];
const precioFinal = calcularDescuento(productoDescuento.precio, 20);

document.getElementById("descuento").textContent =
`${productoDescuento.nombre} con 20% de descuento: $${precioFinal.toFixed(2)}`;

// Calcular total de productos
let total = 0;

for (let i = 0; i < productos.length; i++) {
    total += productos[i].precio;
}

document.getElementById("total").textContent =
`Total de todos los productos: $${total}`;

// Evento del botón
document.getElementById("btnPromocion").addEventListener("click", function () {
    document.getElementById("mensajePromo").textContent =
    "¡Promoción! Compra hoy y obtén un 15% de descuento en tu próxima compra.";
});

// Validación del formulario
document.getElementById("formulario").addEventListener("submit", function (event) {

    event.preventDefault();

    const nombre = document.getElementById("nombre").value.trim();
    const correo = document.getElementById("correo").value.trim();
    const mensaje = document.getElementById("mensajeValidacion");

    if (nombre === "") {
        mensaje.textContent = "El nombre es obligatorio.";
        mensaje.className = "error";
        return;
    }

    if (correo === "") {
        mensaje.textContent = "El correo es obligatorio.";
        mensaje.className = "error";
        return;
    }

    if (!correo.includes("@")) {
        mensaje.textContent = "Ingrese un correo válido.";
        mensaje.className = "error";
        return;
    }

    mensaje.textContent = "Formulario enviado correctamente.";
    mensaje.className = "exito";
});
