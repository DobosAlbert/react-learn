import "./TaskViewer.css";
import TaskCard from "../task-card/TaskCard.js";

function TaskViewer(props) {
   return (
    <div className="container-view"> 
       <div className="container-content">
         {props.TaskList.map((item) => (
           <TaskCard 
           key = {item.id}
           id = {item.id}
           name =  {item.name}
           status = {item.status}
           dueDate = {item.dueDate}
           />
         ))}
        </div>
    
    </div>
   );
}

export default TaskViewer;



