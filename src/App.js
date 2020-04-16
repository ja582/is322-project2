import React, { Fragment } from 'react';
import { Route, Switch }   from 'react-router-dom';
import { connect }         from 'react-redux';
import './App.css';

import Bar      from './components/Bar';
import TaskAdd  from './containers/TaskAdd';
import TaskGrid from './containers/TaskGrid';
import TaskList from './containers/TaskList';

import { addTasks } from './actions';


function App({ addTasks }) {
  document.title = 'Taskboard';

  // Fetch from "API"
  fetch('https://raw.githubusercontent.com/ja582/is322-project2/dev/src/db.json')
    .then((response) => {
      return response.json();
    }).then((data) => {
      addTasks(data);
    });

  return (
    <Fragment>
      <Bar />
      <main className="App">
        <Switch>
          <Route path='/'     component={TaskGrid} exact />
          <Route path='/list' component={TaskList} />
          <Route path='/add'  component={TaskAdd} />
        </Switch>
      </main>
    </Fragment>
  );
}

const mapStateToProps = () => ({});

const mapDispatchToProps = (dispatch) => ({
  addTasks: (tasks) => {
    dispatch(addTasks({ tasks }));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
