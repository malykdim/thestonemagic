import { useState } from 'react';

import './SignupForm.scss';

export default function SignupForm() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rePass, setRePass] = useState('');
    const [username, setUsername] = useState('');
    // const [thumbnail, setThumbnail] = useState(null);
    
    return (
        <main className="AppMain">
            
            <h3>Sign up</h3>
                
            <div className="AppMain-Forms form">
                {/* <UserContext.Provider value={contextValue}> */}
                    <form onSubmit={onSubmitLoginHandler} className="FormSignup form">
                        <fieldset>
                            <label htmlFor="username"></label>
                            <input 
                                type="text" 
                                id="username" 
                                name="username" 
                                placeholder="Username"
                                onChange={(e) => setUsername(e.target.value)}
                                value={username}
                                required
                            />
                        </fieldset>
                        <fieldset>
                            <label htmlFor="email"></label>
                            <input 
                                type="email" 
                                id="email" 
                                name="email" 
                                placeholder="Email" 
                                onChange={(e) => setEmail(e.target.value)}
                                value={email}
                                required 
                            />
                        </fieldset>
                        <fieldset>
                            <label htmlFor="pass"></label>
                            <input 
                                type="password" 
                                id="pass" 
                                name="pass" 
                                placeholder="Password" 
                                onChange={(e) => setPassword(e.target.value)}
                                value={password}
                                required
                            />
                        </fieldset>
                        <fieldset>
                            <label htmlFor="rePass"></label>
                            <input 
                                type="password" 
                                id="rePass" name="rePass" 
                                placeholder="Repeat Password" 
                                onChange={(e) => setRePass(e.target.value)}
                                value={rePass}
                                required
                            />
                        </fieldset>
                        {/* <fieldset>
                            <label>
                                <input 
                                    type="file" 
                                    id="thumbnail" 
                                    name="thumbnail" 
                                />                                
                            </label>
                        </fieldset> */}
                        <fieldset>
                            <button className="toggle btn">
                                Sign up
                            </button>
                        </fieldset>
                    </form>
                {/* </UserContext.Provider> */}
            </div>  
                        
        </main>
    )
}