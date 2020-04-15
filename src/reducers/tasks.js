const initialState = {
  nextId : 8,
  items  : [
    { id: 0, title: 'Test 1', status: 'toDo' },
    { id: 1, title: 'Test 2', status: 'inProgress' },
    { id: 2, title: 'Test 3', status: 'review' },
    { id: 3, title: 'Test 4', status: 'done' },
    { id: 4, title: 'Test 5', status: 'toDo' },
    { id: 5, title: 'Test 6', status: 'inProgress' },
    { id: 6, title: 'Test 7', status: 'review' },
    { id: 7, title: 'Test 7', status: 'done' }
  ],
};

export default (state = initialState, action) => {
  switch (action.type) {

    /**
     * Adding multiple new tasks.
     */
    case 'ADD_TASKS':
      const newTasks = action.tasks.map((task) => ({
        id: state.nextId, title: task.title, status: task.status
      }));
      return Object.assign({}, state, {
        items  : [ ...state.items, newTasks],
        nextId : state.nextId + 1
      });

    /**
     * Adding a new task.
     */
    case 'ADD_TASK':
      const newTask = {
        id: state.nextId, title: action.title, status: action.status
      };
      return Object.assign({}, state, {
        items  : [ ...state.items, newTask],
        nextId : state.nextId + 1
      });

    /**
     * Setting a task's status.
     */
    case 'SET_TASK':
      return state;

    /**
     * Default.
     */
    default:
      return state;
  }
};
