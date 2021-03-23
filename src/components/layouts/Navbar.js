import React, {Component} from 'react';
import { NavLink } from 'react-router-dom' ;
import './Navbar.scss';

class Navbar extends Component {
    constructor(props) {
        super(props);
    }
    
    static defaultProps = {
        icon: 'fas fa-home'
    }
    
    render() {
        return (
            <nav className="AppHeader-Nav">
                <ul className="AppHeader-Nav-Ul">
                    <li>
                        <NavLink to="/" >
                            <i className={this.props.icon}></i>
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