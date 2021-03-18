import '../main.scss';
import './Login.scss';

const Login = () => {
    return (
        <main className="App-main">
            <h2>LogIn Page</h2>
            <form action="#" className="form-login">
                <label htmlFor="email"></label>
                <input type="text" name="email" />
                <label htmlFor="pass"></label>
                <input type="text" name="pass" placeholder=""/>
            </form>
            <form action="#" className="form-register">
                <label htmlFor="email"></label>
                <input type="text" name="email" />
                <label htmlFor="pass"></label>
                <input type="text" name="pass" placeholder=""/>
                <label htmlFor="pass"></label>
                <input type="text" name="pass" placeholder=""/>
            </form>
            <p>
                In Development Stage...
            </p>
        </main>
    )
}

export default Login;