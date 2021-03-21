import { Link } from 'react-router-dom' ;
import '../main.scss';
import './Login.scss';
import Edit from './Edit' ;

const Login = () => {
    
    function toggle() {
        // hide the Register button
        // the Register form 
        // validate the input
        // show the submit button below 
    }
    
    function login() {
        // after successfull authentication
        return (
            <Link to="/edit" component={Edit} />
        )
    }
    
    return (
        <main className="App-main">
            
            <div className="register">
                <button className="toggle" onClick={toggle()}>
                    Register
                </button>
                
                <div className="form">
                    <form action="#" className="form-register">
                        <label htmlFor="email"></label>
                        <input type="text" name="email" />
                        <label htmlFor="pass"></label>
                        <input type="text" name="pass" placeholder="" />
                        <label htmlFor="pass"></label>
                        <input type="text" name="pass" placeholder="" />
                        <button className="toggle" onClick={login()}>
                            Register
                        </button>
                    </form>
                </div>                
            </div>
            
            <h2>Login Page</h2>
            
            <div className="form">
                <form action="#" className="form-login">
                    <label htmlFor="email"></label>
                    <input type="text" name="email" placeholder="Email: someone@somewhere.com"/>
                    <label htmlFor="pass"></label>
                    <input type="text" name="pass" placeholder="Password: ********"/>
                    <button className="toggle" onClick={toggle()}>
                        Login
                    </button>
                </form>
            </div>

            <p>
                In Development Stage...
            </p>
            
        </main>
    )
}

export default Login;