"use strict"; 

/* function mensaje(user){
    var mensaje2 = 'hehe ' + user;
    return mensaje2;
}
/* var user = prompt('nombre ');
mensaje(user); */

/* var mensaje1 = mensaje('naye' );*/
/*console.log(mensaje1); */

var allUsers = [];
var usuarios = 0;

function getDataInput(input){
    return input.value
}

function createUser(){
    var newUser = [];
    var inputs = document.getElementsByTagName('input');
    for (let index = 0; index < inputs.length; index++) {
        
        /* newUser[index] = getDataInput(inputs[index]) */
        newUser.push(getDataInput(inputs[index]));
    }
    /* newUser[0] = getDataInput(document.getElementById('text'))
    newUser[1] = getDataInput(document.getElementById('text'))
    newUser[2] = getDataInput(document.getElementById('text'))
    newUser[3] = getDataInput(document.getElementById('text'))
    newUser[4] = getDataInput(document.getElementById('text')) */

    return newUser;
}

function saveAll(){
   /*  allUsers[0] = createUser();
    console.log('hehe'); */
    allUsers.push(createUser())
    console.log(allUsers);
}
