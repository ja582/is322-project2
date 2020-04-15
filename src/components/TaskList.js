import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
});

function TaskList({ tasks }) {
    const classes = useStyles();
  return (
    <main className="TaskList">
      <span>Task List</span>
        <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell><b>ID Number</b></TableCell>
                        <TableCell align="right"><b>Title</b></TableCell>
                        <TableCell align="right"><b>Status</b></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {tasks.map((task) => (
                        <TableRow key={task.id}>
                            <TableCell component="th" scope="row">
                                {task.id}
                            </TableCell>
                            <TableCell align="right">{task.title}</TableCell>
                            <TableCell align="right">{task.status}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    </main>
  );
}

export default TaskList;
