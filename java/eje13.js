function quince() {
    var numero1 = parseFloat(document.getElementById("numero1").value);

    if ((numero1 >= 1) && (numero1 <= 15) ){
        return "pertenece ala primera quincena";
    }
    else
    if ((numero1 > 15) && (numero1 <= 31)) {
        return "pertence ala segunda quincena";
        
    }
else{
return "numero no encontrado"
}
}
function calcularResultado(){

var resultado = quince();
document.getElementById("resultado").innerHTML= resultado
}