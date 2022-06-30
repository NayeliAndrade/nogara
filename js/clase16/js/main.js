"use strict"; 

/* sessionStorage.setItem('name','caress'); */ /* crear valores */

/* sessionStorage.getItem('name')  *//* obtienes */

/* es un objeto guardado en el navegador */

/* sessionStorage.setItem('perro','nube') */ /* se brra si cierras */

/* localStorage.setItem('perro2','frida') */ /* alamcena datos */

/* let allUsers = [
    {
    name:'caress',
    pass:'123'
    },
    {
    name:'caress',
    pass:'123'
    },
    {
    name:'caress',
    pass:'123'
    },
    {
    name:'caress',
    pass:'123'
    }
] */

/* let allUsersJson = allUsers.JSON.stringify(allUsers); */ /* convertir a string */

/* const crear = () =>{
    const cont = document.getElementsByTagName('body')[0]
    for (const iterator of allUsers) {
        let element = document.createElement('div')
        element.innerHTML = `
        `
    }
}

const guardar = () =>{
    localStorage.setItem('user', allUsersJson)
} */

/* funcion constructor */

let allUsers = () => [];

const getDataLocal = () =>{
    let usersLocal = localStorage.getItem('userJson');
    allUsers = JSON.parse(usersLocal);
    console.log(usersLocal);
    console.log(usersLocal.length);
    createUI(JSON.parse(usersLocal));
}


const createUI = (usersLocal) => {

    const cont = document.getElementsByTagName('main')[0];
    cont.innerHTML = '';

    for (const user of usersLocal) {
        let element = document.createElement('div');
        element.innerHTML = `
            <p>Nombre: ${user.name}</p>
            <p>Pass: ${user.pass}</p>
        `;
        cont.appendChild(element);
    }

}

const saveDataLocal = () => {
    let data = JSON.stringify(allUsers);
    console.log(data);
    localStorage.setItem('userJson',data);
    getDataLocal();
    /* localStorage.setItem('userArray',allUsers); */

}

function User(name, pass){
    this.name = name;
    this.pass = pass;
}

const createUser = () =>{
    let user = document.getElementById('user').value;
    let pass = document.getElementById('pass').value;

    let newUser = new User(user,pass);
    allUsers.push(newUser);
    saveDataLocal();
}


getDataLocal();