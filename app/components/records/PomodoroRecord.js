import React, { Component, PropTypes } from 'react';

export default class PomodoroRecord extends Component {
  render() {
    const minutes = parseInt(this.props.pomodoro.time / 60, 10) % 60;
    const pixelWidth = (this.props.pomodoro.time / this.props.totalTime) * 400;
    const runningPixelWidth = (this.props.pomodoro.runningTime / this.props.totalTime) * 400;
    const styles = {
      width: `${pixelWidth}px`,
      left: `${runningPixelWidth}px`
    };
    return (
      <li style={styles} className={`pomodoro-record ${this.props.pomodoro.type}`}>
        {minutes}<span className="min">m</span>
      </li>
    );
  }
}

PomodoroRecord.propTypes = {
  pomodoro: PropTypes.object,
  totalTime: PropTypes.number,
  runningTime: PropTypes.number
};
