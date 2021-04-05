import { Link, useHistory } from 'react-router-dom' ;
// import Edit from './Edit' ;
import request from '../../services/ajax';

import '../main.scss';
import './Login.scss';

const Login = () => {
    
    const history = useHistory();
    
    function toggle() {
        // hide the Register button
        // the Register form 
        // validate the input
        // show the submit button below 
    }
    
    const onSubmitLoginHandler = (e) => {
        e.preventDefault();
        const inputEmail = e.target.email.value;
        const inputPassword = e.target.pass.value;
        
        request('/login', 'GET', '?email=' + inputEmail + '&password=' + inputPassword)
            .then(res => {
                if (res.sessionToken) {
                    // successfully logged in
                    history.push('/edit');
                }
            });
    }
    
    return (
        <main className="AppMain">
            
            <h2>Login</h2>
            <h3>For Admins only</h3>
                
            <div className="AppMain-Forms">
                
                <form  className="FormRegister form">
                    <fieldset>
                        <label htmlFor="fullName">Full Name</label>
                        <input type="text" name="fullName" id="fullName"/>
                    </fieldset>
                    <fieldset>
                        <label htmlFor="email">Email</label>
                        <input type="text" name="email" id="email"/>
                    </fieldset>
                    <fieldset>
                        <label htmlFor="pass">Password</label>
                        <input type="text" name="pass" id="pass" placeholder="" />
                    </fieldset>
                    <fieldset>
                        <label htmlFor="pass"></label>
                        <input type="text" name="pass" placeholder="" />
                    </fieldset>
                    <fieldset>
                        <button className="toggle" /* onClick={login()} */>
                            Register
                        </button>
                        
                        <button className="toggle" onClick={toggle()}>
                            Register
                        </button>
                    </fieldset>
                </form>
                
                <form onSubmit={onSubmitLoginHandler} className="FormLogin form">
                    <fieldset>
                        <label htmlFor="email">Email:</label>
                        <input type="email" id="email" name="email" placeholder=""/>
                    </fieldset>
                    <fieldset>
                        <label htmlFor="pass">Password:</label>
                        <input type="password" id="pass" name="pass" placeholder=""/>
                    </fieldset>
                    <fieldset>
                        <button className="toggle">
                            Login
                        </button>
                    </fieldset>
                </form>
                
            </div>  
            
            <p>
                Please lonin to gain access to Edit Gallery page...
            </p>            
            {/* <p>
                Not registered? 
                <button className="register">
                    <Link to="/register" className="Register">Register</Link>
                </button>
            </p> */}
            
        </main>
    )
}

export default Login;