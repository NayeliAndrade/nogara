"use strict"; 

let frutas = ['manzana', 'pera','platano','sandia','coco'];
console.log(frutas);
/* console.log(frutas.toString()); */ /* dato convertido a string */
frutas = frutas.slice(1);

let string1 = frutas.join('*');
console.log(string1);  /* junta */

console.log(string1.length); /* tamaño */ /* propiedad */

console.log(string1.slice(2,5)); /* donde empieza y termina optener porcion*/

console.log(string1.slice(-5,-1)); /* empieza de atras */

console.log(string1.substring(1,4)); /* no acepta numeros negativos */

console.log(string1.replace('m','*')); /* remplaza cosas el primer*/

console.log(string1.toUpperCase());  /* minus */

console.log(string1.toLowerCase()); /* nayus */

console.log(string1.trim()); /* quita espacios en blanco ejem.contraeñas */

let txt1 = 'perro';
let txt2 = 'hasdajd';
/* let txt3 = txt1 + txt2; */
let txt3 = txt1.concat(txt2);
console.log(txt3);

console.log(txt1.charAt(4)); /* trae caracteres  */

console.log(txt1.charCodeAt(4));


console.log(string1.indexOf('manzana')); /* regresa index numero */

console.log(strngs1.includes('m')); /* existe o no */

/* metodos arrays */
let frutas2 = ['manzana', 'pera','platano','sandia','coco'];
console.log(frutas2);

console.log(frutas2.shift()); /* 1er elemento */

console.log(frutas2.unshift('perro')); /* inserta una palabra al inicio y retorna el numero */

console.log(frutas2.pop()); /* elimina ultimo elemento y retorna cual elemento borro*/

delete frutas[0]; /* no utilizar */

console.log(frutas2.splice(3)); /* eliminar */

/* pop, shift, splice elimina */