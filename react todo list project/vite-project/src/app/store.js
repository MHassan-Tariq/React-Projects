import {configureStore} from '@reduxjs/toolkit'
// import todo from './features/todo/todo slice'
import todoReducer from '../features/todo/todo-slice'
export const store = configureStore({
    reducer:todoReducer
    
})