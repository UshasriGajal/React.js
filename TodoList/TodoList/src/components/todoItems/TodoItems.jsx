import React, { useState } from "react";

const TodoItems = ({ task, deleteTodo, toggleComplete}) => {
  const [edittoggle,setEditToggle] =useState(0)
  const [editValue,setEdit]=useState(task.input)
  
  const handleInput = (e) =>{
    setEdit(e.target.value)
}

  return (
    <>
    {/* {console.log(task)} */}
      <li style={{ textDecoration: task.completed ? "line-through" : "none" }}>
      
          {edittoggle ? 
            (<input className="editIp" value={editValue} onChange={handleInput}/>) : 
              (<h5 style={{display:"inline"}}>{editValue}</h5>)}
              <div>
                <button onClick={() => setEditToggle(!edittoggle)}>
                  {!edittoggle ? "Edit" : "Update"}
                  </button>
      
      <button onClick={() => toggleComplete(task.id)}>
      {task.completed ? "Undo" : "Complete"}
      </button>
      <button onClick={() => deleteTodo(task.id)}>Delete</button>
      </div>
      </li>
    </>
  );
};

export default TodoItems;