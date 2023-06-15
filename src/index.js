import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import todoSlice from './Reducer/';
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
const store = configureStore({
  reducer: {
    todos: todoSlice
  }
});


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    
      <Provider store={store}>
      <ToastContainer
      position='top-right'
      autoClose={3000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme='light'
    />

        <App />
      </Provider>
    

  </React.StrictMode>
);

