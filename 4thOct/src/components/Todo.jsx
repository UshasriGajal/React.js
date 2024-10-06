import {useDispatch , useSelector } from 'react-redux'
import {EditTodo, removeTodo, UpdateTodo} from "../features/Todo/todoSlice"
import { useState } from 'react'
const Todo =() =>{
    const todos = useSelector((state) => state.todos)
    const dispatch = useDispatch()
    const [editId ,setEditIt] = useState('')
    const [updateData, setUpdate] = useState('')
    const handleTask = (todo)=>{
        setEditIt(todo.id)
        // const but=document.getElementsByClassName('edit')
        
        console.log(todo.id)
    }
    const updateItem = (todo)=>{
        console.log(todo.text,updateData)
        // todo.text=updateData
        dispatch(removeTodo(updateData))
        dispatch(UpdateTodo({ id: todo.id, updateData }));
        // todo.map((item)=>(editId == item.id ? item.text = updateData:""))
        // todo.text=updateData
        // todo.text=
        setEditIt('')
    }

    return (
        <>
        
       
        {
            
            todos.map((todo)=>(
                <li key={todo.id}>
                    {editId == todo.id ? <>
                        <input value={updateData} onChange={(e)=>setUpdate(e.target.value)} />
                        <button onClick={()=>updateItem(todo)}>update</button>
                    </> :todo.text}
                    
                    
                    <button onClick={()=>handleTask(todo)} className='edit'>Edit</button>
                    <button onClick={()=> dispatch(removeTodo(todo.id))}>X</button>

                </li>
            ))
        }

        
        </>
    )
}
export default Todo