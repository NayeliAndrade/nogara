"use strict";
let listaCompleta = [];
let texto = document.getElementById('texto');

let guardarLista = document.getElementsByTagName('ul')[0];
let iconos = document.getElementsByClassName('iconos');

function limpiarInput(texto){
    document.getElementById('texto').value = '';
}

function enviar(){
    let li = document.createElement('li');
    li.textContent = texto.value;
    guardarLista.appendChild(li);
    
    console.log(guardarLista);
    console.log(li);
    limpiarInput(texto);
} 

/* function agregarIconos(){
} */


/* const agregar = texto => {
    listaCompleta.push(texto);
};
console.log(agregar); */

/* function Datos(tarea, estatus){
    this.tarea = tarea;
    this.estatus = estatus;
} */

/* 

if (Datos.estatus === 1) {
    console.log('Haciendo');
}else if (Datos.estatus ===2){
    console.log('Pendiente');
}else if (Datos.estatus ===3){
    console.log('Finalizado');
}else{
    console.log('error');
}

 */

