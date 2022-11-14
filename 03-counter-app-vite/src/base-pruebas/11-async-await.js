


export const getImagen = async() => {

    try {

        const apiKey = 'nOCcTwL3ADzLA5DMe7jWMsXPtExNA9J6';
        const resp   = await fetch(`http://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`);
        const { data } = await resp.json(); 

        const { url } = data.images.original;

        return url;

    } catch (error) {
        // manejo del error
        return 'No se encontro la imagen';
    }
    
    
    
}




