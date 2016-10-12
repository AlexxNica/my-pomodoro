import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PomodoroTypes from '../components/types/PomodoroTypes';
import * as PomodoroActions from '../actions/pomodoros';

function mapStateToProps(state) {
  return {
    types: state.pomodoroTypes,
    selected: state.selectedType
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(PomodoroActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(PomodoroTypes);
