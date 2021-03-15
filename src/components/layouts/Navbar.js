import React, {Component} from 'react';
import './Navbar.scss';

class Navbar extends Component {
    render() {
        return (
            <nav className="App-header--nav">
                <ul className="App-header--ul">
                    <li>
                        <a href="../pages/Home.js">
                            <i class="fas fa-home"></i>
                        </a>
                    </li>
                    <li>
                        <a href="../pages/Gallery.js">
                            Gallery
                        </a>
                    </li>
                    <li>
                        <a href="../pages/Contact.js">
                            Contact
                        </a>
                    </li>
                </ul>
            </nav>   
        );
    }
}

export default Navbar;