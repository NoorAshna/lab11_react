import React from 'react';
import '../css/addtask.css'
const TaskItem = ({ task, onToggleComplete, onDelete }) => {
  return (
    <div className='tasks'>
      <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
        {task.text}
      </span>
      <div className='buttonclass'>
      <button onClick={() => onToggleComplete(task.id)}>
        {task.completed ? 'Undo' : 'Complete'}
      </button>
      <button onClick={() => onDelete(task.id)}>Delete</button>
      </div>
    </div>
  );
};

export default TaskItem;
