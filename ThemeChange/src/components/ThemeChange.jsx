import { useContext } from "react";
import { UserContext } from "./ThemeProvider";

const ThemeChange =() =>{
    const toggleTheme = () => {
        setColor((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
      };
    const {color} =useContext(UserContext)
    return(
        <div>
            <button onClick={toggleTheme}> </button>
        </div>
    )

}
export default ThemeChange