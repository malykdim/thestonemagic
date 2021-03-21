import Logo from  './Logo';
import { Link } from 'react-router-dom';
import  './Footer.scss';

const Footer = (props) => {
    return (
        <footer  className="App-footer">
            <Logo />
            <p>
                &copy; All rights reserved
            </p>
            <Link to="/login" className="login">
                {/* Login */}
                <i class={props.icon}></i>
                                
            </Link>   
        </footer>    
    )
}

export default Footer;