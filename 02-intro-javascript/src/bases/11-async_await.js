// Async Wait
const getImagenPromesa = () => {
    const promesa = new Promise (( resolve, reject) => {
        resolve('https://sfsdfsdfsdfsd')
    })

    return promesa;
}

getImagenPromesa().then(console.log);

// simplificando las funciones flechasy una unica linea de return nos queda 
// la misma funcion como 

const getImagenPromesa2 = () => 
    new Promise (( resolve, reject) =>  resolve('https://22222222222') );
getImagenPromesa2().then(console.log);

// Aun así es un poco engorroso la lectura de las funciones por lo que vamos a dejarlo d euna forma mas bonita.

// Si ponemos delante de la funcion la palabra async el resutado devulve una promesa

const getImage = async () =>{
    return 'https://33323';
}


console.log ('Esto es devuelto como una promesa' , getImage());
getImage().then(console.log) // es lo m ismo que getImage().then( (url => console.log('La url es ', url)))


const getImagen2 = async () => {

    try {
        const apiKey = 'nOCcTwL3ADzLA5DMe7jWMsXPtExNA9J6';
// Con el await lo que hacemos es hacer syncrono el flujo de esa orden    
        const respuesta = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
        const {data} = await respuesta.json();
        console.log(data);

        const { url } = data.images.original;
        const img= document.createElement('img');
        img.src = url;

        document.body.append( img);
    
    } catch (error) {
        // manejo del error
        console.error(error);
    }
    
}
getImagen2();



