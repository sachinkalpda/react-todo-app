import { createSlice } from "@reduxjs/toolkit";
 import { getTodos ,addTodoAsync, completedAsync, deletedAsync } from "../api";
import { toast } from "react-toastify";


 const initialState = {
    tasks : [],
    done : [],
    loading : false,
 }

const todoSlice = createSlice({
    name : 'todos',
    initialState : initialState,
    reducers : {

        completed : (state,action) => {
            const todo = state.tasks.find((todo) => { return todo.id === action.payload.id});
            todo.completed = true;
            state.done.push(todo);
            return state.tasks.filter((todo) =>  todo.id !== action.payload.id);
        },

        deleteTodo : (state,action) => {
            return state.tasks.filter((todo) => todo.id !== action.payload.id);
        }

    },

    extraReducers : {
        [addTodoAsync.pending] : (state,action) => {
            state.loading = true;
        },
        [getTodos.fulfilled] : (state,action) => {
            state.tasks = action.payload.todos;
        },
        [getTodos.rejected] : (state,action) => {
            state.tasks = [];
        },
        [addTodoAsync.fulfilled] : (state,action) => {
            state.loading = false;
            state.tasks.push(action.payload.todo);
            toast.success('Task Added');
        },
        [completedAsync.fulfilled] : (state,action) => {
            console.log(action.payload);
            state.done.push(action.payload.todo);
            state.tasks = state.tasks.filter((task) => task.id !== action.payload.todo.id);
            toast.success('Task Completed');
        },
        [deletedAsync.fulfilled] : (state,action) => {
            state.tasks = state.tasks.filter((task) => task.id !== action.payload.id); 
            toast.success('Task Removed From List');
        }
    
    }

});


export const {addTodo,completed,deleteTodo} = todoSlice.actions;

export default todoSlice.reducer;