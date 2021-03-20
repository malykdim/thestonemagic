import  './Header.scss';
// import Logo from './Logo.js';
import Navbar from './Navbar.js';

const Header = (props) => {
    
    return (
        <header className="App-header">
            
            <h1>{props.title}</h1>
            <Navbar icon="fas fa-home"/>    
        </header>    
    )
}

export default Header;