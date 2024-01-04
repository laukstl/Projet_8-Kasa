import './Carrousel.scss';
import leftArrow from "../../assets/svg/leftArrow.svg";
import rightArrow from "../../assets/svg/rightArrow.svg";
import { useEffect, useState } from 'react';

function Carrousel ({pictures, title}) {
    const numbersOfPictures = pictures.length;
    const [index, setIndex] = useState(0);
    const previousIndex = (index - 1 + numbersOfPictures) % numbersOfPictures;
    const nextIndex = (index + 1) % numbersOfPictures;

    useEffect(() => {
        const previousBannerImg = document.querySelector(".previous");
        const actualBannerImg = document.querySelector(".actual");
        const nextBannerImg = document.querySelector(".next");
        
        // const handleLeftTransitionEnd = () => {
        //     setIndex((prevIndex) => (prevIndex - 1 + numbersOfPictures) % numbersOfPictures);
        // };

        const handleLeftArrowClick = () => {
            previousBannerImg.classList.add("goLeft");
            actualBannerImg.classList.add("goLeft");
            nextBannerImg.classList.add("goLeft");

            // previousBannerImg.addEventListener("transitionend", handleLeftTransitionEnd);
            setIndex((prevIndex) => (prevIndex - 1 + numbersOfPictures) % numbersOfPictures);
        };

        const leftArrowComponent = document.getElementById("leftarrow");
        leftArrowComponent.addEventListener("click", handleLeftArrowClick);

        const handleRightArrowClick = () => {
            previousBannerImg.classList.add("goRight");
            actualBannerImg.classList.add("goRight");
            nextBannerImg.classList.add("goRight");
            setIndex((prevIndex) => (prevIndex + 1) % numbersOfPictures);
        };

        const rightArrowComponent = document.getElementById("rightarrow");
        rightArrowComponent.addEventListener("click", handleRightArrowClick);

        return () => { // lancé quand c'est unmount
            leftArrowComponent.removeEventListener("click", handleLeftArrowClick);
            rightArrowComponent.removeEventListener("click", handleRightArrowClick);
        }
    },[index, numbersOfPictures])

    return (
        <div className="carrousel">
            <img className="bannerImg previous" src={pictures[previousIndex]} alt={title} />
            <img className="bannerImg actual" src={pictures[index]} alt={title} />
            <img className="bannerImg next" src={pictures[nextIndex]} alt={title} />
            <img className="arrow leftArrow" id="leftarrow" src={leftArrow} alt="Icon Back" />
            <img className="arrow rightArrow" id="rightarrow" src={rightArrow} alt="Icon Forward" />
        </div>
    )
}

export default Carrousel;
