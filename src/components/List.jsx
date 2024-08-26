import TaskCard from "./TaskCard"

const List  = ({list , setList}) => {

    const deleteTask = (index)=>{

            const updatedList = list.filter((_, i) => i !== index);
            setList(updatedList)
         
    }

    const finishTask = (index)=>{
        
    }

    return(
        <div className="tasks" id="taskDiv">
           {
            list.map((el,index)=>{
                return <TaskCard el={el} index={index} deleteTask={()=>{
                    deleteTask(index)
                }} finishTask={()=>{
                    finishTask(index)
                }}></TaskCard>
            })
           }
        </div>
    )
}
 
export default List;

