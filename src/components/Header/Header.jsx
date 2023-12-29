import { Link } from 'react-router-dom';
import logo from "../../assets/svg/logo.svg";
import "./Header.scss";

export function Header() {
  return (
    <header>
      <img className="headerLogo" src={logo} alt="Kasa Logo" />
      <nav>
        <Link to="/">Accueil</Link>
        <Link to="/APropos">A Propos</Link>
      </nav>
    </header>
  )
}

export default Header;
