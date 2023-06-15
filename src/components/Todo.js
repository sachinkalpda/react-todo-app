import AddTodo from "./AddTask";
import Done from "./Done";
import Task from "./Task";

const Todo = () => {
    return (
        <div className="todo z-depth-3 p-5">
            <div className="todo-heading">
                <h3>To Do</h3>
                <AddTodo />
                
            </div>
            <div className="todo-body">
                <Task />
                <div className="divider"></div>
                <Done />
                
            </div>
        </div>
    )
}

export default Todo;