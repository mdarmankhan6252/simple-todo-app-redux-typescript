import { createSlice, type PayloadAction } from "@reduxjs/toolkit";


interface Todo {
   id: number;
   text: string;
   completed: boolean
}

const initialState: Todo[] = []

const todoSlice = createSlice({
   name: 'todos',
   initialState,
   reducers: {
      addTodo: (state, action: PayloadAction<string>) => {
         state.push({
            id: Date.now(),
            text: action.payload,
            completed: false
         })
      },
      toggleTodo: (state, action: PayloadAction<number>) => {
         const todo = state.find(t => t.id === action.payload)
         if (todo) todo.completed = !todo.completed
      },
      deleteTodo: (state, action: PayloadAction<number>) => {
         return state.filter(t => t.id !== action.payload)
      }
   }
})

export const { addTodo, toggleTodo, deleteTodo } = todoSlice.actions;

export default todoSlice.reducer;
export type { Todo }