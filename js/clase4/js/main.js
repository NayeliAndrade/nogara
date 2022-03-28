/* arreglos son tipos de datos en donde puedes almacenar datos */


/* var cuandoMurioMiBisabuelito = undefined; jamas hacerlo*/
/* null y undefined tipos de datos */

var frutas = [
    'manzana', 
    'pera',
    'naranja',
    'platano'
    ];
console.log(frutas);

/* reasignando */
frutas = [
    'toja',
    'kiwi'
];
console.log(frutas);

/* modificar un elemento */
frutas[0] = 'toronja';
console.log(frutas);

/* agregar nuevos datos */
frutas[2] = 'coco';
frutas[3] = 'piñas'
console.log(frutas);

/* console.log(frutas[0]);
console.log(frutas[1]);
console.log(frutas[2]);
console.log(frutas[3]); */

/* iterador, 
stop y 
como va a ir contando
*/
/* for, forof, forfin, foreach, map, while, dowhile */
for (var contador = 0; contador < 4; contador++){
    console.log(frutas[contador]);   
}
document.write('<br> hola <br> hola');

var imagenes = [
    'img/descargar (1).jpg',
    'img/descargar (2).jpg',
    'img/descargar (3).jpg',
    'img/descargar (4).jpg',
    'img/descargar (5).jpg',
    'img/descargar (6).jpg',
    'img/descargar (7).jpg'
];

for (var index = 0; index <imagenes.length; index++){
    document.write('<img src="'+ imagenes[index]+'">');
}

/* var edad = 12;
var nombre = 'naye';
var casado = true;
var telefono = 151455;
var hijos = false;
preguntar al usuario estos datos
*/
/* var pregunta1 =prompt('colocar tu nombre');
var pregunta2 =prompt('colocar tu edad');
var pregunta3 =prompt('estas casado');
var pregunta4 =prompt('colocar tu telefono');
var pregunta5 =prompt('tienes hijos');

console.log([
    pregunta1[0]=pregunta1,
    pregunta2[1]=pregunta2,
    pregunta3[2]=pregunta3,
    pregunta4[3]=pregunta4,
    pregunta5[4]=pregunta5
    ])
; */
/* confirm */

