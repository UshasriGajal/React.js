import { UserContext } from "./ThemeProvider";
import { useContext } from "react";

const UpdateChange = () =>{
    const { color ,setColor} =useContext(UserContext)
    const handleChange =()=>{
        setColor({...color ,backgroundColor:'black'});
    }
    return (
        <>
            <button onClick={handleChange}>Button to change color</button>
        </>
    )

}
export default UpdateChange