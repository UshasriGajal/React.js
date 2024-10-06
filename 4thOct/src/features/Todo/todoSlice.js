import {createSlice, nanoid } from '@reduxjs/toolkit';

const initialState ={
    todos:[{ id : 1, text : 'HelloWorld'}],
}

export const todoSlice =createSlice({
    name:'todo',
    initialState,
    reducers:{
        addTodo:(state , action)=>{
            const todo ={
                id:nanoid(),
                text: action.payload,
            }
            console.log(action.payload)
            state.todos.push(todo)

        },

        removeTodo:(state, action) =>{
            state.todos = state.todos.filter((todo)=>todo.id !== action.payload)
        },
        EditTodo:(state,action)=>{
            const { id, updateData } = action.payload;
    //   const todo = state.todos.find((todo) => todo.id === id);
    //   if (todo) {
    //     todo.text = updateData; // Update the todo's text
    //   }
        },
        UpdateTodo:(state ,action)=>{
            const { id, updateData } = action.payload;
            console.log(updateData)
            // action.payload = updateData;
            const todo = state.todos.find((todo) => todo.id === id);
            console.log(todo.id ,state.id)
      if (todo) {
        todo.text = updateData; 
      }
            // state.todos = state.todos.map((todo)=>todo.id == action.payload)
            console.log(state)
    //   const todo = state.todos.find((todo) => todo.id === id);
    //   if (todo) {
    //     todo.text = updateData; 
    //   }
        }

    }
});

export const { addTodo, removeTodo ,EditTodo ,UpdateTodo} = todoSlice.actions;
export default todoSlice.reducer;