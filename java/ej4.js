function calcularResultado(){
var numero1 = parseFloat(document.getElementById ("numero1").value);
var numero2 = parseFloat(document.getElementById ("numero2").value);
var suma = numero1 + numero2;
var resta = numero1 - numero2;
var div = numero1 * numero2;
var multi = numero1 / numero2;
var resultadoElemento = document.getElementById ("resultado")
var resultadoElemento1 = document.getElementById ("resultado1")
var resultadoElemento2 = document.getElementById ("resultado2")
var resultadoElemento3 = document.getElementById ("resultado3")


resultadoElemento.innerHTML = "la suma es "+ suma;
resultadoElemento1.innerHTML = "la resta es "+ resta;
resultadoElemento2.innerHTML = "la multiplicacion es "+ div;
resultadoElemento3.innerHTML = "la division es "+ multi;
console.log(suma)
console.log(resta)
console.log(div)
console.log(multi)




}







