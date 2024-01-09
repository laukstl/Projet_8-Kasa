import { Link } from 'react-router-dom';
import "./Error.scss";

function EnTravaux() {
    return (
        <div className='errorPageContainer'>
            <div className='errorPage'>
                <div className="errorHTMLCodeFont">404</div>
                <div className='errorMessage'>
                    <span>Oups! La page que </span>
                    <span>vous demandez n'existe pas.</span>
                </div>
                <Link to="/" className='errorPageHomeLink'>Retourner sur la page d'accueil</Link>
            </div>
        </div>
    )
}

export default EnTravaux
