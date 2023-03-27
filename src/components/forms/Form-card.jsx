import React, {useState} from 'react';
import './Form-card.css';

function FormCard() {

  const [taskName, setTaskName] = useState("");
  const [dataTask, setDataTask] = useState("");
  const [taskDetails, setTaskDetails] = useState("");


  const HandleName = (e) => {
    setTaskName(e.target.value);
  }

  const HandleData = (e) => {
    setDataTask(e.target.value);
  }

  const HandleDetails = (e) => {
    setTaskDetails(e.target.value);
  }

  const HandleButton = (e) => {
    e.preventDefault();
      console.log(taskName);
        console.log(dataTask);
          console.log(taskDetails);
  }

  
  return (
    <div className='container-form'>
        <div>
            <form onSubmit={HandleButton}> 
              <div className='form-row'>
                <label>Task Name</label>
                <input type="text"
                 onChange={HandleName}
                 />
              </div>

               <div className='form-row'>
                <label>Data Task</label>
                <input type="date" 
                onChange={HandleData}/>
              </div>

               <div className='form-row'>
                <p>Task Details</p>
                <textarea cols='30' rows='15' onChange={HandleDetails}></textarea>
              </div>

              <button type='submit'>Create Task</button>
            </form>
        </div>

    </div>

  );
}

export default FormCard;