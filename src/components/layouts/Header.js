import  './Header.css';
import Logo from './Logo.js';
import Navbar from './Navbar.js';

const Header = () => {
    return (
        <header className="App-header">
            
            <h1>The Stone Magic</h1>
            <Navbar />    
        </header>    
    )
}

export default Header;