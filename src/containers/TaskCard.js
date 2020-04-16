import { connect } from 'react-redux';
import { setTask } from '../actions';
import TaskCard    from '../components/TaskCard';

const mapStateToProps = () => ({});

const mapDispatchToProps = (dispatch) => ({
  setTask: (task) => dispatch(setTask(task))
});

export default connect(mapStateToProps, mapDispatchToProps)(TaskCard);
