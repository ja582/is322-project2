import React from 'react';

function TaskList({ tasks }) {
  return (
    <main className="TaskList">
      <span>Task List</span>
      <ul>
        {tasks.map((task) => (
          <li>{task.id}, {task.title}, {task.status}</li>
        ))}
      </ul>
    </main>
  );
}

export default TaskList;
