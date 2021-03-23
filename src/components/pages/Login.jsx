import { Link } from 'react-router-dom' ;
// import Edit from './Edit' ;

import '../main.scss';
import './Login.scss';

const Login = () => {
    
    function toggle() {
        // hide the Register button
        // the Register form 
        // validate the input
        // show the submit button below 
    }
    
    /* function login() {
        // after successfull authentication
        return (
            <Link path="/edit" component={Edit}/>
        )
    } */
    
    return (
        <main className="AppMain">
            
            <h2>Register / Login</h2>
            
            <button className="toggle" onClick={toggle()}>
                Register
            </button>
                
            <div className="AppMain-Forms">
                
                <form className="FormRegister">
                    <label htmlFor="email">Email:</label>
                    <input type="text" name="email" id="email"/>
                    <label htmlFor="pass">Password:</label>
                    <input type="text" name="pass" id="pass" placeholder="" />
                    <label htmlFor="pass"></label>
                    <input type="text" name="pass" placeholder="" />
                    <button className="toggle" /* onClick={login()} */>
                        Register
                    </button>
                </form>
                
                <form className="FormLogin">
                    <label htmlFor="email">Email:</label>
                    <input type="text" id="email" name="email" placeholder="someone@somewhere.com"/>
                    <label htmlFor="pass">Password:</label>
                    <input type="text" id="pass" name="pass" placeholder="Password: ********"/>
                    <button className="toggle" /* onClick={toggle()} */>
                        Login
                    </button>
                </form>
                
            </div>              
            
            <Link to="/edit" className="Edit">Edit</Link>
            
            <p>
                In Development Stage...
            </p>
            
        </main>
    )
}

export default Login;