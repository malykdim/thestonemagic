import { createContext } from 'react';

export const ThemeContext = createContext();

ThemeContext.displayName = 'ThemeContext';

export function ThemeProvider({ children }) {
    
    
    return (
        <ThemeContext.Provider value={{ color: '#fff'}}>
            {children}
        </ThemeContext.Provider>
    )
}