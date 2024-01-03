import { Link } from 'react-router-dom';
import logo from "../../assets/svg/logo.svg";
import "./Header.scss";

export function Header() {
  return (
    <div className='headerContainer'>
        <header>
          <img className="headerLogo" src={logo} alt="Kasa Logo" />
          <nav>
            <Link to="/">Accueil</Link>
            <Link to="/About">A Propos</Link>
          </nav>
        </header>
    </div>
  )
}

export default Header;
