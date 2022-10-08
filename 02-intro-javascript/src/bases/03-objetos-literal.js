const persona = {
    nombre : 'Tony',
    apellido : 'Stark',
    edad: 45,
    direccion :{
        ciudad : 'New York',
        zip: 45454545,
        lat: 14.232,
        lot: 34.6767


    }
}


// console.table ({persona});
console.log ({persona});

// Se crea una nueva variable que hace referencia a la anterior. Cualquier cambio se propaga a todas las variables
const persona2 = persona;

// Se clona todo el objeto en una nueva variable independiente. 
const persona3 = {...persona};

console.log ({persona2});
persona2.nombre = 'Peter';

console.log ({persona3});


