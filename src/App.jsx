import './App.css';
import {useState , useEffect} from 'react'
import Task from './components/Task';
import List from './components/List';

function App() {
  const [list,setList]=useState([])

  // useEffect(()=>{
  //   console.log("updating list",list)
  // },[list])

  const addTask = () =>{
    const task=document.getElementById("task").value
    if (task.trim()) {  
      setList((prevList) => [...prevList, task]) 
      document.getElementById("task").value = ''
    }
}

  return (
    <div className="App">
        <Task addTask={addTask} ></Task>
        <List list={list} setList={setList} ></List>
    </div>
  );
}

export default App;
