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
      console.log('delete', id)
    }

  return (
    <div className="container">
      <Header/>
      <Tasks tasks = {tasks}/>
    </div>
  );
}

export default App
