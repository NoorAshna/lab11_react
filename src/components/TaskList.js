import React from 'react';
import TaskItem from './TaskItem';
import '../css/taskList.css'

const TaskList = ({ tasks, onToggleComplete, onDelete }) => {
  return (
    <div>
      {tasks.map(task => (
        <TaskItem
          key={task.id}
          task={task}
          onToggleComplete={onToggleComplete}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
};

export default TaskList;
