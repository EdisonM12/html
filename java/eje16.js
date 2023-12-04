// No sobrescribas la variable global document
function calcularResultado(){

let articulo = parseFloat(document.getElementById("numero1").value)
let porcentaje = parseFloat(document.getElementById("numero2").value);
let descuentoCalculado = (articulo * porcentaje) / 100;
let precioConDescuento = articulo - descuentoCalculado;

let descuentoMostrado = descuentoCalculado;
let precioMostrado = precioConDescuento;

document.getElementById("resultado").innerText=("El precio del descuento es " + descuentoMostrado);
document.getElementById("resultado2").innerText=("el precio total es "+ precioMostrado);

}
