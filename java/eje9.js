function espar(){

var numero1 = parseFloat(document.getElementById("numero1").value)
var numero2 = parseFloat(document.getElementById("numero2").value)
var n3 = numero1 * 703
var n4 = numero2 * numero2 
var n5 = n3 / n4
if (n5 < 18.5){
    return("Su imc es "+n5+ " tiene un peso insuficiente")
}
else
if (n5 >= 18.5 && n5 <= 24.9){
    return("Su imc es "+ n5 + " tiene un peso normal")

}
else
if (n5 => 25 && n5 <= 29.9){
 return ("Su imc es "+ n5 + " tiene sobrepeso")
}
else
if (n5 => 30 ) {
    return ("Su imc es "+ n5 + " tiene obesidad")
}
}
function calcularResultado(){
    var resultado= espar()
    document.getElementById("resultado").innerText = resultado
}