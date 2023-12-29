import "./DropdownButton.scss";

function DropdownButton ({buttonText}) {
    return (
        <div className="dropdownContainer">
            {/* <div className="dropdownText"> */}
                <div className="buttonText">{buttonText}</div>
            {/* </div> */}
        </div>
    )
}

export default DropdownButton;
