import { UserContext } from "./ThemeProvider";
import { useContext } from "react";

const UpdateChange = () =>{
    const { color ,setcolor} =useContext(UserContext)
    const handleChange =()=>{
        console.log(color)
        setcolor(color === 'blue' ? 'black' : 'blue');
    }
    // var {color} = useContext(UserContext)
    
    return (
        <>
        <h1 style={{color:color}}>Hloo</h1>
            <button onClick={handleChange}>Button to change color</button>
        </>
    )

}
export default UpdateChange