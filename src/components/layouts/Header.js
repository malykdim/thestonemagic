import  './Header.scss';
// import Logo from './Logo.js';
import Navbar from './Navbar.js';

const Header = (props) => {
    return (
        <header className="App-header">
            
            <h1>The Stone Magic</h1>
            <Navbar /* onMenuItemClick={this.onMenuItemClick} */ />    
        </header>    
    )
}

export default Header;