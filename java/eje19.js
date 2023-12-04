//Calculadora de compra con múltiples artículos: Permite al usuario ingresar el
//precio y la cantidad de varios artículos que está comprando. Calcula el total de
//la compra y aplica un descuento del 10% si el total es mayor a cierta cantidad
//(por ejemplo, $100)
function  calcularResultado(){
    var precio= parseFloat(document.getElementById("numero1").value)
    var cant= parseFloat(document.getElementById("numero2").value)
    var tot = precio * cant
    if (tot > 100){
        document.getElementById("resultado").innerHTML = "el precio sin descuento es $"+ tot; 
        var pt= (tot * 10)/100
        
        document.getElementById("resultado1").innerHTML =  "el precio del descuento es $"+ pt;
        
        var pd = ( tot - pt)
        document.getElementById("resultado2").innerHTML= "el precio total es $"+ pd;
        
    }
    else {
        document.getElementById("resultado").innerHTML = "el precio total es "+ tot;
        document.getElementById("resultado1").innerHTML = " "
        document.getElementById("resultado2").innerHTML = " "
    
    }
    
}
