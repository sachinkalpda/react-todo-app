import { useSelector } from "react-redux";

const Done = () => {
    const done  = useSelector((state) => state.todos.done);
    return (
        <div className="section">
            <h5>Done</h5>
            <table className="striped">
                <tbody>
                {done.length === 0 && <p>No Data Found!</p>}
                    {done.map((task, index) => (
                        <tr key={`done-${index}`}>
                            <td>{task.title}</td>
                        </tr>
                    ))}

                </tbody>
            </table>
        </div>

    );

}


export default Done;