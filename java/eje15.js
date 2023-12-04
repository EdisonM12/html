//ingrese dos frases y compare si son iguales//
function fras(){
    
var frase1 = (document.getElementById("numero1").value);
var frase2 = (document.getElementById("numero2").value);
if (frase1 === frase2){
    return "las frases son iguales";
}
else{
    return "las frases no son iguales";
}
}
function calcularResultado(){
    var resultado= fras();
    document.getElementById("resultado").innerText= resultado

}
