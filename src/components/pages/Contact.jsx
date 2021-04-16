import { Component } from 'react';
// import { Route} from 'react-router-dom' ;
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
        return (
            <main className="AppMain">
                <h2>Contact Page</h2>
                
                <section className="content">
                    <ContactForm />
                </section>
            </main>
        )
    }
}

export default Contact;