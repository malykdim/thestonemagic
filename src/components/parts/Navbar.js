import { NavLink } from 'react-router-dom' ;

import './Navbar.scss';

export default function Navbar ({ icon }) {
    
    return (
        <nav className="AppHeader-Nav">
            <ul className="AppHeader-Nav-Ul">
                <li>
                    <NavLink to="/thestonemagic" >
                        <i className={icon}></i>
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