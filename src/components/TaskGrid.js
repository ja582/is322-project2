import React from 'react';
import {Container, Grid} from '@material-ui/core';

import Notification from './Notification';
import TaskCard from '../containers/TaskCard';

import Typography from '@material-ui/core/Typography';


function TaskGrid({ tasks, location: { state } }) {
  const [open, setOpen] = React.useState(state ? state.submit : false);

  const toDoTasks       = tasks.filter((task) => task.status === 'toDo');
  const inProgressTasks = tasks.filter((task) => task.status === 'inProgress');
  const reviewTasks     = tasks.filter((task) => task.status === 'inReview');
  const doneTasks       = tasks.filter((task) => task.status === 'done');

  return (
    <main className="TaskGrid">
        <Container fixed>
      <Grid container spacing={2}>
        <Grid item xs>
            <Typography variant="h6">To-Do</Typography>
          {toDoTasks.map((task) => (
            <TaskCard {...task} />
          ))}
        </Grid>
        <Grid item xs>
            <Typography variant="h6">In Progress</Typography>
          {inProgressTasks.map((task) => (
            <TaskCard {...task} />
          ))}
        </Grid>
        <Grid item xs>
            <Typography variant="h6">Review</Typography>
          {reviewTasks.map((task) => (
            <TaskCard {...task} />
          ))}
        </Grid>
        <Grid item xs>
            <Typography variant="h6">Done</Typography>
          {doneTasks.map((task) => (
            <TaskCard {...task} />
          ))}
        </Grid>
      </Grid>
        </Container>
      <Notification
        text='New task added!'
        open={open}
        onClose={() => setOpen(false)}
      />
    </main>
  );
}

export default TaskGrid;
