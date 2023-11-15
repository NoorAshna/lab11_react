import React, { useState } from 'react';
import TaskList from './TaskList';
import AddTask from './AddTask';
import '../css/app.css';

const App = () => {
  const [tasks, setTasks] = useState([]);

  const addTask = (text) => {
    setTasks([...tasks, { id: tasks.length + 1, text, completed: false }]);
  };

  const toggleComplete = (taskId) => {
    setTasks(tasks.map(task =>
      task.id === taskId ? { ...task, completed: !task.completed } : task
    ));
  };

  const deleteTask = (taskId) => {
    setTasks(tasks.filter(task => task.id !== taskId));
  };

  return (
    <div className='maindiv'>
      <h1>ToDo List</h1>
      <AddTask onAddTask={addTask} />
      <TaskList tasks={tasks} onToggleComplete={toggleComplete} onDelete={deleteTask} />
     
    </div>
  );
};

export default App;
