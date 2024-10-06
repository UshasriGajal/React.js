import { createContext } from "react"
import { useState } from "react"

const UserContext = createContext()
const ThemeProvider = ({children})=>{
    const [color,setcolor] = useState('blue')
    return (
        <>
        <UserContext.Provider value={{color, setcolor}}>
            {children}
        </UserContext.Provider>
        </>
    )
}

export {UserContext,ThemeProvider}