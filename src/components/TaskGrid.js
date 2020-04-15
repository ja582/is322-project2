import React from 'react';
import Notification from './Notification';


function TaskGrid({ tasks, location: { state } }) {
  const [open, setOpen] = React.useState(state ? state.submit : false);

  return (
    <main className="TaskGrid">
      <span>Task Grid</span>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>{task.id}, {task.title}, {task.status}</li>
        ))}
      </ul>

      <Notification
        text='New task added!'
        open={open}
        onClose={() => setOpen(false)}
      />
    </main>
  );
}

export default TaskGrid;
