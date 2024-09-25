import { useState } from "react"
import '../../App.css'
import TodoList from '../todoList/TodoList'
// import TodoItems from '../todoItems/TodoItems'
const TodoApp =()=>{
    const [tasks,setTask]=useState([])
    const [input,setInput]=useState("")
    
    const addTodo=()=>{
        // console.log(input)
        if (input.trim()) {
            setTask([...tasks, { id: Date.now(), input, completed: false, edit: false }]);
            setInput("");
          }
        
    }
    
    const deleteTodo=(id)=>{
        // console.log(input)
        setTask(tasks.filter((task) => task.id !== id));
    }

    const toggleComplete =(id)=>{
        // console.log(id)
        setTask(
        

            tasks.map((task) =>
                
              task.id === id ? { ...task, completed: !task.completed } : task
            )
          );
        //   console.log(tasks[0].completed)
    }
    
    
    return (
        <>
            <h2>Todo List</h2>
            {/* <h3></h3> */}
            <input type="text" value={input} placeholder="enter your text" onChange={(e) => setInput(e.target.value)}/>
            <button onClick={addTodo}>Add Task</button>
            <TodoList tasks={tasks} deleteTodo={deleteTodo} toggleComplete={toggleComplete}/>
        </>
        
    )
    
}

export default TodoApp