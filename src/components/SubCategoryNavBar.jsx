import NavBarItem from './NavBarItem';
import './styles/SubCategoryNavBar.css';

const SubCategoryNavBar = () => {
    return(
            <header>
                <nav>
                    <NavBarItem children="Ropa" enlace="/merch/Ropa"/>
                    <NavBarItem children="Accesorios" enlace="/merch/Accesorios"/>
                </nav>
            </header>
    );
};

export default SubCategoryNavBar;