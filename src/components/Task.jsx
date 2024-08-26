import { useState } from "react";

const Task = ({ addTask }) => {

    const [taskInput, setTaskInput] = useState('')

    const handleChange = (e) => {
        setTaskInput(e.target.value);
      };
    
      const handleAddTask = (e) => {
        e.preventDefault()
        if (taskInput.trim()) {
          addTask(taskInput)
          setTaskInput('')
        }
      };
    
    return ( 
       <section>
           <h1>My To Do List</h1>
           <form onSubmit={handleAddTask}>
               <label htmlFor="task">Task:</label><br />
               <input
          type="text"
          name="task"
          id="task"
          value={taskInput}
          onChange={handleChange}
          placeholder="Enter a new task"
        />
        <button type="submit">ADD</button>
           </form>
       </section>
    );
}

export default Task;