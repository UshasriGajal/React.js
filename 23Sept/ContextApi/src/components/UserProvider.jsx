import { createContext, useState } from "react";
const UserContext = createContext()
const UserProvider =({children}) =>{
    const [user , setUser] = useState({name:'Jhon', age : 23});
    return (
        
        <>
            <UserContext.Provider value={{user , setUser}}>
                {children}
            </UserContext.Provider>
        </>
    )
}

export {UserContext,UserProvider}