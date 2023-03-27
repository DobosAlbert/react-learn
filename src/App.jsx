//import logo from './logo.svg';
import React from 'react';
import './App.css';
import TaskCard from './components/task-card/TaskCard';
import TaskViewer from './components/taskViewer/TaskViewer'
import FormCard from "./components/forms/Form-card";

function App() {

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
  return <div className='app-container'>
    <TaskViewer
     TaskList = {data}
    />
    <FormCard/>
  </div>;
}

export default App;
