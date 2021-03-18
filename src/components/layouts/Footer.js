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
                {/* <i class="fas fa-sign-in-alt"></i> */}
                Log In                
            </Link>   
        </footer>    
    )
}

export default Footer;