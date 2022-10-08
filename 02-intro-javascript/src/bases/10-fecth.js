// Fecth api
// Ejemplo obtener api key de https://developers.giphy.com/dashboard/?
const apiKey = 'nOCcTwL3ADzLA5DMe7jWMsXPtExNA9J6';
const peticion = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
peticion
    .then(resp => {
         resp.json().then ( data => {
            console.log('1.------');
            console.log(data)
         })
        // console.log(resp);
    })
    .catch(console.warn);

console.log ('.............................');

const peticion2 = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
peticion2
    .then( resp =>  resp.json() )
    
    .then( ({ data }) => {
        console.log('2.------');
        console.log(data.images.original.url);
        const { url } = data.images.original;
        const img= document.createElement('img');
        img.src = url;

        document.body.append( img);


    })
    
    .catch(console.warn);    