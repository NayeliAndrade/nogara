/* Operaciones básicas, Tipos de datos, Prompt y Alert */

/* 1.Escribir un programa que muestre un prompt donde el usuario ingresa un número, 
luego muestra otro prompt pidiendo otro número, 
finalmente el programa muestra una alerta con el resultado de la suma.*/
/* var numero1 = prompt('Ingresa un número');
numero1 = parseFloat(numero1);
console.log(numero1);

var numero2 = prompt('Ingresa otro numero');
numero2 = parseFloat(numero2);
console.log(numero2);
alert('Resultado de sumar dos números: ' + (numero1 + numero2)); */

/*2.Crear un programa donde el usuario ingrese en un prompt la temperatura
 en Celcius y el programa muestre en una alerta la temperatura en Fahrenheit.*/

/* var temperaturaCelcius = prompt('Ingresa una temperatura en Celcius:');
temperaturaCelcius = parseFloat(temperaturaCelcius);

var temperaturaFarenheit = temperaturaCelcius * 1.8 + 32;
temperaturaFarenheit =parseFloat(temperaturaFarenheit);
alert('Temperatura en Fahrenheit: ' + temperaturaFarenheit + ' °F'); */

/*3.Pedir un número a un usuario a través de un prompt y luego dividirlo por 10,
 ejemplo: 5 / 10 igual 0.5*/

/* var numeroDividido = prompt('Ingeresa un número que quieras dividirlo entre 10: ');
numeroDividido =parseFloat(numeroDividido / 10);
console.log(numeroDividido); */

/* 4.Crear un programa que determine si un número introducido en un Prompt es par o no,
 la respuesta será mostrada en una alerta. */

/*  var numero = prompt('Escribe un número:');
 numero = parseInt(numero);
 if (numero % 2 ==0){
    alert('Es par');
}else{
    alert('Es impar');
}
 */
/* 5.Crear un programa que determine si un número introducido en un Prompt es divisible por 5 o no,
 mostrar el resultado con console.log */
/* var numeroDivisibleCinco = prompt('Ingresa un número');
numeroDivisibleCinco = parseInt(numeroDivisibleCinco);
if (numeroDivisibleCinco % 5 == 0){
    console.log('Es divisible de 5');
}else{
    console.log('No es divisible de 5');
} */
/* Crear un programa que determine si un número introducido en un popup es divisible por 11 y 5 o no, 
mostrar el resultado con console.log */

/* var numero = prompt('Escribe un número');
numero = parseInt (numero);
if (numero % 5 == 0 && numero % 11 == 0){
    console.log('Es divisible entre 5 y 11');
}else{
    console.log('No es divisible');
} */

/* 6.Crear un programa que le pida al usuario dos números en un Prompt y luego muestre en un alerta el número mayor. */

/* var numero1 = prompt('Ingresa un número');
var numero2 = prompt('Ingresa otro número');
numero1 && numero2 == parseInt(numero1 && numero2);
if (numero1 > numero2){
    alert('El numero 1 es mayor que el numero 2');
}else if (numero1 < numero2){
    alert('El numero 2 es mayor al numero 1')
}else if (numero1 = numero2){
    alert('Son iguales')
}else{
    console.log('Escribe otra vez');
}
 */
/* 7.Crear un programa que le pida al usuario primero un números al usuario a través de un prompt
 y luego un segundo número para luego mostrar en un alerta el número mayor, esta vez realizar el ejercicio ocupando un if ternario. */

/* var numero1 = prompt('Escribe un número: ');
var numero2 = prompt('Escribe un número: '); 
numero1 = parseInt(numero1);
numero2 = parseInt(numero2); 
var mayor; 
if (numero1 > numero2 ? mayor = numero1 : mayor = numero2){
    alert('El valor mayor es: '+ mayor); 
} */


/* 8.Crear un programa que determine si un string introducido por un usuario empieza con un número o con una letra. */

/* var letraNumero = prompt('Ingresa una palabra o número');
if (letraNumero ===''){
    console.log('String');
}else if (letraNumero === 1){
    console.log('Numero');
} */

/* Crear un programa donde se introduzcan los tres ángulos internos de un triángulo y se determine si el triángulo es válido o no */

/* Determinar si una palabra empieza con mayúscula o no */
/* var palabra = prompt('Ingresa uan palabra'); 
if (palabra === 'P'){
    console.log('Es mayuscula');
}else{
    console.log('Es minuscula');
} */

/* 9.Mostrar todos los números de 1 a n aumentando de 1 en 1 donde n lo ingresa el
 usuario en un prompt. */
/* var numeroIngresadoPorElUsuario = prompt('Ingrese un número: ');
numeroIngresadoPorElUsuario = parseFloat(numeroIngresadoPorElUsuario);

for (var numeroDeRepeticion = 1; numeroDeRepeticion <= numeroIngresadoPorElUsuario; numeroDeRepeticion++){
    console.log(numeroDeRepeticion);
} */