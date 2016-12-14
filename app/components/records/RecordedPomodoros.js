import React, { Component, PropTypes } from 'react';
import PomodoroRecord from './PomodoroRecord';

export default class RecordedPomodoros extends Component {
  render() {
    let totalTime;
    let startTime;
    if (this.props.recorded.length > 0) {
      totalTime = this.props.recorded[this.props.recorded.length - 1].times.end -
        this.props.recorded[0].times.start;
      startTime = this.props.recorded[0].times.start;
    }
    const styles = {
      display: this.props.recorded.length > 0 ? 'block' : 'none'
    };

    return (
      <div
        className="pomodoro-record-list"
        style={styles}
      >
        <div className="wrap">
          {this.props.recorded.map((pomodoro, i) => (
            <PomodoroRecord
              key={i}
              pomodoro={pomodoro}
              totalTime={totalTime}
              startTime={startTime}
            />
          ))}
        </div>
        <p><span
          onClick={() => this.props.clearRecordedPomodoros()}
        >clear recorded</span></p>
      </div>
    );
  }
}

RecordedPomodoros.propTypes = {
  recorded: PropTypes.arrayOf(PropTypes.object),
  clearRecordedPomodoros: PropTypes.func
};