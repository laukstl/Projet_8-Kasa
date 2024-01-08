import './Carrousel.scss';
import leftArrow from "../../assets/svg/leftArrow.svg";
import rightArrow from "../../assets/svg/rightArrow.svg";
import { useState } from 'react';

function Carrousel({ pictures, title }) {
    const numbersOfPictures = pictures.length;
    const [index, setIndex] = useState(0);

    const handleLeftArrowClick = () => {
        setIndex((prevIndex) => {
            if (prevIndex === 0) {
                return numbersOfPictures - 1;
            }
            return prevIndex - 1;
        });
    };

    const handleRightArrowClick = () => {
        setIndex((prevIndex) => (prevIndex + 1) % numbersOfPictures);
    };

    return (
        <div className="carrousel">
            <img className="bannerImg" src={pictures[index]} alt={title} />
            <img className="arrow leftArrow" src={leftArrow} alt="Icon Back" onClick={handleLeftArrowClick} />
            <img className="arrow rightArrow" src={rightArrow} alt="Icon Forward" onClick={handleRightArrowClick} />
        </div>
    );
}

export default Carrousel;
