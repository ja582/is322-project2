import React        from 'react';
import { Redirect } from "react-router-dom";

import { TaskStatuses, TaskTypes } from '../actions';

import {
  Button, TextField, Select, MenuItem, Container
} from '@material-ui/core';

import {
  Close as CloseIcon
} from '@material-ui/icons';


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
    <Container fixed>
      { complete &&
        <Redirect to={{
          pathname : '/',
          state    : { submit: true }
        }} />
      }
      <div>
        <TextField
          label="Task Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div>
        <Select value={status} onChange={(e) => setStatus(e.target.value)}>
          {Object.entries(TaskStatuses).map(([key, value]) => (
            <MenuItem value={key}>{value}</MenuItem>
          ))}
        </Select>
      </div>
      <div>
        <Select value={type} onChange={(e) => setType(e.target.value)}>
          {Object.entries(TaskTypes).map(([key, value]) => (
            <MenuItem value={key}>{value}</MenuItem>
          ))}
        </Select>
      </div>
      <div>
        <Button onClick={(e) => clickAdd(e)}>Add Task</Button>
      </div>
    </Container>
  );
}

export default TaskAdd;
