import { createContext } from 'react';

const UserContext = createContext();

UserContext.displayName = 'UserContext';

export function UserProvider({ children }) {
    
    
    
    return (
        <UserContext.Provider value={{ user: null}}>
            {children}
        </UserContext.Provider>
    )
}