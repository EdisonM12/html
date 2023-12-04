//Función con parámetros y return para sumar una lista de números.

function sumarNumeros(lista) {
    let suma = 0;

    // Iterar sobre la lista y sumar cada número
    for (let i = 0; i < lista.length; i++) {
        
        suma += +lista[i];
    }

    // Devolver el resultado de la suma
    return suma;
}

function calcularResultado() {
    let lista = [1,2,3,4,5,6]
    let res = sumarNumeros(lista);
    document.getElementById("resultado").innerText = res;
}
