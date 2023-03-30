//import logo from './logo.svg';
import React, {useState} from 'react';
import './App.css';
import TaskCard from './components/task-card/TaskCard';
import TaskViewer from './components/taskViewer/TaskViewer'
import FormCard from "./components/forms/Form-card";

const data = [
  {
    id: "Task-1",
    name: "Content card",
    status: "Todo",
    dueDate: "24/08/2023",
  },
  {
    id: "Task-2",
    name: "Content card 2",
    status: "finished",
    dueDate: "14/08/2023",
  },
  {
    id: "Task-3",
    name: "Content card 3",
    status: "Todo-f",
    dueDate: "10/08/2023",
  },
  {
  id: "Task-4",
  name: "Content card",
  status: "Todo",
  dueDate: "24/08/2023",
  },
  {
  id: "Task-5",
  name: "Content card 2",
  status: "finished",
  dueDate: "14/08/2023",
  },
  {
  id: "Task-6",
  name: "Content card 3",
  status: "Todo-f",
  dueDate: "10/08/2023",
  },
];

function App() {

  const [formCard, setFormCard] = useState(data);

  const onNewTaskForm = (newTask) => {
    console.log("Task from App.jsx", newTask);

     setFormCard((prevState) => [
     ...prevState,
     {
      ...newTask,
      id: "Task-" + prevState.length + 1,
     },
    ]);
  
   };

     
  return <div className='app-container'>
    <TaskViewer
     TaskList = {formCard}
    />
    <FormCard addNewTask = {onNewTaskForm} />
  </div>;
}

export default App;
