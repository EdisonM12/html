//Calculadora de sueldo con aumento: Pide al usuario que ingrese su salario
//actual y el porcentaje de aumento que recibirá. Calcula y muestra el nuevo
//salario después del aumento.
function calcularResultado(){
    var n1= parseFloat(document.getElementById("numero1").value)
    var n2 = parseFloat(document.getElementById("numero2").value)
    var res = (n1 * n2)/100
    var tot = ( n1 + res)
if ( n1 < 1500) {
    document.getElementById("resultado").innerHTML= "el salario que obtendra es "+ tot
}
else {
    document.getElementById("resultado").innerHTML= "no se puede realizar un aumento"
}

}





