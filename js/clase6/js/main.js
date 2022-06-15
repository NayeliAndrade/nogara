"use strict"; /* usar modo estricto */

var user = 'Naye';
var btnOn = false; 
var index = 0; 
var button = document.getElementsByTagName('button')[0];
var span2 = document.getElementsByTagName('span')[1];

var colores = ["deeppink", "green", "blue", "blueviolet", "orange", "red", '' ];

function abrirAlert(){
    alert('Bienvenido: ' + user);
}

/* abrirAlert(); para ejecutar la funcion (nombre de la funcion) */

/* hoisting el navegador acomoda el codigo */

/* eventos*/

function color(){
    
    if (btnOn){
        button.style.backgroundColor  ='rgb(226, 138, 49)';
        btnOn=false;
    }else{
        button.style.backgroundColor  = 'green';
        btnOn=true;
    }
}

function cambiarColores(){
    span2.style.backgroundColor = colores[index];
    index++; 
    if (index == colores.length){
        index = 0; 
    }else{
        index++;
    }
}


/* scope desde donde puedes acceder a una variable 
scope local y scope global */

/* div2.innerHTML */
/* div2.innerText */
/* document.getElementsByTagName('body')[0].innerHTML todo*/
/* document.getElementsByTagName('body')[0].innerText texto */

/* div2.innerText=''; modifica texto */
/* div2.innerHTML='<img src="" alt="">;' */
