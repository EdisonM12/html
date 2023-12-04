//Función sin return para imprimir números del 1 al 10
function  calcularResultado(){
    let res = " "
    for (let i = 1; i <= 10; i++){
        res += i+ '<br>'
        document.getElementById("resultado").innerHTML= res
    }

}