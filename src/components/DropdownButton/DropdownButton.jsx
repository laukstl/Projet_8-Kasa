import "./DropdownButton.scss";
import arrow from "../../assets/svg/arrow.svg";
import { useState } from "react";


function DropdownButton ({buttonText, text}) {
    const [buttonState, setButtonState] = useState(false);

    const toggleButtonState = () => {
        setButtonState(!buttonState);
    };

    return (
        <div className="dropdownButton">
            <button onClick={toggleButtonState} className="button">
                <div className="buttonText">{buttonText}</div>
                <img className={`buttonArrow ${buttonState ? "spin" : "spin-reverse"}`} src={arrow} alt="Flèche de controle" />
            </button>
            <div className={`text ${buttonState ? "shown" : "hidden"}`}>{text}</div>
        </div>
)
}

export default DropdownButton;
