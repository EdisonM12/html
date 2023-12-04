function calcularResultado() {
    let numero1 = parseFloat(document.getElementById("numero1").value);
    let numero2 = parseFloat(document.getElementById("numero2").value);
    var res = ((numero1 * numero2) / 2);
    var resultadoElemento = document.getElementById("resultado");
    resultadoElemento.innerHTML = "La respuesta es " + res;

    console.log(res);
    // document.write(res);  // Evita usar document.write si es posible
}
