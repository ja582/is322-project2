import React from 'react';

import { Snackbar } from '@material-ui/core';

function TaskGrid({ tasks, location }) {
  return (
    <main className="TaskGrid">
      <span>Task Grid</span>
      <ul>
        {tasks.map((task) => (
          <li>{task.id}, {task.title}, {task.status}</li>
        ))}
      </ul>

      <Snackbar
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        open={location.state ? location.state.submit : false}
        autoHideDuration={5000}
        message="New task added!"
      />
    </main>
  );
}

export default TaskGrid;
