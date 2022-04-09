"use strict"; /* usar modo estricto */

/* document.getElementById('entrada').id */ /* seleccion elemento */
/* document.getElementsByTagName('button')[0].id ='btn'; */ /* modificar id */

/* document.getElementById('entrada').value = 'hola'  *//* modificar valor */

/* var element = document.createElement('div'); */
/* Container.appendChild(element)  *//* elementos */ /* inyecta */
/* inner solo string */
/* element.innerHTML = '<span>'+ value +'</span>' */


var notas = '';
function clearInput(){
    document.getElementById('entrada').value = '';
}

/* function getInfo(){
    var value = document.getElementById('file').value;
    var container = document.getElementsByClassName('cards')[0];

    var element = document.createElement('div');
    element.innerHTML = '<img src=" ' + value + '">'

    container.appendChild(element);

    console.log('value: ' + value);
    clearInput();
} */

function getInfo(){
    var value = document.getElementById('entrada').value;
    var container = document.getElementsByClassName('cards')[0];

    notas = notas + '<div>'+  value + '</div>' ;
    container.innerHTML = notas;
    console.log('value: ' + value);
    console.log('notas: ' + notas);
    clearInput();
}