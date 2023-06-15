import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodoAsync } from "../api";


const AddTodo = () => {
    const [task,setTask] = useState('');
    const loading = useSelector((state) => state.todos.loading);
    const dispatch = useDispatch();
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addTodoAsync({
            title : task,
        }));
        setTask('');
    }

    return (
        <div className="todo-form">
            <form  onSubmit={handleSubmit}>
                <div className="input-field col s12">
                    <input id="last_name" type="text" value={task} onChange={(e) => setTask(e.target.value)} className="validate" />
                    <label for="last_name">New Task</label>
                </div>
                <button className="btn waves-effect waves-light" type="submit" name="action" disabled={loading}>
                    {(loading)? 'ADDING': 'ADD TASK'}
                    <i className="material-icons right"></i>
                </button>
            </form>
        </div>
    );
}

export default AddTodo;