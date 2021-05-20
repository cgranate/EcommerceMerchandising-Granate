import NavBarItem from './NavBarItem';
import CartWidget from './CartWidget';
import logo from '../assets/images/logo.png';
import './styles/NavBar.css';

const NavBar = () => {
    return(
            <header>
                <nav>
                    <NavBarItem children="inicio" enlace="google.com"/>
                    <NavBarItem children="nosotros" enlace="google.com"/>
                    <NavBarItem children="redes sociales" enlace="google.com"/>
                    <NavBarItem>
                        <img src={logo} alt="logo de Tigres Sueltos"/>
                    </NavBarItem>
                    <NavBarItem children="álbumes" enlace="google.com"/>
                    <NavBarItem children="merch" enlace="google.com"/>
                    <NavBarItem children="próximas fechas" enlace="google.com"/>
                    <CartWidget/> 
                </nav>
            </header>
    );
};

export default NavBar;