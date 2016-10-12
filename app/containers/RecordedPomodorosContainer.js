import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import RecordedPomodoros from '../components/records/RecordedPomodoros';
import * as PomodoroActions from '../actions/pomodoros';

function mapStateToProps(state) {
  return {
    recorded: state.recordedPomodoros
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(PomodoroActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(RecordedPomodoros);
