import { useFectchGifts } from "../hooks/useFectchGifts";
import { GiftItem } from "./GiftItem";


export const GiftGrid = ({category}) => {

    const {images, isLoading} = useFectchGifts(category);
    

    return (
        <>
            <h3>{category}</h3>
            {
                isLoading && (<h1>Cargando..</h1>) 
            }
            <div className="card-grid">
                {
                    images.map( (image) => (
                       <GiftItem 
                            key={image.id} 
                            title={image.title}
                            url={image.url}
                       />
                    ))
                }
            </div>
        </>
    ) 
}
