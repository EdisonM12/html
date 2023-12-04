//const Leer = require('prompt-sync')()
class Ejercicio1{
    Ejercicio51(){
        // Obtener el valor de la entrada
    const entrada = document.getElementById('numeros').value;

    // Convertir la entrada en un arreglo de números
    const numeros = entrada.split(',').map(num => parseInt(num.trim()));

    // Verificar si todos los elementos son números
    if (numeros.every(num => !isNaN(num))) {
        // Calcular la suma de los elementos
        const suma = numeros.reduce((acc, num) => acc + num, 0);

        // Mostrar el resultado
        document.getElementById('resultado').textContent = `La suma de los elementos es: ${suma}`;
    } else {
        // Mostrar un mensaje de error si la entrada no es válida
        document.getElementById('resultado').textContent = 'Ingrese números válidos separados por coma.';
    }
    }
    Ejercicio55(){
        // Obtener el valor del número ingresado
    const numero = document.getElementById('numero').value;

    // Verificar si el número es válido
    if (!isNaN(numero) && numero !== '') {
        // Convertir el número a cadena para iterar sobre sus dígitos
        const numeroComoCadena = numero.toString();

        // Inicializar el contador de dígitos pares
        let contadorPares = 0;

        // Iterar sobre cada dígito y contar los pares
        for (let i = 0; i < numeroComoCadena.length; i++) {
            const digito = parseInt(numeroComoCadena[i]);
            if (!isNaN(digito) && digito % 2 === 0) {
                contadorPares++;
            }
        }

        // Mostrar el resultado
        document.getElementById('resultado').textContent = `Número de dígitos pares: ${contadorPares}`;
    } else {
        // Mostrar un mensaje de error si el número no es válido
        document.getElementById('resultado').textContent = 'Ingrese un número válido.';
    }
    }
    Ejercicio56(){
        // Obtener el valor del arreglo ingresado por el usuario
    const arregloIngresado = document.getElementById('arreglo').value;

    // Convertir la entrada en un arreglo de números
    const arreglo = arregloIngresado.split(',').map(num => parseInt(num.trim()));

    // Verificar si todos los elementos son números
    if (arreglo.every(num => !isNaN(num))) {
        // Invertir el orden del arreglo
        const arregloInvertido = arreglo.reverse();

        // Mostrar el resultado
        document.getElementById('resultado').textContent = `Arreglo invertido: [${arregloInvertido.join(', ')}]`;
    } else {
        // Mostrar un mensaje de error si la entrada no es válida
        document.getElementById('resultado').textContent = 'Ingrese números válidos separados por coma.';
    }
    }
    Ejercicio52() {
        let resp, pro, acu = 0, pos, lon,notas 
        //numeros = [10,20,40,50]
        notas = document.getElementById("notas").value
        notas = notas.split(";")
        lon = notas.length
        for (pos = 0; pos < lon; pos++) {
            acu = acu + parseFloat(notas[pos])
        }
        pro = acu / lon
        pro = Math.round(pro * 100) / 100;
        resp = document.getElementById("resp")
        resp.innerHTML = `Promedio de Notas:[${notas}] = ${pro}`
    }
    Ejercicio58() {
         // Obtener el valor del campo de nombre
    const nombre = document.getElementById('nombre').value;

    // Verificar si se ingresó un nombre
    if (nombre.trim() !== '') {
        // Mostrar un mensaje de saludo
        const mensaje = `¡Hola, ${nombre}! Bienvenido.`;
        document.getElementById('mensajeSaludo').textContent = mensaje;
    } else {
        // Mostrar un mensaje predeterminado si no se ingresó un nombre
        const mensaje = '¡Hola! Bienvenido.';
        document.getElementById('mensajeSaludo').textContent = mensaje;
    }
    }
     Ejercicio60(num1, num2) {
        let resul = 0
        resul = num1 * num2
        return resul
    }

     Ejercicio59() {
        // Obtener los valores de los números ingresados por el usuario
        const numero1 = parseFloat(document.getElementById('numero1').value);
        const numero2 = parseFloat(document.getElementById('numero2').value);
    
        // Verificar si se ingresaron números válidos
        if (!isNaN(numero1) && !isNaN(numero2)) {
            // Calcular la suma de los números
            const suma = numero1 + numero2;
    
            // Mostrar el resultado
            document.getElementById('resultado').textContent = `La suma es: ${suma}`;
        } else {
            // Mostrar un mensaje de error si no se ingresaron números válidos
            document.getElementById('resultado').textContent = 'Ingrese números válidos.';
        }
    }
    Ejercicio57(){
       // Obtener el valor ingresado por el usuario
    const valorIngresado = parseInt(document.getElementById('valor').value);

    // Verificar si el valor es un número válido
    if (!isNaN(valorIngresado)) {
        // Encontrar los índices del valor en el arreglo
        const indices = [];
        for (let i = 0; i < arreglo.length; i++) {
            if (arreglo[i] === valorIngresado) {
                indices.push(i);
            }
        }

        // Mostrar el resultado
        if (indices.length > 0) {
            document.getElementById('resultado').textContent = `Índice(s) del valor ${valorIngresado}: ${indices.join(', ')}`;
        } else {
            document.getElementById('resultado').textContent = `El valor ${valorIngresado} no está presente en el arreglo.`;
        }
    } else {
        // Mostrar un mensaje de error si el valor no es válido
        document.getElementById('resultado').textContent = 'Ingrese un valor válido.';
    } 
    }
    Ejercicio53(){
      // Obtener el valor de la entrada
    const entrada = document.getElementById('numeros').value;

    // Convertir la entrada en un arreglo de números
    const numeros = entrada.split(',').map(num => parseInt(num.trim()));

    // Verificar si todos los elementos son números
    if (numeros.every(num => !isNaN(num))) {
        // Encontrar el valor máximo y mínimo
        const maximo = Math.max(...numeros);
        const minimo = Math.min(...numeros);

        // Mostrar el resultado
        document.getElementById('resultado').textContent = `Máximo: ${maximo}, Mínimo: ${minimo}`;
    } else {
        // Mostrar un mensaje de error si la entrada no es válida
        document.getElementById('resultado').textContent = 'Ingrese números válidos separados por coma.';
    }  
    }
    Ejercicio54(){
      // Obtener el valor del número ingresado por el usuario
    const numeroIngresado = parseInt(document.getElementById('numero').value);

    // Verificar si el número es un número válido
    if (!isNaN(numeroIngresado)) {
        // Verificar si el número está presente en el arreglo
        if (arreglo.includes(numeroIngresado)) {
            document.getElementById('resultado').textContent = `El número ${numeroIngresado} está presente en el arreglo.`;
        } else {
            document.getElementById('resultado').textContent = `El número ${numeroIngresado} no está presente en el arreglo.`;
        }
    } else {
        document.getElementById('resultado').textContent = 'Ingrese un número válido.';
    }  
    }

    

    
}
let ope = new Ejercicio1() //crea una variable igual que la clase
//ope.multiplo()
//ope.tablaMultiplicar()

