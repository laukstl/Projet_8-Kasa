import './Carrousel.scss';
import leftArrow from "../../assets/svg/leftArrow.svg";
import rightArrow from "../../assets/svg/rightArrow.svg";
import { useState } from 'react';

function Carrousel({ pictures, title }) {

    // nombre total d'images du carrousel
    const numbersOfPictures = pictures.length;

    // état local de l'image actuelle affichée
    const [index, setIndex] = useState(0);

    // état local de visibilité de l'image ( pendant l'animation )
    const [visible, setVisibility] = useState(true);

    const handleLeftArrowClick = () => {
        setVisibility(false);

        setTimeout(() => {
            setIndex((prevIndex) => {
                // gestion de boucle: méthode 1 ( avec un if )
                // gestion de la boucle si l'index atteint la première image
                if (prevIndex === 0) {
                    return numbersOfPictures - 1;
                }
                return prevIndex - 1;
            });
            setVisibility(true);
        }, 250);
    };

    const handleRightArrowClick = () => {
        setVisibility(false);

        setTimeout(() => {
            // gestion de boucle: méthode 2 ( avec un remainder )
            setIndex((prevIndex) => (prevIndex + 1) % numbersOfPictures);
            setVisibility(true);
        }, 250);
    };

    // cache les widgets si il n'y a qu'une seule image
    const checkPicturesCount = () => {
        return numbersOfPictures <= 1 ? 'hide' : ''
    }

    return (
        <div className="carrousel">
            <img className={`bannerImg ${visible ? 'visible noblur' : 'hidden blur'}`} src={pictures[index]} alt={title} />
            <img className={`arrow leftArrow ${checkPicturesCount()}`} src={leftArrow} alt="Icon Back" onClick={handleLeftArrowClick} />
            <img className={`arrow rightArrow ${checkPicturesCount()}`} src={rightArrow} alt="Icon Forward" onClick={handleRightArrowClick} />
            <div className={`counter ${checkPicturesCount()}`}>{index+1}/{numbersOfPictures}</div>
        </div>
    );
}

export default Carrousel;
