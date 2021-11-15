import { useContext } from 'react';

import { useTheme } from '../../hooks/useTheme';

// import Logo from './Logo.js';
import Navbar from '../parts/Navbar.js';

import  './Header.scss';

const Header = (props) => {
    const { color } = useTheme();
    
    return (
        <header className="AppHeader">
            
            <h1>{props.title}</h1>
            <Navbar icon="fas fa-home"/>    
        </header>    
    )
}

export default Header;