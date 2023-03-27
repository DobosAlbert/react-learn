import React from 'react';
import "./TaskCard.css";
import Badge from "../badge/badge";

function Create(props) {


     return (
    <div className="card-wrapper">

       <Badge status = {props.status} />
       <div className="card-header">
        <p className="task-id">{props.id}</p>

       </div>
       <div className="card-content">
          <p>{props.name}</p>
        </div>
        
        <div className="card-footer">   
            <div className="due-date">
            {<p>Due Date</p>}
            <p>{props.dueDate}</p>
            </div>
        </div>
        
    </div>
    );
}

export default Create;