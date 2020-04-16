const initialState = {
  nextId : 0,
  tasks  : [],
};

export default (state = initialState, action) => {
  switch (action.type) {

    /**
     * Adding multiple new tasks.
     */
    case 'ADD_TASKS':
      const newTasks = action.tasks.map((task) => ({
        id     : state.nextId++,
        title  : task.title,
        status : task.status,
        type   : task.type
      }));
      return Object.assign({}, state, {
        tasks  : [ ...state.tasks, ...newTasks],
        nextId : state.nextId
      });

    /**
     * Adding a new task.
     */
    case 'ADD_TASK':
      const newTask = {
        id: state.nextId, title: action.title, status: action.status
      };
      return Object.assign({}, state, {
        tasks  : [ ...state.tasks, newTask],
        nextId : state.nextId + 1
      });

    /**
     * Setting a task's status.
     */
    case 'SET_TASK':
      return {
        ...state,
        tasks: state.tasks.map((task, i) =>
          i === action.id ? {  ...task, status: action.status } : task
        )
      }

    /**
     * Default.
     */
    default:
      return state;
  }
};
