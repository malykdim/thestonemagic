import React, {Component} from 'react';
import { Route, NavLink } from 'react-router-dom' ;
import './Navbar.scss';

class Navbar extends Component {
    render() {
        return (
            <nav className="App-header--nav">
                <ul className="App-header--ul">
                    <li>
                        <NavLink to="/" >
                            <i className="fas fa-home"></i>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/gallery" >
                            Gallery
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/contact" >
                            Contact
                        </NavLink>
                    </li>
                </ul>
            </nav>   
        );
    }
}

export default Navbar;