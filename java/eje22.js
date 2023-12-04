function calcularResultado(){
    var numero = parseFloat(document.getElementById("numero1").value)
    var resultado = ""
    while (numero >= 1) {
        resultado += numero + "\n";
        numero--;
    }
document.getElementById("resultado").innerHTML= resultado
    }
