function grados(celsius) {
    var grad= (celsius * 9/5) + 32;
    return  grad
    
}
function calcularResultado() {
    var celsius = parseFloat (document.getElementById("numero1").value)
    var res = grados ( celsius );
    document.getElementById("resultado").innerText = res+ " °Fahrenheit"
}