import React        from 'react';
import { Redirect } from "react-router-dom";

import { TaskStatuses, TaskTypes } from '../actions';

import {
  Typography, Button, TextField, Select, MenuItem, Container, Card, CardContent,
  FormHelperText
} from '@material-ui/core';


function TaskAdd({ defaults = {}, onSubmit, history }) {
  const [title, setTitle]       = React.useState(defaults.title  || '');
  const [status, setStatus]     = React.useState(defaults.status || 'toDo');
  const [type, setType]         = React.useState(defaults.status || 'task');
  const [complete, setComplete] = React.useState(false);

  const clickAdd = (event) => {
    if (typeof onSubmit != 'function')
      return;

    if (onSubmit(event, { title, status })) {
      setComplete(true);
    }
  };

  return (
    <Container maxWidth="xs">
      <Card style={{marginTop: '1rem'}}>
        <CardContent>
          <Typography variant="h6">New Task</Typography>
          <form noValidate autoComplete="off">
            { complete &&
              <Redirect to={{
                pathname : '/',
                state    : { submit: true }
              }} />
            }
            <div style={{marginTop: '1rem'}}>
              <TextField
                label="Task Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div style={{marginTop: '1rem'}}>
              <FormHelperText>Task Status</FormHelperText>
              <Select value={status} onChange={(e) => setStatus(e.target.value)}>
                {Object.entries(TaskStatuses).map(([key, value]) => (
                  <MenuItem value={key}>{value}</MenuItem>
                ))}
              </Select>
            </div>
            <div style={{marginTop: '1rem'}}>
              <FormHelperText>Task Type</FormHelperText>
              <Select value={type} onChange={(e) => setType(e.target.value)}>
                {Object.entries(TaskTypes).map(([key, value]) => (
                  <MenuItem value={key}>{value}</MenuItem>
                ))}
              </Select>
            </div>
            <div style={{marginTop: '1rem'}}>
              <Button color="primary" onClick={(e) => clickAdd(e)}>Add Task</Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </Container>
  );
}

export default TaskAdd;
