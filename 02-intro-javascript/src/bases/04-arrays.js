// Arrays en JS
// const arreglo = new Array(100);
// const arreglo =[];
// El mtedo push modifica el objeto principal
// arreglo.push(1);
// arreglo.push(2);
// arreglo.push(3);
// arreglo.push(4);

const arreglo =[1,2,3,4];

// La operacion = lo que hace es asignar a misma direccion de memoria
// let arreglo2 = arreglo;
// arreglo2.push(5);

// De esta forma copiamos los valores  (operador spread) y añadimos el nuevo valor
let arreglo2 = [...arreglo, 5];

const arreglo3 = arreglo2.map(function (numero){
    return numero *2;
});




console.log(arreglo);
console.log(arreglo2);
console.log(arreglo3);


