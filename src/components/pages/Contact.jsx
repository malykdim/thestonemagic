import { Component } from 'react';
// import { Route} from 'react-router-dom' ;
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
            console.log(inputFullName);
            console.log(inputEmail);
            console.log(inputTopic);
            console.log(inputContent);
        }
        
        
        return (
            <main className="AppMain">
                <h2>Contact Page</h2>
                
                <form  onSubmit={onSubmitContactHandler} className="AppMain-FormContact form">
                    <fieldset>
                        <label htmlFor="fullName">Name</label>
                        <input type="text" id="fullName" name="fullName" placeholder="Full Name"/>
                    </fieldset>
                    <fieldset>
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" name="email" placeholder="Email"/>
                    </fieldset>
                    <fieldset>
                        <label htmlFor="topic">Topic</label>
                        <input type="text" id="topic" name="topic" placeholder="Topic"/>
                    </fieldset>
                    <fieldset>
                        <textarea name="content" id="content" cols="75" rows="12"></textarea>
                    </fieldset>
                    <fieldset>
                        <input type="submit" className="send" value="Send"/>
                    </fieldset>    
                </form>
            </main>
        )
    }
}

export default Contact;