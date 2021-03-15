import Logo from  './Logo';
import  './Footer.css';

const Footer = () => {
    return (
        <footer  className="App-footer">
            <Logo />
            <p>
                &copy; All rights reserved
            </p>
            <a href="../pages/Login.js" className="login">Log In</a>   
        </footer>    
    )
}

export default Footer;