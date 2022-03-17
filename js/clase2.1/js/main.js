/* 1.Pedir 3 nombres y su edad correspondiente, para después mandar 
por mensaje al que tiene más edad*/

 var nombre1 = prompt('Escribe tu nombre por favor:');
var edad1 = prompt('Escribe tu edad');
console.log(nombre1 + ' ' + edad1);

var nombre2 = prompt('Escribe tu nombre por favor'); 
var edad2 = prompt('Escribe tu edad');
console.log(nombre2 + ' ' + edad2);

var nombre3 = prompt('Escribe tu nombre por favor');
var edad3 = prompt('Escribe tu edad');
console.log(nombre3 + ' ' + edad3);

if (edad1 > edad2 && edad1 > edad3) {
    console.log('edad 1 es mayor '+ nombre1 + ' '+ edad1);
}else if (edad2 > edad1 && edad2 > edad3){
    console.log('edad 2 es mayor '+ nombre2 + ' '+ edad2);
}else if (edad3 > edad1 && edad3 > edad2){
    console.log('Edad 3 es mayor '+ nombre3 + ' '+ edad3);
}else{
    console.log('son iguales');
} 



/* PORQUE AL COMPARAR 2 NUMEROS PERO CON DIFERENTES CANTIDAD DE DIGITOS PASA ALGO RARO */



/*--2.pedir el nombre del alumno y si:
el nombre es “Pedro” tiene de calificación 8
el nombre es “María” tiene de calificación 10
el nombre es “Juanita” tiene de calificación 7*/

 var nombre4 = prompt('Escribe el nombre del alumno que quieras saber su calificación:'); 

if (nombre4 == 'Pedro'){
    console.log('Pedro tiene 8 de calificación');
}else if (nombre4 == 'María'){
    console.log('María tiene de calificación 10');
}else if (nombre4 == 'Juanita'){
    console.log('Juanita tiene de calificación 7');
}else{
    console.log('Escribe bien, revisa que la inicial del nombre sea con mayúscula y si lleva acento colócalo.');
}  

/*--3.Pedir el número de aciertos en el examen y si:
Más de 30 aciertos es igual a 6
Más de 40 aciertos es igual a 8
Más de 50 aciertos es igual a 10
Menos o igual de 30 aciertos es igual a 5 */

 var aciertos = prompt('Escribe el número de aciertos en el examen: ')
if (aciertos == 30) {
    console.log('Tu calificación es 6');
}else if (aciertos == 40){
    console.log('Tu calificación es 8');
}else if (aciertos == 50){
    console.log('Tu calificación es 10');
}else if (aciertos <= 30){
    console.log('Tu calificación es 5');
}else{
    console.log('Hola');
} 

/* switch (aciertos) {
    case 1: aciertos == 30
        console.log('Tu calificación es 6');
        break;
    case 2: aciertos == 40
        console.log('Tu calificación es 8');
         break;
    case 3: aciertos == 50
        console.log('Tu calificacion es 10');
        break;
    case 4: aciertos == 30
            console.log('Tu calificacion es 5');
        break;
        default:
            console.log('Escribe bien');
} */



/*---4.Pedir dos números y mostrar cual es mayor*/

var num1 = prompt('Escribe un número');
var num2 = prompt('Escribe el segundo número');

if (num1 > num2) {
    console.log('El primer número es mayor' + ', este número escribiste: ' + num1);
}else if ( num1 < num2){
    console.log('El segundo número es mayor' + ', este número escribiste: ' + num2);
}else{
    console.log('Cometiste un error escribe otra vez');
} 


/*---5.Pedir 2 números y mostrar el menor */

var num1 = prompt('Escribe el primer número');
var num2 = prompt('Escribe el segundo número');

if (num1 < num2) {
    console.log('El primero número es menor' + ', este número escribiste: ' + num1);
}else if (num1 > num2){
    console.log('El segundo número es menor' + ', este número escribiste: ' + num2);
}else{
    console.log('Cometiste un error intenta otra vez');
}


/*---6.Preguntar cúal es la contraseña secreta (“Pay de Manzana”)
y si es correcto dejarlo entrar en caso de que no mostrar 
un mensaje de Sigue participando */

var contraseñaSecreta = prompt('¿Cuál es la contraseña secreta?');
if (contraseñaSecreta === 'Pay de manzana') {
    console.log('Puedes pasar');
}else{
    console.log('Sigue participando');
}

/*---7.Crear algoritmo para detectar si un número es par o impar */

var num1 = 1;
var num2 = 2; 
if (num1 % num2 == 0) {
    console.log('es par');
}else if (num1 % num2 == 1){
    console.log('Es impar');
}else{
    console.log('Cometiste un error intenta otra vez');
}

/*---8.Preguntar la edad del usuario y si es mayor de 18 mostrar 
mensaje de que ya puede manejar*/

var usuario = prompt('Escribe tu edad');
if (usuario < 19) {
    console.log('Todavia no puedes manejar');
}else{
    console.log('Ya puedes manejar');
}
