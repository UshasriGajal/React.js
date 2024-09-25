import { useState } from "react";
import { createContext } from "react";


const UserContext = createContext()
const ThemeProvider = ({children}) => {
    
    
    const [color , setColor] = useState('light')

    

    return (
        <>
            <UserContext.Provider value={{color, setColor}}>
                {children}
            </UserContext.Provider>

        </>
    )
}
export  {ThemeProvider , UserContext}