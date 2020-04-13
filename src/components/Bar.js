import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';

function Bar() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6">Task Board</Typography>
      </Toolbar>
    </AppBar>
  );
}

export default Bar;
