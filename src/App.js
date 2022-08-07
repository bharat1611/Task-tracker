import { useState } from 'react';
import Header from './Components/Header';
import Tasks from './Components/Tasks';


const App = () => {
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
            reminder: true,
        },
    ])

    // Delete Task

    const deleteTask = (id) => {
      setTasks(tasks.filter((task) => task.id !==id))
    }

  return (
    <div className="container">
      <Header/>
      {tasks.length > 0 ?<Tasks tasks = {tasks} onDelete = {deleteTask}/> : 'No Tasks To Complete'}
    </div>
  );
}

export default App
