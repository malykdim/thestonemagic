import Logo from  '../parts/Logo';
import { Link } from 'react-router-dom';
import  './Footer.scss';

const Footer = (props) => {
    return (
        <footer  className="AppFooter">
            {<Logo />}
            <p>
                &copy; All rights reserved
            </p>
            <Link to="/login" className="login">
                {/* Login */}
                <i className={props.icon}></i>
                                
            </Link>   
        </footer>    
    )
}

export default Footer;