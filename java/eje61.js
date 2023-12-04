//Función sin return para determinar si un número es par o impar.
function calcularResultado(){
var n1 = parseFloat(document.getElementById("numero1").value)
if (n1 % 2 === 0){
    document.getElementById("resultado").innerHTML = ("el numero es par")
}
else{
    document.getElementById("resultado").innerHTML  = ("el numero es impar ")
}

}
