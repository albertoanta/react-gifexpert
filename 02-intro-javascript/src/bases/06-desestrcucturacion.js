// Desestructuración de objetos
// Asignacion desestructurante
const persona = {
    nombre : 'Tony',
    edad :45, 
    clave :'Ironman',
    rango : 'soldado'
};

// const {nombre:nombre2 } = persona; // Está en la variable nombre2
const {nombre, edad, clave } = persona;



console.log(persona.nombre);
console.log(persona.edad);
console.log(persona.clave);

console.log('------ Desestructuracion ------');
console.log(nombre);
console.log(edad);
console.log(clave);

const retornaPersona = (usuario) => {
    console.log(usuario);
    const {nombre, edad, clave } = usuario;
    console.log( edad, clave, nombre);


}

retornaPersona(persona);


const retornaPersona2 = ({ nombre, edad, rango  = 'Capitán'}) => {
    console.log( nombre, edad, rango);

}
retornaPersona2(persona);

const retornaPersona3 = ({ clave, nombre, edad, rango  = 'Capitán'}) => {
    return {
        nombreClave : clave,
        anios : edad
    }
}
const avenger = retornaPersona3(persona);
console.log(avenger);



const retornaPersona4 = ({ clave, nombre, edad, rango  = 'Capitán'}) => { 
      return {
        nombreClave : clave,
        anios : edad,
        latlong: {
            lat: 14.32345,
            long: -12-567

        }
    }
}

const {nombreClave, anios, latlong:{lat, long}} = retornaPersona4(persona);
console.log(nombreClave, anios);
console.log(lat,long);