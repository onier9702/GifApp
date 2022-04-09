

export const getGifs = async( categories ) => {
    
    // counter ++;
    const url  = `https://api.giphy.com/v1/gifs/search?limit=5&q=${encodeURI(categories)}&api_key=Qo10jSeHRAJu5fYREThN7S5cEf1iaDdT`;
    const resp = await fetch(url);
    const {data} = await resp.json();
        
    const partImportantGifs = data.map( img => {

        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url,

        }
    });

    return partImportantGifs;
        
}


