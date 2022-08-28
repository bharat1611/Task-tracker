import { useState } from 'react';
import Header from './Components/Header';
import Tasks from './Components/Tasks';

import AddTask from './Components/AddTask';


const App = () => {
  const [showAddTask, setShowAddTask] = useState(false)

  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'Hello',
      day: 'Feb5th at 2',
      reminder: true,
    },
    {
      id: 2,
      text: 'Hello1',
      day: 'Feb5th at 2',
      reminder: false,
    },
  ])

  // Add Task
  const addTask = (task) =>{
    const id = Math.floor(Math.random() * 10000) + 1;
    console.log(id);
    const newTask = {id, ...task}
    setTasks([...tasks, newTask])


  }


  // Delete Task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }
  // Toggle Reminder
  const toggleReminder = (id) => {
    setTasks(tasks.map((task) =>
      task.id === id ? { ...task, reminder: !task.reminder} : task))
    // console.log(id)
  }


  return (
    <div className="container">
      <Header onAdd = {() => setShowAddTask(!showAddTask)} showAdd = {showAddTask}/>

      {showAddTask && <AddTask onAdd = {addTask}/>}
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask}
          onToggle={toggleReminder} />
      ) : (
        'No Tasks To Complete'
      )}
    </div>
  );
}

export default App
