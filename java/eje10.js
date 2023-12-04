function espar(){

var numero1 = parseFloat(document.getElementById("numero1").value);
if (numero1 > 0){
    return("el numero es mayor a 0")

}
else
if (numero1 < 0) {
    return("el numero es negativo")

}
else{
    return(" el numero es igual a 0")
}
}
function calcularResultado(){
    var resultado= espar()
    document.getElementById("resultado").innerText= resultado
}
