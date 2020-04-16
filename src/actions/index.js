export const TaskStatuses = {
  toDo       : 'To-Do',
  inProgress : 'In-Progress',
  inReview   : 'In-Review',
  done       : 'Done',
};

export const TaskTypes = {
  task    : 'Task',
  feature : 'Feature',
  bug     : 'Bug',
};

export const setTask = ({ id, status }) => ({
  type: 'SET_TASK', id, status
});

export const addTask = ({ title, status, type }) => ({
  type: 'ADD_TASK', title, status, taskType: type
});

export const addTasks = ({ tasks }) => ({
  type: 'ADD_TASKS', tasks
});
