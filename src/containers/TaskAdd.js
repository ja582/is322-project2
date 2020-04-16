import { connect } from 'react-redux';
import { addTask } from '../actions';
import TaskForm     from '../components/TaskForm';

const mapStateToProps = (state) => ({
  // ...
});

const mapDispatchToProps = (dispatch) => ({
  onSubmit: (event, { title, status, type }) => {
    event.preventDefault();

    if (typeof title != 'string' || typeof status != 'string')
      return false;

    if (title.length <= 0)
      return false;

    dispatch(addTask({ title: title.trim(), status, type }));
    return true;
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(TaskForm);
