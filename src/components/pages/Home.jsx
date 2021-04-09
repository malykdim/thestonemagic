import { Component } from 'react';
import { Link } from 'react-router-dom'; 
import { Icon, InlineIcon } from '@iconify/react';
import baselineFacebook from '@iconify-icons/ic/baseline-facebook';
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
                <span></span>
                <p>
                    <Link className="AppLink" to="https://www.facebook.com/vladimir.damynov/" target="_blank"  rel="noopener noreferrer" >
                        <span><Icon icon={baselineFacebook} /></span>
                        <span>Vladimir Damyanov</span>
                    </Link>
                    &amp;
                    <Link className="AppLink" to="https://www.facebook.com/damyan.damyanov.509/" target="_blank"  rel="noopener noreferrer" >
                    <span><Icon icon={baselineFacebook} /></span>
                    <span>Damyan Damyanov</span>
                    </Link>
                </p>   
            </main>    
        )
    }
}

export default Home;