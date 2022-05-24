"use strict"; 
var total = 0; 
var valorPantalla = '';

var totalAux = 0; 

function limpiarPantalla(){
    valorPantalla = ''; 
    actualizarPantalla(valorPantalla);
}
function limpiarUno(){
    valorPantalla = valorPantalla.slice(0,-1);
    console.log(valorPantalla);
    actualizarPantalla(valorPantalla);
}
function actualizarPantalla(info){
    var pantalla = document.getElementsByClassName('input')[0];
    pantalla.innerHTML = info; 
}

function numeros(num){
    valorPantalla = valorPantalla.toString() + num.toString();
    actualizarPantalla(valorPantalla); 
    valorPantalla.length;
    if (valorPantalla.length===9) {
        alert('Utilizaste máximo de caracteres');
        limpiarPantalla();
    }
}



function valoresRepetidos(){
    limpiarPantalla();
    if(total != 0){
        totalAux = total;

        actualizarPantalla(totalAux);
    }
    console.log(total);
    
}

/* function suma(){
    total = parseFloat(total) + parseFloat(valorPantalla);
    valoresRepetidos(); 
}

function igual(){
    suma();
} */


function operaciones(operadores){
    console.log(operadores);
    
    
               switch(operadores){              
                case '+':
                    total=parseFloat(total) + parseFloat(valorPantalla);
                    document.getElementsByClassName('input')[0].innerHTML = total;
                    console.log(total);
                    limpiarPantalla();
                    break;
                case '-':
                    total=parseFloat(total) - parseFloat(valorPantalla);
                    console.log(total);
                    limpiarPantalla();
                    break;
                case '*':
                    total=parseFloat(total) * parseFloat(valorPantalla);
                    console.log(total);
                    limpiarPantalla();
                    break;
                case '/':
                    total=parseFloat(total) / parseFloat(valorPantalla);
                    console.log(total);
                    limpiarPantalla();
                    break;
                default:
                    break;
            }
            actualizarPantalla(totalAux);    
}