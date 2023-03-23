import "./TaskCard.css";

function create() {
    return (<div className="card-wrapper">

       <div className="card-header">
        <p className="task-id">T-1</p>
        <div className="badge">
            <p>Todo</p>
        </div>
        

       </div>
       <div className="card-content">
          <p>Create a Design System for Enum Workspace</p>
        </div>
        
        <div className="card-footer">   
            <div>
            <p>Due Date</p>
            <p>23/01/2021</p>
            </div>
        </div>


    </div>);
}

export default create;