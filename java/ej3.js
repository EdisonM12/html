function espar() {
    let numero = parseFloat(document.getElementById("numero").value);
    if (numero % 2 === 0) {
        return "El número " + numero + " es par.";
    } else {
        return "El número " + numero + " es impar.";
    }
}

function mostrarResultado() {
    let resultado = espar();
    document.getElementById("resultado").innerText = resultado;
}