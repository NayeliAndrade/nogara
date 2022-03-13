/* Operadores de comparacion */
var num1 = 12;
var num2 = 76;
/* mayor, menor , igual */
/* console.log(num1 > num2); */
console.log(num1 < num2);
console.log(num1 == num2);

/* diferente de != */
console.log(num1 != num2);

/* mayor o igual que >*/
/* Menor o igual que < */
var EdadCliente = 18;
var EdadMinima = 18;
if (EdadCliente >= EdadMinima) {
    console.log('Mayor o igual');
}

if (EdadCliente <= EdadMinima) {
    console.log('Menor o igual');
}

/* igual que estricto === */
var num1 = '12';
var num2 = 12;
console.log(num1 === num2);

/* 1 verdadero en binario */
/* 0 falso */

/* diferente de estricto */
var num1 = '12';
var num2 = 12;
console.log(num1 !== num2);

/* operadores logicos
/* && */
var mensaje = true;/* mandar mensaje */
var visto = false;/* si me dejo en visto */
var leGusto = ''; 
if (mensaje == true && visto == false) {
    legusto = true;
    console.log('le gusto');
}else{
    console.log('Echale ganas');
}

/* if (mensaje == false && visto == false) {
    legusto = false;
    console.log('le gusto');
} */