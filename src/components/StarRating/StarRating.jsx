import "./StarRating.scss";
import starIcon from "../../assets/svg/star.svg";
import starIconEmpty from "../../assets/svg/star-inactive.svg";

function StarRating ({rating}) {
    return (
        <div className="starRaring">
            {Array.from({ length: rating }).map((_, index) => (
                <img key={index} src={starIcon} className='fullStar' alt="star" />
            ))}
            {Array.from({ length: 5 - rating }).map((_, index) => (
                <img key={index + rating} src={starIconEmpty} className='emptyStar' alt="star" />
            ))}
        </div>
    );
}

export default StarRating;
