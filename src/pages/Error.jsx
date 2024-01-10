import { NavLink } from 'react-router-dom';
import error from '../assets/error.png';

function Error() {
    return (
      <div className="error">
          <img src={error} alt="Logo 404" />
          <p>Oups! La page que vous demandez n'existe pas.</p>
          <NavLink to="/" className="Lien">Retourner sur la page d'accueil</NavLink>
      </div>
    );
  }
  
  export default Error;