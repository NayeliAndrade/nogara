"use strict"; 
/* https://www.w3schools.com/js/js_window.asp */
/* issue alado */
/* window */ /* BOM */
/* metodos de window */
/* window.history.back regresa a la pestaña anterior*/
/* .forward regresa*/
/* .go(numero) se genera un array de las rutas del historial*/

/* appi de geolocalizacion */

document.querySelector('button').addEventListener('click',()=>{
    if (navigator.geolocation){
        navigator.geolocation.getCurrentPosition(showGeo);
    }
});

function showGeo(position){
    console.log(position);
}
/* que es el dominio */
/* location metodos y propiedades de la url */

/* location.reload() refrescar la pagina*/
/* location.href = "http......" */

let pagina = window.open('https....', 'cambia el nombre ventana', 'tamaño')

pagina.close()

window.innerHeight /* resolucion de la ventana */

screen 