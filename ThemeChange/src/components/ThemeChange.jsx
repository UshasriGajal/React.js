import { useContext } from "react"
import { UserContext } from "./ThemeProvider"


const ThemeChange =()=>{
    const {color}=useContext(UserContext)
    return (
        <>
        {/* <h1 style={{color:color}}>Hloo</h1> */}
        </>
    )
        
    
}
export default ThemeChange