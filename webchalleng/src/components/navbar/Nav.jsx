import {} from 'react';
import '../navbar/style_nav.css';
import { Link } from 'react-router-dom';


function Nav() {
  return (
    <>
             <a href={Link}><img className="logo" src='' alt="logo"/></a>
        <nav>
            <ul className="nav_links">
                <li><a href={Link}>Home</a></li>
            </ul>
        </nav>
        <a className="cta" href="#"><button>Contato</button></a>
    </>
  );
}
export default Nav;
