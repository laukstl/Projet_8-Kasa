import "./DropdownButton.scss";
import arrow from "../../assets/svg/arrow.svg";
import { useState } from 'react';


function DropdownButton ({buttonText, text}) {

    // état local de bascule du bouton
    const [buttonState, setButtonState] = useState(false);

    // bascule le bouton
    const toggleButtonState = () => {
        setButtonState(!buttonState);
    };

    return (
        <div className="dropdownButton">
            <button onClick={toggleButtonState} className="button">
                <div className="buttonText">{buttonText}</div>
                {/* anime la flèche en fonction de l'état du bouton */}
                <img className={`buttonArrow ${buttonState ? "spin" : "spin-reverse"}`} src={arrow} alt="Flèche de controle" />
            </button>
            {/* zone de texte qui s'affiche ou se masque en fonction de l'état du bouton */}
            <div className={`text ${buttonState ? "shown" : "hidden"}`}>{text}</div>
        </div>
)
}

export default DropdownButton;
