import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Timer from '../components/timer/Timer';
import * as PomodoroActions from '../actions/pomodoros';

function mapStateToProps(state) {
  return {
    currentPomodoro: state.pomodoroTypes[state.selectedType]
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(PomodoroActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Timer);
