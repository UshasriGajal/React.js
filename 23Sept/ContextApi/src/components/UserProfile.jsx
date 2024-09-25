import React from 'react';
import { useContext } from 'react';
import { UserContext } from './UserProvider';
const UserProfile = ()=>{
    const {user} =useContext(UserContext)
    return(
        <>
            <h1>User Profile</h1>
            <h3>Name:{user.name}</h3>
            <p>Age:{user.age}</p>
        </>
    )
}
export default UserProfile