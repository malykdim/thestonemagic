import { Link, useHistory } from 'react-router-dom' ;
import request from '../../services/ajax';

import '../main.scss';
import './Register.scss';

const Register = () => {
    
    const history = useHistory();
    
    const onSubmitRegisterHandler = (e) => {
        e.preventDefault();
        const inputEmail = e.target.email.value;
        const inputPassword = e.target.pass.value;
        
        request('/login', 'GET', '?email=' + inputEmail + '&password=' + inputPassword)
            .then(res => {
                if (res.sessionToken) {
                    history.push('/edit');
                }
            });
            // redirect to login?
    }
    
    return (
        <main className="AppMain">
            <h2>Register</h2>
            <h3>For Admins only</h3>
            <div className="AppMain-Forms">
                
                <form  className="FormRegister form">
                    <fieldset>
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" id="email"/>
                    </fieldset>
                    <fieldset>
                        <label htmlFor="pass">Password</label>
                        <input type="password" name="pass" id="pass" placeholder="" />
                    </fieldset>
                    <fieldset>
                        <input type="submit" className="send" value="Send" />
                    </fieldset>
                </form>
                
            </div>  
            <p>
                Please lonin to gain access to Edit Gallery page...
            </p>            
            <p>
                <button className="login">
                    <Link to="/login" className="Login">Login</Link>
                </button>
            </p>
        </main>
    )
}

export default Register;