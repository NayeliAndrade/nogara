/* operadores logicos */
/* && ambas condiciones se cumplen */
/* || una de las 2 se cumple */

var num1 = 4;
var num2 = 8;
var num3 = 1;
/* if (num1 > num2 || num1 < num3) {
    console.log(he);
} */


/* solo puede entrar hombres mayores de edad con mas de 40 dolares */
var generoCliente = 'M';
var dinero = 50; 
var edad = 18; 

/* if (generoCliente = 'H' && edad >= 18 && dinero > 40 ) {
    console.log('puedes entrar');
    if (generoCliente = 'M' && edad >= 18 && dinero > 40) {
        console.log('No puedes entrar eres mujer');
    }
    if (generoCliente = 'H' && edad < 18 && dinero > 40 ) {
        console.log('Eres menor de edad');
    }
} */

/* else if 
elsif*/
/* var aciertos = prompt('Escribe tu numero de aciertos');
if (aciertos >= 30 && aciertos <= 39) {
    console.log('6');
}else if (aciertos >= 40 && aciertos <=50){
    console.log('8');
}else{
    console.log('solo aceptan numeros del 1 al 50');
} */
var aciertos = prompt('Escribe tu numero de aciertos');
aciertos = parseInt(aciertos);
switch (aciertos) {
    case 'c':
        console.log('hhsbd');
        break;
    case 5:
        console.log('Reprobaste');
        break;
    case 30:
        console.log('sacaste 6');    
        break;
    default:
        console.log('hh');
        
}



