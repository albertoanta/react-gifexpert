import {getHeroeById} from './bases/08-import_export'
console.log('---------------------');
// Promesas en js
const promesa = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('2 segundos despues')

        // 

        const heroe = getHeroeById(2);
        console.log(heroe);
        resolve(heroe);
       //  reject('No se pudo encontrar el heroe');

    }, 2000);

});


promesa.then((heroe) => {
    console.log('Then de  promesa con  heroe', heroe)
})
.catch(err => console.warn(err))


const getHeroeByIdAsync = (id) => {
    return  new Promise((resolve, reject) => {

        setTimeout(() => {
            console.log('2 segundos despues')

            // 

            const heroe = getHeroeById(id);
            console.log(heroe);
            if (heroe){
                resolve(heroe);
            }
            else{
                reject('No se pudo encontrar el heroe');
            }
            


        }, 2000);
    });
}

    


getHeroeByIdAsync(4)
    .then((heroe) => {
        // console.log
        console.log( heroe) 
        // console.log( ) // es analogo a lo anterior, recibe como parametro el consolo.log lo recibido como then de la promesa
    })
    // .catch(err => console.warn(err))
    .catch(console.warn) // de esta  forma console.warn recoge el parametro que e hadado el cath. es analogo a la línea anterior pero más simplificado