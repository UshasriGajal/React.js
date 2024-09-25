import { useState } from "react"

// import { useState } from "react"
const Counter = ()=>{
    
        // const [variable, setterFunction]=useState()
        const [count,setCount]=useState(0);
        const increment=()=>{
            setCount(count+1)
        }
        const decrement=()=>{
            setCount(count-1)
        }

        return (
            <div>
                <h3>Count:{count}</h3>
                <button onClick={increment}>Increment</button>
                <button onClick={decrement}>decrement</button>
            </div>
        
        )
    
}
export default Counter