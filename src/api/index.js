import { createAsyncThunk } from "@reduxjs/toolkit";


export const getTodos = createAsyncThunk('todos/get',async () => {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos?completed=false');
        const todos = await response.json();
        return {todos};
    } catch (error) {
        console.log(error);
        return {todos: []}
    }
});


export const addTodoAsync = createAsyncThunk('todo/add', async (data) => {
    try {
        const todo = await fetch('https://jsonplaceholder.typicode.com/todos', {
            method: 'POST',
            body: JSON.stringify({
              title: data.title,
              completed: false,
              userId: Date.now(),
            }),
            headers: {
              'Content-type': 'application/json; charset=UTF-8',
            },
          }).then((response) => response.json());
            
    return {todo};
        
    } catch (error) {
        console.log(error);
        return {todo : {}}
    }
});


export const completedAsync = createAsyncThunk('todo/edit', async (data) => {
    try {
        const todo = await fetch(`https://jsonplaceholder.typicode.com/todos/${data.id}`, {
            method: 'PATCH',
            body: JSON.stringify({
              id : data.id,
              completed: true,
              title : data.title,
              userId: Date.now(),
            }),
            headers: {
              'Content-type': 'application/json; charset=UTF-8',
            },
          }).then((response) => response.json());
        console.log('todo',todo); 
        return {todo};
        
    } catch (error) {
        console.log(error);
        return {todo : {}}
    }
});


export const deletedAsync = createAsyncThunk('todo/delete', async (data) => {
    try {
        await fetch(`https://jsonplaceholder.typicode.com/todos/${data.id}`, {
            method: 'DELETE',
            headers: {
              'Content-type': 'application/json; charset=UTF-8',
            },
          }).then((response) => response.json());
            
    return {id : data.id};
        
    } catch (error) {
        console.log(error);
        return {id : data.id}
        
    }
});