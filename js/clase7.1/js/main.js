"use strict";

function abrir(){
    var desapareceFondo = document.getElementsByClassName('text')[0].style.filter = 'blur(1rem)';
    var desaparece = document.getElementsByClassName('containerPopUp')[0].style.display = 'initial';
}
function cerrar(){
    var aparece = document.getElementsByClassName('containerPopUp')[0].style.display = 'none'
    var apareceFondo = document.getElementsByClassName('text')[0].style.filter = 'blur(0)';
}