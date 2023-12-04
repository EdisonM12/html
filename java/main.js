class ejercicios{
    calcularbono(){
        let salario = 0, años = 0, bono = 0.0, resp
        salario = parseInt(document.getElementById("salario").value)
        años = parseInt(document.getElementById("años").value)
        if (años > 5){
            bono = salario * 0.5
            console.log("Tu bono es de: ",bono)
            document.getElementById("resp").innerHTML = `Tu bono es de: ${bono}`
        }
        else{
            console.log("no recive bono")
            document.getElementById("resp").innerHTML = `no recive bono`
        }
    }
    costoenvio(){
        let distancia = 0, ce = 0, resp
        distancia = parseInt(document.getElementById("distancia").value)
        if (distancia < 50){
            ce = 10
            console.log("La tarifa es de: $",ce)
            document.getElementById("resp").innerHTML = `La tarifa es de: $${ce}`
        }
        else{
            if (distancia >= 50){
                ce = 20
                console.log("La tarifa es de: $",ce)
                document.getElementById("resp").innerHTML = `La tarifa es de: $${ce}`
            }
        }
    }
    lealtad(){
        let compras = 0, des = 0.0, descuento = 0.0, resp
        compras = parseInt(document.getElementById("compras").value)
        if (compras > 500){
            descuento = 0.10
            des = compras * descuento
            console.log("Se aplica descuento")
            document.getElementById("resp").innerHTML = `Se aplica descuento`
            console.log("Su descuento es de: $",des)
            document.getElementById("resp").innerHTML += `<br>Su descuento es de: $${des}`
        }
        else{
            console.log("No se aplica descuento")
            document.getElementById("resp").innerHTML = `No se aplica descuento`   
        }
    }
    volumencompra(){
        let cu = 0, precio = 0.0, descuento = 0.0, total = 0.0, desc = 0.0, resp
        cu = parseInt(document.getElementById("cu").value)
        precio = parseFloat(document.getElementById("precio").value)
        total = precio * cu
        console.log("El total es: ",total)
        document.getElementById("resp").innerHTML = `El total es :${total}`
        if (cu >= 10 && cu <= 50){
            descuento = 0.05
            desc = total * descuento
            console.log("su descuento es de: $",desc)
            document.getElementById("resp").innerHTML += `<br>su descuento es de: $${desc}`
        }
        else{
            if (cu >= 51 && cu <= 100){
                descuento = 0.10
                desc = total * descuento
                console.log("su descuento es de: $",desc)
                document.getElementById("resp").innerHTML += `<br>su descuento es de: $${desc}`
            }
            else{
                if (cu > 100){
                    descuento = 0.15
                    desc = total * descuento
                    console.log("su descuento es de: $",desc)
                    document.getElementById("resp").innerHTML += `<br>su descuento es de: $${desc}`
                }
            }
        }
    }
    horasdeservicio(){
        let horas = 0, costo = 0.0, descuento = 0.0,totalh = 0.0, resp
        horas = parseInt(document.getElementById("horas").value)
        costo = parseFloat(document.getElementById("costo").value)
        totalh = horas * costo
        if (horas > 10){
            descuento = 0.20
            totalh = totalh - descuento
            console.log("El costo total es:",totalh)
            document.getElementById("resp").innerHTML = `El costo total es:${totalh}`
        }
        else{        
            console.log("El costo total es:",totalh)
            document.getElementById("resp").innerHTML = `El costo total es:${totalh}`
        }
    }
    numerospares(){
        let num1 = 0, num2 = 0, suma = 0, c, resp
		num1 = parseInt(document.getElementById("num1").value)
		num2 = parseInt(document.getElementById("num2").value)
		for (c = num1; c <= num2 ;c++){
			if (c % 2 == 0){
				suma += c
            }
        }
		console.log("La suma de los números pares entre ", num1, " y ", num2, " es: ", suma)
        document.getElementById("resp").innerHTML = `La suma de los números pares entre ${num1} y ${num2} es: ${suma}`
    }
    tablaMultiplicar(){
        let vi, vf, tabla, resp, contador;
        vi = 0; vf = 0; tabla = 0; resp = 0;
        vi = parseInt(document.getElementById("desde").value)
        vf = parseInt(document.getElementById("hasta").value)
        tabla = parseInt(document.getElementById("tabla").value)
        contador = vi;
        document.getElementById("resp").innerHTML=`Tabla del ${tabla}`
        while (contador <= vf) {
            resp = contador * tabla;
            console.log(`${contador} * ${tabla} = ${resp}`)
            document.getElementById("resp").innerHTML += `<br>${contador} * ${tabla} = ${resp} `
            contador= contador+1 
        }
    }
    vocales(){
        let pos = 0, cv = 0, frase, resp
        frase = document.getElementById("frase").value
        frase = frase.toLowerCase()
        while (pos < frase.length) {
            if (frase[pos] == 'a' || frase[pos] == 'e' || frase[pos] == 'i' || frase[pos] == 'o' || frase[pos] == 'u') {
                cv = cv + 1
            }
            pos++
        }
        resp = document.getElementById("resp")
        resp.innerHTML = `cantidad vocales: ${cv}`
    }
    digitospalabra(){
        let palabra, pos
        palabra = document.getElementById("palabra").value
        for (pos = 0; pos < palabra.length; pos++){
        console.log(palabra[pos])
        document.getElementById("resp").innerHTML = `${palabra[pos]}`
        }
        console.log("longitud: ",palabra.length)
        document.getElementById("resp").innerHTML = `longitud: ${palabra.length}`
    
    }
    adivinanza(){
        let num,x,al
        al = Math.floor(Math.random() * 10)
        num = parseInt(document.getElementById(num)).value
        x=10
        while (x > 0){
            if (num <= 0 || num > 10){
                console.log("No permitido")
                document.getElementById("resp").innerHTML = `No permitido`
            }
            else{
                if (al == num){
                    console.log("¡Adivinaste el numero! ",al)
                    document.getElementById("resp").innerHTML = `¡Adivinaste el numero! ${al}`
                    x = 0
                }
                else{
                    x = x - 1
                    if (x == 0){
                        console.log("Has fallado")
                        document.getElementById("resp").innerHTML = `Has fallado`
                        console.log("el numero es :",al)
                        document.getElementById("resp").innerHTML += `<br>el numero es: ${al}`
                    }
                }
            }
        }
    }
    alfabeto(){
        let letra, palabra, contador,i
        palabra = document.getElementById("palabra").value
        for (i=1; i < palabra.length; i++){
            if (letra >= "a" || letra <= "z"){
                contador++
            }
        }
        console.log("la palabra ",palabra," tiene ",contador," letras del alfabeto")
        document.getElementById("resp").innerHTML = `la palabra ${palabra} tiene ${i} letras del alfabeto"`
    }
    numerosimpares(){
        let num1 = 0, num2 = 0, suma = 0, c, resp
		num1 = parseInt(document.getElementById("num1").value)
		num2 = parseInt(document.getElementById("num2").value)
        c = num1
		while (c <= num2){
            if (c % 2 == 1){
                suma = suma + c
            }
            c++
        }
		console.log("La suma de los números impares entre ", num1, " y ", num2, " es: ", suma)
        document.getElementById("resp").innerHTML = `La suma de los números impares entre ${num1} y ${num2} es: ${suma}`
    }
    caracteres(){
        let palabra, pos
        palabra = document.getElementById("palabra").value
        for (pos = 0; pos < palabra.length; pos++){
        console.log(palabra[pos])
        document.getElementById("resp").innerHTML = `${palabra[pos]}`
        }
        console.log("longitud: ",palabra.length)
        document.getElementById("resp").innerHTML = `longitud: ${palabra.length}`
    }
    sumadenumeros(){
        let num = 0, suma = 0
        while (num >= 0){
            num = parseInt(prompt(document.getElementById("num"))).value
            if (num >= 0){
                suma = suma + num
            }
            else{
                console.log("Fin de la suma")
                document.getElementById("resp").innerHTML = `Fin de la suma`
            }
        }
        console.log("la suma es: ",suma)
        document.getElementById("resp").innerHTML = `la suma es: ${suma}`
    }
    cuentaregresiva(){
        let num
        num = parseInt(document.getElementById("num")).value
        while (num > 1){
            num = num - 1
            console.log("cuenta regresiva: ",num)
            document.getElementById("resp").innerHTML = `cuenta regresiva: ${num}`
        }
    }
}
let ope = new ejercicios
ope.expresiones()
ope.impuestosalario()
ope.calcularbono()