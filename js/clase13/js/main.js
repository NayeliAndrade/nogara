"use strict"; 

var perro = 'gato'; /* se puede sobreescribir */
console.log(perro);

const URL = 'nogara.dev'; /* aqui no */
const APIKEY = 21511151; /* con mayusculas */



fetch(URL + busqueda + APIKEY);
perro = '';


var num = 22;
console.log(num);
{
    var num2 = 11; 
    console.log(num);
    console.log(num2);
}

/* ecma script 6 */

/* arrow function */
/* herencia prototipal */

function diHola(nombre){
    let msg = 'hola' + nombre ; 
    return msg;
}

let daniel = diHola('daniel');


let mensaje = equis => {
    let msg = 'hola' + equis ; 
    return msg;
}

let naye = equis => 'hola ' + equis + 'shssh';

let perro = (equis1, equis2) => {
    console.log(equis1);
    console.log(equis2);
    return equis1, equis2;
}

let createUser = (user,email,pass,news,addres)=>{
        let objUser = {};
        objUser.name=user;
        objUser.email=email;
        objUser.pass=pass;
        return objUser;
}

let carres = createUser('caress', '@gmail','123');

/* math.random(); */