import { Component } from 'react';
// import { Route} from 'react-router-dom' ;
import Map from '../parts/Map';
import '../main.scss';
import './Contact.scss';

class Contact extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            
        }
    }
    
    render() {
        const onSubmitContactHandler = (e) => {
            e.preventDefault();
            const inputFullName = e.target.fullName.value;
            const inputEmail = e.target.email.value;
            const inputTopic = e.target.topic.value;
            const inputContent = e.target.content.value;
            
            const data = {
                sender: inputFullName,
                email: inputEmail,
                about: inputTopic,
                message: inputContent
            }
            const letter = JSON.stringify(data);
            console.log(letter);
        }
        
        
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
                    
                    <form  onSubmit={onSubmitContactHandler} className="AppMain-FormContact form">
                        <h3>Get in touch</h3>
                        <fieldset>
                            <label htmlFor="fullName"></label>
                            <input type="text" id="fullName" name="fullName" placeholder="Full Name"/>
                        </fieldset>
                        <fieldset>
                            <label htmlFor="email"></label>
                            <input type="email" id="email" name="email" placeholder="Email"/>
                        </fieldset>
                        <fieldset>
                            <label htmlFor="topic"></label>
                            <input type="text" id="topic" name="topic" placeholder="Topic"/>
                        </fieldset>
                        <fieldset>
                            <textarea name="content" id="content" cols="75" rows="8"></textarea>
                        </fieldset>
                        <fieldset>
                            <input type="submit" className="send" value="Send"/>
                        </fieldset>    
                    </form>
                </section>
            </main>
        )
    }
}

export default Contact;