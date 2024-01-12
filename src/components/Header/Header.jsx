import "./Header.scss";
import logo from "../../assets/svg/logo.svg";
import { NavLink } from 'react-router-dom';

export function Header() {
    const links = [
        {
            txt: "Accueil",
            to: "/"
        },
        {
            txt: "A Propos",
            to: "/about"
        }
    ]

    return (
        <div className='headerContainer'>
            <header>
                <img className="headerLogo" src={logo} alt="Kasa Logo" />
                <nav>
                    {
                        links.map((item, index) => (
                            <NavLink
                                key={"NavLink"+index}
                                className="links"
                                to={item.to}
                            >
                                {item.txt}
                            </NavLink>
                        ))
                    }
                </nav>
            </header>
        </div>
    )
}

export default Header;
