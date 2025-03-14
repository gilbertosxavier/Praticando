import {Link} from 'react-router-dom';
import './style.css'

function Header() {

    return (
        <header>
            <h1>Sujeito Dev</h1>
            
            <nav className='navbar'>
                <Link to="/" >Home</Link>
                <Link to="/sobre" >Sobre</Link>
                <Link to="/contato" >Contato</Link>
            </nav>
        </header>
    )
}

export default Header;