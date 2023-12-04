function frase(){
var dia = parseFloat(document.getElementById("numero1").value)
switch (dia) {
    case 1:
        return ("el dia es lunes")
        break;
    case 2:
        return ("el dia es martes")
        break;
    case 3:
        return ("el dia es miercoles")
        break;
    case 4:
        return ("el dia es jueves")
        break;
    case 5:
        return ("el dia es viernes")
        break;
    case 6:
        return ("el dia es sabado")
        break;
    case 7:
        return ("el dia es domigo")
        break;


    default:
        return ("no existe ese dia ")
        
}
}

function calcularResultado(){
var resultado= frase()
document.getElementById("resultado").innerText= resultado


}


