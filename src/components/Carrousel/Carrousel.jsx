import './Carrousel.scss';
import leftArrow from "../../assets/svg/leftArrow.svg";
import rightArrow from "../../assets/svg/rightArrow.svg";
import { useEffect } from 'react';

function Carrousel ({pictures, title}) {
    useEffect(() => {
        // const index = 0;
        const bannerImg = document.querySelector(".bannerImg");

        const leftArrowComponent = document.getElementById("leftarrow");
        leftArrowComponent.addEventListener("click", () => {bannerImg.classList.add("goRight");});

        const rightArrowComponent = document.getElementById("rightarrow");
        rightArrowComponent.addEventListener("click", () => {bannerImg.classList.add("goLeft");});

        return () => { // lancé quand c'est unmount
            leftArrowComponent.removeEventListener("click", () => {bannerImg.classList.add("goLeft");});
            rightArrowComponent.removeEventListener("click", () => {bannerImg.classList.add("goRight");});
        }
    },[])

    return (
        <div className="carrousel">
            <img className="bannerImg" src={pictures[0]} alt={title} />
            <img className="arrow leftArrow" id="leftarrow" src={leftArrow} alt="Icon Back" />
            <img className="arrow rightArrow" id="rightarrow" src={rightArrow} alt="Icon Forward" />
        </div>
    )
}

export default Carrousel;
