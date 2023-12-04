function calcularResultado() {
    var numero1 = document.getElementById("numero1").value;
    var numero2 = document.getElementById("numero2").value;
    var res = numero1+" "+ numero2;

    var resultadoElemento = document.getElementById("resultado");
    resultadoElemento.innerHTML = "Resultado: " + res;

    console.log(res);

}
