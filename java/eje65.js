function cal(oracion) {
    return oracion.length;
}
function calcularResultado(){
// Ejemplo de uso
var oracion = (document.getElementById("numero1").value);
var cantidadCaracteres = cal(oracion);

document.getElementById("resultado").innerText =  ("La oración tiene " + cantidadCaracteres + " caracteres.");
}