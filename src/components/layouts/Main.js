import logo from './logo.svg';
import Gallery from '../pages/Gallery';
import  './Main.css';

const Main = () => {
    return (
        <main className="App-main">
            <h2>
                Exquisite Mosaics made by<br/>
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
            <Gallery />     
        </main>    
    )
}

export default Main;