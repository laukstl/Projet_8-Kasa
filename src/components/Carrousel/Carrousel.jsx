import './Carrousel.scss';
import leftArrow from "../../assets/svg/leftArrow.svg";
import rightArrow from "../../assets/svg/rightArrow.svg";
import { useState } from 'react';

function Carrousel({ pictures, title }) {
    const numbersOfPictures = pictures.length;
    const [index, setIndex] = useState(0);
    const [visible, setVisibility] = useState(true);

    const handleLeftArrowClick = (event) => {
        setVisibility(false);

        setTimeout(() => {
            setIndex((prevIndex) => {
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
            setIndex((prevIndex) => (prevIndex + 1) % numbersOfPictures);
            setVisibility(true);
        }, 250);
    };

    const checkPicturesCount = () => {
        return numbersOfPictures < 2 ? 'hide' : ''
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
