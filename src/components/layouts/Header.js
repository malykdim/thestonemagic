import  './Header.css';

const Header = () => {
    return (
        <header className="App-header">
            <h1>The Stone Magic</h1>
            <nav className="App-header--nav">
                <ul className="App-header--ul">
                    <li>
                        <a href="#">
                            Home
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            Gallery
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            Contact
                        </a>
                    </li>
                </ul>
            </nav>    
        </header>    
    )
}

export default Header;