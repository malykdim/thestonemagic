import { Component } from 'react';
import { Route} from 'react-router-dom' ;
import '../main.scss';
import './Contact.scss';

class Contact extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            
        }
    }
    
    render() {
        
        return (
            <main className="App-main">
                <h2>Contact Page</h2>
                <form action="#" className="form-contact">
                    <label htmlFor="fullName"></label>
                    <input type="text" name="fullName"/>
                    <label htmlFor="email"></label>
                    <input type="text" name="email"/>
                    <textarea name="content" id="content" cols="65" rows="20"></textarea>
                </form>
                <p>
                In Development Stage...
                </p>
            </main>
        
        )
    }
}

export default Contact;