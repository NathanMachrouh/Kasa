import { NavLink } from 'react-router-dom';
import LOGO from '../assets/LOGO.png';
import '../style/__Index.scss';

function Header() {
  return (
    <header>
      <NavLink to="/"><img src={LOGO} alt="Logo Kasa" /></NavLink>
      <nav>
        <NavLink to="/">Accueil</NavLink>
        <NavLink to="/Apropos">A propos</NavLink>
      </nav>
    </header>
  );
}

export default Header;  