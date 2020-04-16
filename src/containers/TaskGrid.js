import { connect } from 'react-redux';
import { setTask } from '../actions';
import TaskGrid    from '../components/TaskGrid';

const mapStateToProps = ({ tasks }) => ({
  tasks: tasks.tasks
});

const mapDispatchToProps = (dispatch) => ({
  setTask: (task) => dispatch(setTask(task))
});

export default connect(mapStateToProps, mapDispatchToProps)(TaskGrid);
