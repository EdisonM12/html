function espar(){
var numero1 = parseFloat(document.getElementById("numero1").value);

if ( numero1 >= 18 ) {
    return ("esta apto para las votaciones")

}
else if (numero1 < 18){
    return ("no esta apto para las votaciones")
}
else
if ( numero1 != SVGAnimatedNumberList){
    return "colocar un numero por favor"
}
}
function calcularResultado(){
    var resultado = espar()
    document.getElementById("resultado").innerText= resultado

}


