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
    
    const onSubmitLoginHandler = (e) => {
        e.preventDefault();
        
        const inputEmail = e.target.email.value;
        const inputPassword = e.target.pass.value;
        
        
        console.log(inputEmail);
        console.log(inputPassword);
    }
    
    return (
        <main className="AppMain">
            
            <h2>Login</h2>
            
                
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
                        <input type="email" id="email" name="email" placeholder="someone@somewhere.com"/>
                    </fieldset>
                    <fieldset>
                        <label htmlFor="pass">Password:</label>
                        <input type="text" id="pass" name="pass" placeholder="********"/>
                    </fieldset>
                    <fieldset>
                        <button className="toggle" /* onClick={toggle()} */>
                        Login
                        </button>
                    </fieldset>
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