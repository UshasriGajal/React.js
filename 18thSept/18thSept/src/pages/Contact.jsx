// import Side from "./side"
import { NavLink, Outlet } from "react-router-dom"

const Contact =()=>{
    return (
        <>
            <div style={{display:'flex' ,height:'80%'}}>
            
            <div>
            <h2>Contact Page</h2>
            <button><NavLink to='contactus'>Contact Us</NavLink></button>
            <button><NavLink to='address'>Address</NavLink></button>
            {/* <button>Address</button> */}
          
            </div>
            <Outlet />
            </div>
        </>
    )
}
export default Contact