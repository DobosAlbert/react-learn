import React, { useState } from 'react';
import "./TaskCard.css";
import Badge from "../badge/badge";

function Create(props) {
   const [counter, setCounter] = useState(0);

   function handleClick (){
      setCounter(counter + 1);
      console.log("Counter update");
   };


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
            {/*<p>Due Date</p>*/}
            <p>{counter}</p>
            <p>{props.dueDate}</p>
            <button onClick = {handleClick}>Click me</button>
            </div>
        </div>
    </div>
    );
}

export default Create;