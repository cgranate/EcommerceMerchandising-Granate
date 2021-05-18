import NavBarItem from './NavBarItem';
import CartWidget from './CartWidget';
import logo from '../assets/images/logo.png';
import './styles/NavBar.css';

const NavBar = () => {
    return (
        <header>
            <nav>
                <NavBarItem name="inicio" url="google.com"/>
                <NavBarItem name="nosotros" url="google.com"/>
                <NavBarItem name="redes sociales" url="google.com"/>
                <li>
                    <a href="">
                        <div className="logo-container">
                            <img src={logo} alt="logo de Tigres Sueltos"/>
                        </div>
                    </a>
                </li>
                <NavBarItem name="álbumes" url="google.com"/>
                <NavBarItem name="merchandising" url="google.com"/>
                <NavBarItem name="próximas fechas" url="google.com"/>
                <CartWidget/> 
            </nav>
        </header>
    );
};

export default NavBar;