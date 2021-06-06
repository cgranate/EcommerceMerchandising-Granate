import React from 'react';
import { Link, BrowserRouter } from 'react-router-dom'

const NavBarItem = ({children, enlace}) => {
    return(
            <Link to={enlace}>{children}</Link>
    )
}

export default NavBarItem;

/*<a href={enlace}>
             {children}
        </a>*/