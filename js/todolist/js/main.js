"use strict";
let listaCompleta = [];
let numero = 0;
let index = 0; 
let numeroColor = 0;
const texto = document.getElementById('texto');

const limpiarInput = (input) =>{
    texto.value = '';
}

const btnEviar = document.getElementsByTagName('button')[0];
btnEviar.addEventListener("click", Datos);

function Datos(){
    console.log(texto.value);
    
    let crearTarea ={
        numero: numero++,
        nombreTarea: texto.value
        }
        listaCompleta.push(crearTarea);
    console.log(JSON.stringify(listaCompleta));
    imprimirEnPantalla();
    limpiarInput(texto.value);
}
    
const imprimirEnPantalla = ()=>{
    const guardarLista = document.getElementsByTagName('ul')[0];
    
    let li = document.createElement('li');
    li.innerHTML = `
    <button class="color" id="estatus_${index}" onclick="estatus(${index})"></button>
    ${listaCompleta[index++].nombreTarea}
    <div class="iconos">
        <span class="editar"><i class="fa-solid fa-pencil"></i></span>
        <span class="iconoBorrar" onclick="borrar()"><i class="fa-solid fa-trash-can"></i></i></span>
        </div>
    `;
    guardarLista.appendChild(li);
}

const estatus = () => {
    let colores = ["red", "yellow", "green"];
    let btnColor = document.getElementsByClassName('color')[0];
    btnColor.style.backgroundColor = colores[numeroColor];
    numeroColor++;
    if (numeroColor === colores.length){
        numeroColor = 0;
    }else{
        numeroColor++;
        numeroColor--;
    }
}

/* const setDatos = (crearTarea) => {
    let datos = JSON.stringify(listaCompleta);
    console.log(datos);
    localStorage.setItem('lista',datos);
    getDatos();
}

const getDatos = () => {
    let bd = localStorage.getItem('lista');
    listaCompleta = JSON.parse(bd);
    console.log(bd);
    console.log(bd.length);
    Datos(JSON.parse(bd));
} */
/* alt + 96 backtics*/