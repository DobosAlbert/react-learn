import React, {useState} from 'react';
import './Form-card.css';

function FormCard(props) {

  // const [taskName, setTaskName] = useState("");
  // const [dataTask, setDataTask] = useState("");
  // const [taskDetails, setTaskDetails] = useState("");

  const [allDetails, setAllDetails] = useState({
    name: " ",
    data: " ",
    details: " "
  });


  const HandleName = (e) => {
    setAllDetails({
      ...allDetails,
      name: e.target.value
    });
  }

  const HandleData = (e) => {
    setAllDetails({
      ...allDetails,
      data: e.target.value
    });
  }

  const resetForm = () => {
     allDetails.name = "";
  };

  const HandleDetails = (e) => {
    setAllDetails({
      ...allDetails,
      details: e.target.value
    });
  }

  const HandleButton = (e) => {
    e.preventDefault();
    const newTask = {
      name: allDetails.name,
     data: allDetails.data,
     details: allDetails.details
    };

    props.addNewTask(newTask);
    resetForm();
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