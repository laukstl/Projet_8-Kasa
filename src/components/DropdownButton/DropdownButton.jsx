import "./DropdownButton.scss";
import arrow from "../../assets/svg/arrow.svg";
import { useState } from "react";


function DropdownButton ({buttonText, text}) {
    const [buttonState, setButtonState] = useState(false);

    const toggleButtonState = () => {
        setButtonState(!buttonState);
    };

    return (
        <div className="dromdownButton">
            <button onClick={toggleButtonState} className="button">
                <div className="buttonText">{buttonText}</div>
                <img className={buttonState ? "buttonArrow spin" : "buttonArrow spin-reverse"} src={arrow} alt="Flèche de controle" />
            </button>
            <p className={buttonState ? "text shown" : "text hidden"}>{text}</p>
        </div>
)
}

export default DropdownButton;
