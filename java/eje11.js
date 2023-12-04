function esBisiesto() {
   
// Solicitar al usuario el año
var numero1 = parseFloat(document.getElementById("numero1").value)
var div = (numero1 % 4 === 0 && numero1 % 100 !== 0) || (numero1 % 400 === 0)

// Verificar si el año es bisiesto
if (div) {
    return(numero1 + " es un año bisiesto.");
} else {
    return(numero1 + " no es un año bisiesto.");
}
}
function calcularResultado(){
var resultado = esBisiesto()
document.getElementById("resultado").innerText= resultado

}