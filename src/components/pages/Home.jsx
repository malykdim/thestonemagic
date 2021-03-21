import logo from '../images/logo.svg';
// import Gallery from './Gallery';
import  './Home.scss';

const Home = () => {
    return (
        <main className="App-main">
            <h2>
                Exquisite Mosaic Panneaux <br/>
                made by<br/>
                <a className="App-link" href="https://www.facebook.com/vladimir.damynov/" target="_blank"  rel="noopener noreferrer" >
                    <span>Vladimir Damyanov</span>
                </a>
                and
                <a className="App-link" href="https://www.facebook.com/damyan.damyanov.509/" target="_blank"  rel="noopener noreferrer" >
                <span>Damyan Damyanov</span>
                </a>            
            </h2>
            <img src={logo} className="App-logo" alt="logo" />
            <p>
                In Development Stage...
            </p>   
                
        </main>    
    )
}


export default Home;