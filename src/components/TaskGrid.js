import React from 'react';
import { Grid } from '@material-ui/core';

import Notification from './Notification';
import TaskCard from '../containers/TaskCard';


function TaskGrid({ tasks, location: { state } }) {
  const [open, setOpen] = React.useState(state ? state.submit : false);

  const toDoTasks       = tasks.filter((task) => task.status === 'toDo');
  const inProgressTasks = tasks.filter((task) => task.status === 'inProgress');
  const reviewTasks     = tasks.filter((task) => task.status === 'inReview');
  const doneTasks       = tasks.filter((task) => task.status === 'done');

  return (
    <main className="TaskGrid">
      <Grid container spacing={2}>
        <Grid item xs>
          {toDoTasks.map((task) => (
            <TaskCard {...task} />
          ))}
        </Grid>
        <Grid item xs>
          {inProgressTasks.map((task) => (
            <TaskCard {...task} />
          ))}
        </Grid>
        <Grid item xs>
          {reviewTasks.map((task) => (
            <TaskCard {...task} />
          ))}
        </Grid>
        <Grid item xs>
          {doneTasks.map((task) => (
            <TaskCard {...task} />
          ))}
        </Grid>
      </Grid>

      <Notification
        text='New task added!'
        open={open}
        onClose={() => setOpen(false)}
      />
    </main>
  );
}

export default TaskGrid;
