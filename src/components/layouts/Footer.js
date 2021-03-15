import Logo from  './Logo';
import  './Footer.scss';

const Footer = () => {
    return (
        <footer  className="App-footer">
            <Logo />
            <p>
                &copy; All rights reserved
            </p>
            <a href="../pages/Login.js" className="login">
                {/* <i class="fas fa-sign-in-alt"></i> */}
                Log In                
            </a>   
        </footer>    
    )
}

export default Footer;