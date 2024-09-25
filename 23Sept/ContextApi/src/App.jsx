import React from "react";
import { UserProvider } from "./components/UserProvider";
import UpdateUser from "./components/UpdateUser";
import UserProfile from "./components/UserProfile";

const App = () =>{
  return <>
  <UserProvider>
    <UpdateUser/>
    <UserProfile/>
  </UserProvider>
  </>
  
}
export default App