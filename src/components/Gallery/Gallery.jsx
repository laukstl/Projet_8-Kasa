import Card from "../Card"
import "./Gallery.scss";
import { Link } from 'react-router-dom';

import data from "../../assets/logements.json";

function Gallery () {
    return (
        <div className="galleryContainer">
            {data.map((item) => (
                <Link key={item.id} to={`/logement/${item.id}`}>
                        <Card 
                            key={item.id}
                            obj={item}
                        />
                </Link>
            ))}
        </div>
    )
}

export default Gallery;
