"use strict"; 

const animales = [
    'Perro',
    'Gato',
    'Delfin',
    'Perico',
    'Vaca'
];



for (let index = 0; index < animales.length; index++) {
    console.log(animales[index]);
   
}

const animales2 = {
    name1:'Perro',
    name2:'Gato',
    name3:'Delfin',
    name4:'Perico',
    name5:'Vaca'
};

for (const key in animales2) {
    console.log(key,animales2['name1']); /* solo para objetos no importa el orden*/
}

/* nimales2.name1

animales2['name1'] */

for (const iterator of animales) {
    console.log(iterator);              /* solo arrays */
}

const user = 'naye';

for (const iterator of user) {
    console.log(iterator);              
}

/* destructuracion tienes una funcion y lo divides en partes ,componentes y funcionalidades */

/* let animales3 = {
    perro:'nube',

}

animales3.gato ='michi'; */

/* constructor */
/*funcion constructora construye objetos 'es una clase por la 1 letra en mayuscula' */

/* function Animales3(patas,tipo,color,nombre){    
    let animal = {};
    animal.patas= patas;
    animal.tipo= tipo;
    animal.color= color;
    animal.nombre= nombre;
    return animal
}

let pajaro = animal(4,'ave','negro','pajaro'); */

function Animales3(patas,tipo,color,nombre){    
    this.patas = patas;
    this.tipo = tipo;
    this.color = color;
    this.nombre = nombre;
    this.sonido = function(){
        console.log('gluglu');
    }
    this.getpatas = function(){
        return this.patas
    }
    this.setpatas = function(val){
         this.patas = val;
    }
}
/* pez.getpatas() */
/* pez.setpatas(100) */

let pez = new Animales3(0,'agua','negro','pez');
console.log(pez);

pez.tipo = 'acuario';
/* metodos es una fucnion que esta adentro de un objeto */

/* seters,geters, */
/* tarea todo list */
