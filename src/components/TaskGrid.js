import React from 'react';
import {Container, Grid} from '@material-ui/core';

import Notification from './Notification';
import TaskCard from '../containers/TaskCard';

import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme) => ({
    container: {
        display: 'grid',
        gridTemplateColumns: 'repeat(12, 1fr)',
        gridGap: theme.spacing(3),
    },
    paper: {
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        whiteSpace: 'nowrap',
        marginBottom: theme.spacing(1),
    },
    divider: {
        margin: theme.spacing(2, 0),
    },
}));

function TaskGrid({ tasks, location: { state } }) {
  const [open, setOpen] = React.useState(state ? state.submit : false);

  const toDoTasks       = tasks.filter((task) => task.status === 'toDo');
  const inProgressTasks = tasks.filter((task) => task.status === 'inProgress');
  const reviewTasks     = tasks.filter((task) => task.status === 'inReview');
  const doneTasks       = tasks.filter((task) => task.status === 'done');

    const classes = useStyles();

  return (
    <main className="TaskGrid">
        <Container fixed>
      <Grid container spacing={2}>
        <Grid item xs>
            <Paper className={classes.paper}>
          {toDoTasks.map((task) => (
            <TaskCard {...task} />
          ))}
            </Paper>
        </Grid>
        <Grid item xs>
            <Paper className={classes.paper}>
          {inProgressTasks.map((task) => (
            <TaskCard {...task} />
          ))}
            </Paper>
        </Grid>
        <Grid item xs>
            <Paper className={classes.paper}>
          {reviewTasks.map((task) => (
            <TaskCard {...task} />
          ))}
            </Paper>
        </Grid>
        <Grid item xs>
            <Paper className={classes.paper}>
          {doneTasks.map((task) => (
            <TaskCard {...task} />
          ))}
            </Paper>
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
