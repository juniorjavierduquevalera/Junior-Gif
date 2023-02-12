
const getGif = async( category ) => {

    const url = `https://api.giphy.com/v1/gifs/search?api_key=UOU44g5R6vdBM2bXRiXbnsiA3Sqc6pNs&q=${category}&limit=12`;
    const resp = await fetch( url );
    const { data } = await resp.json();

    const gif = data.map( img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }));

    return gif;
}

export default getGif
