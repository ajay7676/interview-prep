import {createSlice,nanoid} from '@reduxjs/toolkit'

const initialState = ({
    todos: [{id: 1, text: "Hello world"}]
})

export const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        addToDo: (state,action) =>{
          const todo ={
            id: nanoid(),
            text: action.payload
          }
          state.todos.push(todo)
        },
        removeTodo: (state,action) =>{
            state.todos = state.todos.filter((todo) => todo.id !== action.payload)

        },
        updateToDo : () =>{

        },
    }

})


export const {addToDo, removeTodo, updateToDo} = todoSlice.actions;

export default todoSlice.reducer;