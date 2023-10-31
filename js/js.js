

document.addEventListener("DOMContentLoaded", function() {

      // Precio original por entrada
    const PrecioOriginal = 200

        // Obtener los elementos select
    var cantidadDeEntradas = document.getElementById("selectCantidad");
    var descuentoSelect = document.getElementById("selectDescuentos");
    var resultadoDiv = document.getElementById("resultado");


    // Función para calcular el descuento y mostrar el resultado
function calcular() {
    
      // Obtener los valores seleccionados
    var cantidadEntradas = parseInt(cantidadDeEntradas.value);
    var descuento = parseInt(descuentoSelect.value);


        // Calcular el precio con descuento
    var precioConDescuento = PrecioOriginal - (PrecioOriginal * (descuento / 100));

      // Calcular el precio total
    var precioTotal = cantidadEntradas * precioConDescuento;

    // Mostrar el resultado en el div html
    document.getElementById("resultado").innerText = precioTotal;
    resultadoDiv.textContent = precioTotal;

}
  // Agregar un evento de cambio a los select para llamar a la función calcular
    cantidadDeEntradas.addEventListener("change", calcular);
    descuentoSelect.addEventListener("change", calcular);
})
