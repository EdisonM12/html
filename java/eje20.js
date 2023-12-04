//Calculadora de impuestos sobre el salario: Solicita al usuario que ingrese su
//salario anual y calcula el impuesto sobre la renta según las siguientes tasas:
// Hasta De $10,001 a $20,000: 1 $10,000: 5% 0%
// Más de $20,000: 15%
function calcularResultado(){
    var n1 = parseFloat(document.getElementById("numero1").value)
    if (n1 < 10000); {
        var im = (n1 * 5)/100
        document.getElementById("resultado").innerHTML= "el total de impuestos a pagar es "+ im;
        var res = n1 - im
        document.getElementById("resultado1").innerHTML= "el salario anual a recibir es "+ res;
    }
    elseif (n1 > 10000 || n1 < 20000); {
        var im = (n1 * 10)/100
        document.getElementById("resultado").innerHTML= "el total de impuestos a pagar es "+ im;
        var res = n1 - im
        document.getElementById("resultado1").innerHTML= "el salario anual a recibir es "+ res;
    }
    
 elseif (n1 >= 20000); {
            var im = (n1 * 15)/100
            document.getElementById("resultado").innerHTML= "el total de impuestos a pagar es "+ im;
            var res = n1 - im
            document.getElementById("resultado1").innerHTML= "el salario anual a recibir es "+ res;
    

}
}



