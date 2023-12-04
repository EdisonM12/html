//Calculadora de factura con impuestos: Solicita al usuario que ingrese el total
//de una factura y el porcentaje de impuestos aplicado. Luego, calcula y muestra
//el monto total a pagar, incluyendo los impuestos.\\

function calcularResultado(){
    var n1 = parseFloat(document.getElementById("numero1").value)
    var imp = (n1 * 12) / 100
    var res = n1 + imp
    document.getElementById("resultado").innerHTML = "los impuestos en total es "+ imp
    document.getElementById("resultado1").innerHTML= "el total a pagar es "+ res
}