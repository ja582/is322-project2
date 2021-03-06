import React from 'react';
import {lighten, makeStyles} from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import TableSortLabel from "@material-ui/core/TableSortLabel";
import * as PropTypes from "prop-types";
import Typography from '@material-ui/core/Typography';


function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

const headCells = [
  {id: 'id', numeric: true, label: 'ID Number'},
  {id: 'name', numeric: false, label: 'Title'},
  {id: 'status', numeric: false, label: 'Status'},
  {id: 'type', numeric: false, label: 'Type'},
];

function Sorter(props) {
  const {classes, order, orderBy, onRequestSort} = props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            padding={headCell.disablePadding ? 'none' : 'default'}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : 'asc'}
              onClick={createSortHandler(headCell.id)}
            >
              <strong>{headCell.label}</strong>
              {orderBy === headCell.id ? (
                <span className={classes.visuallyHidden}>
                  {order === 'desc' ? ' |  descending' : ' | ascending'}
                </span>) : null}
            </TableSortLabel>
          </TableCell>))}
      </TableRow>
    </TableHead>);
}

Sorter.propTypes = {
  classes: PropTypes.object.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  order: PropTypes.oneOf(['asc', 'desc']).isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
};

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function TaskList({tasks}) {
  const classes = useStyles();
  const [order, setOrder] = React.useState('asc');
  const [orderBy, setOrderBy] = React.useState('title');
  const [page] = React.useState(0);
  const [rowsPerPage] = React.useState(50);

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  return (
    <Container maxWidth="med" style={{marginTop: '1rem'}}>
      <div>Click column headers to order.</div>
      <main className="TaskList">
        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="simple table">
            <Sorter
              classes={classes}
              order={order}
              orderBy={orderBy}
              onRequestSort={handleRequestSort}
              rowCount={tasks.length}
            />
            <TableBody>
              {stableSort(tasks, getComparator(order, orderBy))
               .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
               .map((tasks, index) => {
                 return (
                   <TableRow>
                     <TableCell>{tasks.id}</TableCell>
                     <TableCell>{tasks.title}</TableCell>
                     <TableCell>{tasks.status}</TableCell>
                     <TableCell>{tasks.type}</TableCell>
                   </TableRow>
                 );
               })}
            </TableBody>
          </Table>
        </TableContainer>
      </main>
    </Container>
  );
}

export default TaskList;
