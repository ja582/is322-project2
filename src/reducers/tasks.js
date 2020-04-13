const initialState = {
  nextId : 0,
  items  : [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    /**
     * Adding a new task.
     */
    case 'ADD_TASK':
      const { title, status } = action;
      return Object.assign({}, state, {
        items  : [ ...state.items, { id: state.nextId, title, status }],
        nextId : state.nextId + 1
      });

    /**
     * Default.
     */
    default:
      return state;
  }
};
