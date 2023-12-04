
function verdadero() {
    var numero1 = parseFloat(document.getElementById("numero1").value);
    var res = "";
    
    for (var i = 0; i<=10; i++ ) {
     res +=  numero1 + "*"+i+"="+(numero1*i)+ "<br>";
    
    }
    var resultadoElemento = document.getElementById("resultado");
    resultadoElemento.innerHTML = res;
    console.log (res)
}

