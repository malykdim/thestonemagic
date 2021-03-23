import Logo from  './Logo';
import { Link } from 'react-router-dom';
import  './Footer.scss';

const Footer = (props) => {
    return (
        <footer  className="AppFooter">
            <Logo />
            <p>
                &copy; All rights reserved
            </p>
            <Link to="/login" className="Login">
                {/* Login */}
                <i className={props.icon}></i>
                                
            </Link>   
        </footer>    
    )
}

export default Footer;