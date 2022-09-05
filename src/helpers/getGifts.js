export const getGifts = async (category) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=0IIB9oxwwpUqd3We6tMGPjDJ4OVdQj3y&q=${category}&limit=20`;
    const response = await fetch(url);
    const { data } = await response.json();

    return data.map( image => ({
        id: image.id,
        title: image.title,
        url: image.images.downsized_medium.url
    }))
}
