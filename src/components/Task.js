import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { completedAsync, deletedAsync, getTodos } from "../api";

const Task = () => {
    const tasks = useSelector((state) => state.todos.tasks);
    const dispatch = useDispatch();
    const handlComplete = (task) => {
        dispatch(completedAsync(task));
    }

    const handlDelete = (id) => {
        dispatch(deletedAsync({id}));
    } 


    useEffect(() => {
        dispatch(getTodos());
    },[dispatch]);
    return (
        <div className="section">
        <h5>Tasks<span className="new badge blue">{tasks.length}</span></h5>
        <table className="highlight">
            <thead>
                <tr>
                    <th>Task</th>
                    <th>Action</th>
                </tr>
            </thead>

            <tbody>

                {tasks.length === 0 && <p>No Data Found!</p>}
                {tasks.map((task,index) => (
                    <tr key={`todo-${index}`}>
                    <td>{task.title} {task.completed ? 'yes' : 'no'}</td>
                    <td>
                        <i className="small material-icons teal-text text-darken-1" onClick={() => handlComplete(task)}>done</i>
                        <i className="small material-icons red-text text-darken-1" onClick={() => handlDelete(task.id)}>close</i>
                    </td>
                </tr>
                ))}
            </tbody>
        </table>
    </div>
    );
}

export default Task;