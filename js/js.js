

function calcular() {

    // Precio original por entrada
    const PrecioOriginal = 200;

    // Obtener los elementos select
    var cantidadDeEntradas = document.getElementById("Cantidad");
    var descuentoSelect = document.getElementById("selectDescuentos");


    // Obtener los valores seleccionados
    var cantidadEntradas = parseInt(cantidadDeEntradas.value);
    var descuento = parseInt(descuentoSelect.value);


    // Calcular el precio con descuento
    var precioConDescuento = PrecioOriginal - (PrecioOriginal * (descuento / 100));

    // Calcular el precio total
    var precioTotal = cantidadEntradas * precioConDescuento;

    // Mostrar el resultado en el div html
    document.getElementById("resultado").innerText = precioTotal;
}

function Borrar() {
    // Obtener los elementos select
    var resultadoDiv = document.getElementById("resultado");
    var cantidadEntradasSelect = document.getElementById("Cantidad");
    var descuentoSelect = document.getElementById("selectDescuentos");

    // Limpiar el contenido del div
    resultadoDiv.textContent = "";

    // Restablecer los select
    cantidadEntradasSelect.value = "";
    descuentoSelect.selectedIndex = 0;
}
