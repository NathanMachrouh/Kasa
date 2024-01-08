import { NavLink } from 'react-router-dom';
import LOGO from '../assets/LOGO.png';
import '../style/__Index.scss' ;

function Header() {
    return (
      <header>
          <img src={LOGO} alt="Logo Kasa" />
          <nav className='navbar'>
            <NavLink to="/">Accueil</NavLink>
            <NavLink to="/Apropos">A propos</NavLink>
          </nav>
      </header>
    );
  }
  
  export default Header;  