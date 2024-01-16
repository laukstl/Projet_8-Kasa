import "./StarRating.scss";

import starIcon from "../../assets/svg/star.svg";
import starIconEmpty from "../../assets/svg/star-inactive.svg";

function StarRating ({rating}) {
    return (
        <div className="starRating">
            {/* Affichage des étoiles 'remplies' */}
            {Array.from({ length: rating }).map((_, index) => (
                <img key={index} src={starIcon} className='stars' alt="star" />
            ))}

            {/* Affichage des étoiles 'vides' */}
            {Array.from({ length: 5 - rating }).map((_, index) => (
                <img key={index + rating} src={starIconEmpty} className='stars' alt="star" />
            ))}
        </div>
    );
}

export default StarRating;
