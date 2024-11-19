import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { TodoİnitialState, TodoType } from '../types/Types'


const initialState: TodoİnitialState = {
    todos: []
}

export const todoSlice = createSlice({

    name: "todo",
    initialState,
    reducers: {
        createTodo: (state: TodoİnitialState, action: PayloadAction<TodoType>) => {
            state.todos = [...state.todos, action.payload];
        },

        removeTodoById: (state: TodoİnitialState, action: PayloadAction<number>) => {
            state.todos = [...state.todos.filter((todo: TodoType) => todo.id !== action.payload)]
        },

        updateTodo: (state: TodoİnitialState, action: PayloadAction<TodoType>) => {
            state.todos = [...state.todos.map((todo: TodoType) => todo.id !== action.payload.id ? todo : action.payload)]
        }
    }

})

export const { createTodo, removeTodoById, updateTodo } = todoSlice.actions

export default todoSlice.reducer