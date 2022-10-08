// Desestrcuturacion de arrays
const personajes = ['Goku', 'Vegeta', 'Trunks'];

console.log(personajes[0]);
console.log(personajes[1]);
console.log(personajes[2]);

const [p1, p2] = personajes;

console.log(p1);
console.log(p2);



const [, ,p33] = personajes;
console.log(p33);


const retornaArray = () => {
    return ([
        'ABC',
        123
    ]);

}

const arr = retornaArray();
console.log(arr);


const [letras, numeros] = retornaArray();
console.log(letras, numeros);

// Tarea
const usaEstado = (valor) => {
    return [valor, ()=>{console.log(`Hola Mundo ${valor}`)}] ;
}
const arr3 = usaEstado('Goku');
console.log(arr3);

// Llamada a la funcion que está en la posicion 2 del array 
arr3[1]();

//Tarea
// 1- el primer elemento del array se llamara nombre
// 2 - el segundo se llamara set nombre

const  [nombre, setNombre] = usaEstado('Krilim');
console.log(nombre);
setNombre();