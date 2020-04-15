import React from 'react';
import { Snackbar, IconButton } from '@material-ui/core';
import { Close as CloseIcon } from '@material-ui/icons';

function Notification({ text, open, duration, onClose }) {
  return (
    <Snackbar
      open={open}
      autoHideDuration={duration || 5000}
      message={text}
      action={
        <React.Fragment>
          <IconButton size="small" aria-label="close" color="inherit" onClick={onClose}>
            <CloseIcon fontSize="small" />
          </IconButton>
        </React.Fragment>
      }
    />
  );
}

export default Notification;
