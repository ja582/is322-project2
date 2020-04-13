const initialState = {
  nextId : 1,
  items  : [{
    id: 0,
    title: 'test',
    status: 'in-progress'
  }],
};

export default (state = initialState, action) => {
  switch (action.type) {
    /**
     * Adding a new task.
     */
    case 'ADD_TASK':
      const { title, status } = action;
      return Object.assign({}, state, {
        items  : [ ...state.items, { title, status }],
        nextId : state.nextId + 1
      });

    /**
     * Default.
     */
    default:
      return state;
  }
};
