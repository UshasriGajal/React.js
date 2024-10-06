import { useMemo, useState } from "react"
import './App.css'
const App = () => {
  const [count, setCount] = useState(0)
  const [input, setInput] = useState(0)

  function expensiveTask(num){
    console.log('inside expensive calculation')
    for(let i = 0;i < 100000000;i++){}
    return num*2
  }

  const doubledValue = useMemo(() => expensiveTask(input) , [input])
  return (
    <>
      <button onClick={() => {setCount(count+1)}}>Increment</button>
      <h2>count:{count}</h2>
      <input type="number" value={input} onChange={(e)=>{setInput(e.target.value)}}/>
      <h2>{doubledValue}</h2>
    </>
  )
}

export default App