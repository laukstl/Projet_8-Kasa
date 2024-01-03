import './Carrousel.scss';
import leftArrow from "../../assets/svg/leftArrow.svg";
import rightArrow from "../../assets/svg/rightArrow.svg";

function Carrousel ({pictures, title}) {
    return (
        <div className="carrousel">
            <img className="bannerImg" src={pictures[0]} alt={title} />
            <img className="arrow leftArrow" id="leftarrow" src={leftArrow} alt="Icon Back" />
		    <img className="arrow rightArrow" id="rightarrow" src={rightArrow} alt="Icon Forward" />
        </div>
    )
}

export default Carrousel;
