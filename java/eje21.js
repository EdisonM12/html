function calcularResultado(){
    var n1 = parseFloat(document.getElementById("numero1").value)
    var total= n1 * 10
    if (n1 >= 10) {
        var mult = (total * 10)/100
        var tt = total - mult
        document.getElementById("resultado").innerHTML = "el costo total es "+tt;
        document.getElementById("resultado1").innerHTML= "el descuento es "+ mult;
        
    }
    else{
        document.getElementById("resultado").innerHTML= "no se realiza ningun descuento, el precio total es "+ total
        document.getElementById("resultado1").innerHTML= " "
    }
}