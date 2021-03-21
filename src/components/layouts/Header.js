// import Logo from './Logo.js';
import Navbar from './Navbar.js';
import  './Header.scss';

const Header = (props) => {
    
    return (
        <header className="App-header">
            
            <h1>{props.title}</h1>
            <Navbar icon="fas fa-home"/>    
        </header>    
    )
}

export default Header;