import Logo from  '../parts/Logo';
import { NavLink } from 'react-router-dom';
import  './Footer.scss';

export default function Footer({ title, loginIcon, logoutIcon }) {
    return (
        <footer  className="AppFooter">
            {<Logo />}
            <NavLink to="/login" className="login">
                {/* Login */}
                <i className={loginIcon}></i>                                
            </NavLink>   
            <p>
               {title} &copy; All rights reserved
            </p>
            <NavLink to="/login" className="login">
                {/* Login */}
                <i className={logoutIcon}></i>                                
            </NavLink>   
        </footer>    
    )
}