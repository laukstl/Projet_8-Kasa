import logo from "../../assets/svg/logo_white.svg";
import "./Footer.scss";

function EnTravaux() {
    return (
        <div className="footerContainer">
            <footer>
                <img className="footerLogo" src={logo} alt="Kasa Logo" />
                <div className="footerFont">@ 2020 Kasa. All rights reserved</div>
            </footer>
        </div>
    )
}

export default EnTravaux
