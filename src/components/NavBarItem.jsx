import React from 'react';

const NavBarItem = ({children, enlace}) => {
    return(
        <a href={enlace}>
             {children}
        </a>
    )
}

export default NavBarItem;