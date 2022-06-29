let contador = true;

const navDisplay = () =>{
    let btnNav = document.getElementsByClassName('btnnav')[0];
    btnNav.addEventListener("click", verNav);
    
    function verNav(){
        let nav = document.getElementsByTagName('nav')[0];
        
        if (contador === true){
            nav.style.display = 'flex';
            contador = false;
        }else{
            nav.style.display = 'none';
            contador = true;
        }

    }
    
}

navDisplay();

const cambiarColor = () =>{
    let btnColor = document.getElementsByClassName('bgc')[0];
    btnColor.addEventListener("click", cambiarBGC);

    function cambiarBGC(){
        let body = document.getElementsByTagName('body')[0];

        if (contador === true){
            body.style.backgroundColor = 'rgb(4 5 6)';
            contador = false;
        }else{
            body.style.backgroundColor = 'rgb(241 234 234 / 21%)';
            contador = true;
        }

    }

}

cambiarColor();