import {} from 'react';
import './style_nav.css';
import Home from '../../routes/home/Home.jsx';
import Logo from '../../assets/img/Logo.svg';


function Nav() {
  return (
    <>
             <a href={Home}><img className="logo" src={Logo} alt="logo"/></a>
        <nav>
            <ul className="nav_links">
                <li><a href={Home}>Home</a></li>
            </ul>
        </nav>
        <a className="cta" href="#"><button>Contato</button></a>
    </>
  );
}
export default Nav;
