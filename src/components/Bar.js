import React    from 'react';
import { Link } from "react-router-dom";
import { AppBar, Toolbar, Typography, Button } from '@material-ui/core';

function Bar() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6">Taskboard</Typography>
        <Button to="/"     component={Link} color="inherit">Task Grid</Button>
        <Button to="/list" component={Link} color="inherit">Task List</Button>
        <Button to="/add"  component={Link} color="inherit">Add Task</Button>
      </Toolbar>
    </AppBar>
  );
}

export default Bar;
