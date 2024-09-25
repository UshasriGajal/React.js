import Box from "./components/Box"
import './App.css'
import { useState } from "react"
const App = ()=>{
  const [arr,setArr]=useState([1,2,3])
  const addBox=()=>{
    setArr([...arr,arr.length+1])
    console.log(arr)
  }
  return (
    <>
      <div>
        <button onClick={addBox}>Add New Box</button>
        <div>
        {arr.map((value, index) => (
          
          <Box key={index}></Box>
          // console.log(value,index) 
        ))}
      </div>
        {/* <div>                   
          <Box />    
        </div> */}
      </div>
      
    
    </>
  )
}
 
export default App