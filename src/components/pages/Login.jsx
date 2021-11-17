// import React from 'react';
import { useHistory } from 'react-router-dom' ;
// import UserContext from '../../contexts/UserContext';
import request from '../../services/ajax';
import { setSession } from '../../services/auth';

import '../main.scss';
import './Login.scss';

export default function Login () {
    
    const history = useHistory();
    
    const onSubmitLoginHandler = (e) => {
        e.preventDefault();
        const inputEmail = e.target.email.value;
        const inputPassword = e.target.pass.value;
        
        request('/login', 'GET', '?email=' + inputEmail + '&password=' + inputPassword)
            .then(res => {
                if (res.sessionToken) {
                    setSession(res.sessionToken);
                    history.push('/edit');
                } else {
                    history.push('/thestonemagic');
                }
            }).catch(err => {
                alert(err);
            });
    }
    
    // const contextValue = {
    //     history: useHistory(),
    //     onSubmitLoginHandler: onSubmitLoginHandler()
    // }
    
    return (
        <main className="AppMain">
            
            <h3>For Admins only</h3>
                
            <div className="AppMain-Forms form">
                {/* <UserContext.Provider value={contextValue}> */}
                    <form onSubmit={onSubmitLoginHandler} className="FormLogin form">
                        <fieldset>
                            <label htmlFor="email"></label>
                            <input type="email" id="email" name="email" placeholder="Email"/>
                        </fieldset>
                        <fieldset>
                            <label htmlFor="pass"></label>
                            <input type="password" id="pass" name="pass" placeholder="Password"/>
                        </fieldset>
                        <fieldset>
                            <button className="toggle">
                                Login
                            </button>
                        </fieldset>
                    </form>
                {/* </UserContext.Provider> */}
            </div>  
            
            <p>
                Please login to gain access to Edit page.
            </p>            
            
        </main>
    )
}