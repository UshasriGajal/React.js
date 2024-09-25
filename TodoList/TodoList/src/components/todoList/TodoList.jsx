import React from "react";
import TodoItems from "../todoItems/TodoItems";

const TodoList = ({ tasks, toggleComplete, deleteTodo }) => {
  return (
    <>
      <ul>
        {tasks.map((task) => (
          <TodoItems
            key={task.id}
            task={task}
            deleteTodo={deleteTodo}
            toggleComplete={toggleComplete}
            
          />
        ))}
      </ul>
    </>
  );
};

export default TodoList;