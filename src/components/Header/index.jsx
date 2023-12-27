import { Link } from 'react-router-dom';
import logo from "../../assets/svg/logo.svg";

function EnTravaux() {
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

export default EnTravaux
