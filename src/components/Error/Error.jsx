import { Link } from 'react-router-dom';
import "./Error.scss";

function EnTravaux() {
  return (
    <div className='errorPage'>
      <div className="errorFont">404</div>
      <p>Oups! La page que vous demandez n'existe pas.</p>
      <Link to="/">Retourner sur la page d'accueil</Link>
    </div>
  )
}

export default EnTravaux
