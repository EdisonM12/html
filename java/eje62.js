function cal(base, altura) {
    var area = base * altura
    return area
    
}
function calcularResultado() {
    var base = parseFloat(document.getElementById("numero1").value)
    var altura = parseFloat(document.getElementById("numero2").value)
    var resultado = cal(base, altura);
    document.getElementById("resultado").innerText= "el area del resctangulo es "+ resultado;
}