import { Component } from 'react';
import logo from './logo.svg';
import  './Home.scss';

class Home extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            mosaics: [],
        }
    }
    
    render() {
        return (
            <main className="AppMain">
                <h2>
                    Exquisite Mosaic Panneaux
                </h2>
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    <a className="AppLink" href="https://www.facebook.com/vladimir.damynov/" target="_blank"  rel="noopener noreferrer" >
                        <span>Vladimir Damyanov</span>
                    </a>
                    <span>&amp;</span>
                    <a className="AppLink" href="https://www.facebook.com/damyan.damyanov.509/" target="_blank"  rel="noopener noreferrer" >
                    <span>Damyan Damyanov</span>
                    </a>
                </p>   
            </main>    
        )
    }
}

export default Home;