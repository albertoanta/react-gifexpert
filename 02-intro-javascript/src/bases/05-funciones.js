// Funciones en js
// function saludar (nombre){
//     return `Hola ${nombre}`;
// }


// saludar =30;

//  console.log(saludar('Goku'));
// console.log(saludar);


const saludar = function (nombre){
    return `Hola ${nombre}`;
}

console.log(saludar('Goku'));


// Funciones flecha o lambda
const saludar2 =  (nombre) => {
    return `Hola ${nombre}`;
}
console.log(saludar2('Vegueta'));


// Solo si tiene una única línea se puede obviar el return
const saludar3 = (nombre) => `Hola ${nombre}`;
console.log(saludar3('Krilim'));


const saludar4 = () => `Hola mundo`;
console.log(saludar4());


const getUser = () =>{
    return {
        uid: 'abc123',
        username:'el_papi_01'
    }
}

console.log(getUser());

// Si se pone funcion flecha y despues de la flechase pone parentesis vale para simular todo el cuerpo de la funcion
const getUser2 = () =>
    ({
        uid: 'abc123',
        username:'el_papi_01'
    })

console.log(getUser2());



// const user5 = getuser5();
// console.log(user5);


function getusuarioActivo (nombre){
    return {
        uid: 'abc4567',
        username:nombre
    }
}

const usuarioActivo = getusuarioActivo('Fernando');
console.log(usuarioActivo);

// Tarea 
// 1. Trasnformar getusuarioActivo a una funcion de flecha
// 2. Retornar un objeto implicito
// 3. Pruebas

const getusuarioActivo2 = (nombre) => (
    {
        uid: 'abc4567',
        username:nombre
    }
)
console.log(getusuarioActivo2('Alberto'));
