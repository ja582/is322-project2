import React, { Fragment } from 'react';
import { Route, Switch }   from 'react-router-dom';
import './App.css';

import Bar      from './components/Bar';
import TaskAdd  from './containers/TaskAdd';
import TaskGrid from './containers/TaskGrid';
import TaskList from './containers/TaskList';

function App() {
  document.title = 'Taskboard';

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

export default App;
