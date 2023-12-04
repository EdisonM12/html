function espar(){


    var numero1 = parseFloat(document.getElementById("numero1").value);
    var numero2 = parseFloat(document.getElementById("numero2").value);
    var numero3 = parseFloat(document.getElementById("numero3").value);
    if (numero1 > numero2 && numero1 > numero3){
        return ("el numero mayor es "+ numero1);
    
    }
    else 
    if (numero2 > numero1 && numero2 > numero3 ){
    return ("el numero mayor es " + numero2); 
    }
    else
    if (numero3 > numero1 && numero3 > numero2 ){
    return ("el numero mayor es " + numero3);
    
    
    }
    }
    function calcularResultado(){
    var resultado = espar()
    document.getElementById("resultado").innerText= resultado
    
    
    }
    