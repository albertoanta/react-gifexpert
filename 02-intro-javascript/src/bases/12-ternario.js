// operdor condicional ternario
const activo = true;

let mensaje = '';
if ( activo ){
    mensaje = 'Activo';
}else{
    mensaje = 'inactivo'

}

console.log(mensaje)

const mensaje2 = ( activo ? 'Activo' : 'Inactivo');

console.log(mensaje2)


const mensaje3 = ( ! activo ? 'Activo' : null);
console.log(mensaje3)

const mensaje4 = activo && 'Activo' ;
// es lo mismo que porner en la consola del explorador true && 'Activo' y devueve Activo
// su usa musho en react para poner un mensaje de debugsi se cumple una condicion
console.log(mensaje4)
