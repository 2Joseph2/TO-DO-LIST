import { useState } from "react";

const TaskCard = ({el,deleteTask,finishTask}) => {

    const [isFinished, setIsFinished] = useState(false);

    const handleFinishTask = () => {
      setIsFinished(true)
      finishTask()
    };

    return ( 
        <div className="task"
        style={{ backgroundColor: isFinished ? "rgb(115, 187, 163)" : "rgb(173, 73, 225)" }}
        >
            <h3  style={{ textDecoration: isFinished ? "line-through" : "none" }}>{el}</h3>
            <div className="buttons">
            <button onClick={handleFinishTask}>done</button>
            <button onClick={deleteTask}>X</button>
            </div>
        </div>
     );
}
 
export default TaskCard;