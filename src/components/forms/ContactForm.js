import { findAllInRenderedTree } from 'react-dom/test-utils';
import request from '../../services/ajax.js';


const ContactForm = () => {
    const onSubmitContactHandler = (e) => {
        e.preventDefault();
        
        const inputFullName = e.target.fullName.value;
        const inputEmail = e.target.email.value;
        const inputTopic = e.target.topic.value;
        const inputContent = e.target.content.value;
        
        const body = {
            sender: inputFullName,
            about: inputEmail,
            message: inputTopic,
            email: inputContent
        }
        JSON.stringify(body);
        console.log(body);
        
        request('/classes/Message', 'POST', body)
                .then(response => {
                    alert('Your message have being sent.')
                    console.log(response)
                });
        
        e.target.reset();        
    }
    
    return (
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
    );
}

export default ContactForm;