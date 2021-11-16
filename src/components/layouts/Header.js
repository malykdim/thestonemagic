// import { useContext } from 'react';
// import { useTheme } from '../../hooks/useTheme';

import Navbar from '../parts/Navbar.js';

import styles from './Header.scss';

export default function Header({ title }) {
    // const { color } = useTheme();
    
    return (
        <header className="App AppHeader">
            
            <h1>{title}</h1>
            <Navbar icon="fas fa-home"/>    
        </header>    
    );
}