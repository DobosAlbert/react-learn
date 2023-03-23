import "./TaskCard.css";
import Badge from "../badge/badge";

function create(props) {
     return (
    <div className="card-wrapper">

       <Badge status = {props.status} />
       <div className="card-header">
        <p className="task-id">{props.data.id}</p>

       </div>
       <div className="card-content">
          <p>{props.data.name}</p>
        </div>
        
        <div className="card-footer">   
            <div className="due-date">
            <p>Due Date</p>
            <p>{props.data.dueDate}</p>
            </div>
        </div>


    </div>
    );
}

export default create;