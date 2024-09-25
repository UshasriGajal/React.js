import React from "react";
import { useContext } from "react";
import { UserContext } from './UserProvider';

const UpdateUser =()=>{
    const { user ,setUser} =useContext(UserContext)
    const handleChange =()=>{
        setUser({...user ,name:'jane'});
    }
    return (
        <>
            <button onClick={handleChange}>Button to change Name</button>
        </>
    )
}
 export default UpdateUser
