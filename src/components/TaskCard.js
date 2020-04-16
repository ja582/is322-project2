import React from 'react';
import { TaskStatuses, TaskTypes } from '../actions';

import {
  Box, Button, Card, CardContent, CardActions
} from '@material-ui/core';


function TaskCard({ id, title, type, status, setTask }) {
  let actions;

  const toDoButton = (
    <Button color="primary" onClick={() => setTask({ id, status: 'toDo' })}>
      Set To-Do
    </Button>
  );

  const inProgressButton = (
    <Button color="primary" onClick={() => setTask({ id, status: 'inProgress' })}>
      Set In-Progress
    </Button>
  );

  const inReviewButton = (
    <Button size="small" color="primary" onClick={() => setTask({ id, status: 'inReview' })}>
      Set In-Review
    </Button>
  );

  const doneButton = (
    <Button color="primary" onClick={() => setTask({ id, status: 'done' })}>
      Set Done
    </Button>
  );

  switch (status) {
    case 'toDo':
      actions = (inProgressButton);
      break;

    case 'inProgress':
      actions = (<React.Fragment>{toDoButton}{inReviewButton}</React.Fragment>);
      break;

    case 'inReview':
      actions = (<React.Fragment>{inProgressButton}{doneButton}</React.Fragment>);
      break;

    default:
      actions = (inReviewButton);
      break;
  }

  return (
    <Box m={2}>
      <Card>
        <CardContent>
          {title}
        </CardContent>
        <CardContent>
          <div>
            <small>
              <strong>ID: </strong> {id}
            </small>
          </div>
          <div>
            <small>
              <strong>Type: </strong> {TaskTypes[type]}
            </small>
          </div>
          <div>
            <small>
              <strong>Status:</strong> {TaskStatuses[status]}
            </small>
          </div>
        </CardContent>
        {actions &&
         <CardActions>
           {actions}
         </CardActions>}
      </Card>
    </Box>
  );
}

export default TaskCard;
