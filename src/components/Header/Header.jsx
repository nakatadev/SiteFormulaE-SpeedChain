import { FaUser } from "react-icons/fa";
import { Link } from 'react-router-dom'; // Importe o Link
import Logo from '../../assets/images/Logo mini - Forrmula e.png';
import './header.css';

function Header() {
    return ( 
        <header className="container-header">
            <img src={Logo} alt="" />
            <ul className='menu'>
                <Link to="/"><li>Home</li></Link>
                <li>Noticias</li>
                <li>Sobre nós</li>
                <li>Assista</li>
            </ul>
            <Link to="/login">
                <FaUser />
            </Link>
        </header>
    );
}

export default Header;
