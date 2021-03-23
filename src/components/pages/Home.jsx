import { Component } from 'react';
import logo from '../images/logo.svg';
// import Picture from './components/parts/Picture';
// import Gallery from './Gallery';
import  './Home.scss';

class Home extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            mosaics: [],
            onHover() {
                console.log('animation ends');
            }
        }
    }
    
    render() {
        return (
            <main className="AppMain">
                <h2>
                    Exquisite Mosaic Panneaux <br/>
                    made by<br/>
                    <a className="AppLink" href="https://www.facebook.com/vladimir.damynov/" target="_blank"  rel="noopener noreferrer" >
                        <span>Vladimir Damyanov</span>
                    </a>
                    and
                    <a className="AppLink" href="https://www.facebook.com/damyan.damyanov.509/" target="_blank"  rel="noopener noreferrer" >
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
    
}


export default Home;