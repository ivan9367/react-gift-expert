import { useEffect, useState } from "react";
import { getGifts } from "../helpers/getGifts";

export const useFectchGifts = (category) => {

    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setTimeout(function(){
            getGifts(category).then( newImages => setImages(newImages));
            setIsLoading(false);
        }, 2000);
       
    }, []);
    

    return {
        images: images,
        isLoading: isLoading
    }
}
