export const TaskStatuses = {
  toDo       : 'To Do',
  inProgress : 'In Progress',
  review     : 'Review',
  done       : 'Done',
};

export const setTask = ({ id, status }) => ({
  type: 'SET_TASK', id, status
});

export const addTask = ({ title, status }) => ({
  type: 'ADD_TASK', title, status
});
