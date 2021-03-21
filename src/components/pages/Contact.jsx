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
                    <input type="text" name="fullName" placeholder="Full Name"/>
                    <label htmlFor="email"></label>
                    <input type="text" name="email" placeholder="Email"/>
                    <label htmlFor="topic"></label>
                    <input type="text" name="topic" placeholder="Topic"/>
                    <textarea name="content" id="content" cols="64" rows="15"></textarea>
                    <input type="submit" value="Send"/>
                </form>
                
                <p>
                In Development Stage...
                </p>
            </main>
        
        )
    }
}

export default Contact;