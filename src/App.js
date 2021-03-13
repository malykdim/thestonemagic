import logo from './logo.svg';
import './App.css';

function App() {
    return (
    <div className="App">
        <header className="App-header">
            <h1>The Stone Magic</h1>
            <h3>
                Exquisite Mosaics made by<br/>
                <a className="App-link" href="https://www.facebook.com/vladimir.damynov/" target="_blank"  rel="noopener noreferrer" >
                    <span>Vladimir Damyanov</span>
                </a>
                and
                <a className="App-link" href="https://www.facebook.com/damyan.damyanov.509/" target="_blank"  rel="noopener noreferrer" >
                <span>Damyan Damyanov</span>
                </a>            
            </h3>
            <img src={logo} className="App-logo" alt="logo" />
            <p>
                In Development Stage...
            </p>        
        </header>
    </div>
    );
}

export default App;
