import { Component } from 'react';
// import { Route} from 'react-router-dom' ;
import Map from '../parts/Map';
import ContactForm from '../forms/ContactForm';
import '../main.scss';
import './Contact.scss';

class Contact extends Component {
    // constructor(props) {
    //     super(props);
        
    //     this.state = {
            
    //     }
        
    // }

    render() {
        
        
        const location = {
            address: 'ul. "Hristo G. Danov" 11, 4000 Tsentar, Plovdiv, Bulgaria',
            lat: 42.148215594449134,
            lng: 24.74586854733439
        }
        
        return (
            <main className="AppMain">
                <h2>Contact Page</h2>
                
                <section className="content">
                    <div className="map">
                        <Map location={location} zoomLevel={17}/>                        
                    </div>
                    
                    <ContactForm />
                </section>
            </main>
        )
    }
}

export default Contact;