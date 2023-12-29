import Card from "../Card"
import "./Gallery.scss";

import data from "../../assets/logements.json";

function Gallery () {
    return (
        <div className="galleryContainer">
            {data.map((item) =>
                <Card 
                    key={item.id}
                    img={item.cover}
                    description={item.description}
                    title={item.title}
                />
            
            )}
        </div>
    )
}

export default Gallery;
