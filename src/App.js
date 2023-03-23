//import logo from './logo.svg';
import './App.css';
import TaskCard from './components/task-card/TaskCard.js';

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
  ];
  return <div className='app-container'>
    <TaskCard 
     data = {data[0]}
    />

    <TaskCard 
     data = {data[1]}
    />

   <TaskCard 
     data = {data[2]}
    />
  </div>;
}

export default App;
