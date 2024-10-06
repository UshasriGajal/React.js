import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from '../features/Todo/todoSlice';

const AddTodo = ()=>{
    const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const handleForm = (e)=> {
    // e.preventDefault();
    // dispatch(addTodo(input));
    // setInput("")

    e.preventDefault();
    dispatch(addTodo(input));
    setInput("");
  }
    
  
  return(
    <>

    <h2>TODO LIST</h2>  
        <form onSubmit={handleForm}>
            <input type="text" placeholder="enter your task" value={input} onChange={(e)=>setInput(e.target.value)} />
            
            <button type="submit">Add Task</button>
        </form>
    </>
  )
} 

export default AddTodo