import React, { Component, PropTypes } from 'react';

export default class PomodoroRecord extends Component {
  render() {
    const pomodoro = this.props.pomodoro;
    const startTime = this.props.startTime;
    const startTimeLabel = new Date(pomodoro.times.start);
    const endTimeLabel = new Date(pomodoro.times.end);
    const totalTime = this.props.totalTime;
    const time = pomodoro.times.end - pomodoro.times.start;
    const minutes = parseInt(time / 1000 / 60, 10);
    const width = Math.round((time / totalTime) * 400);
    const left = Math.round(((pomodoro.times.start - startTime) / totalTime) * 400);
    const styles = {
      width: `${width}px`,
      left: `${left}px`,
      height: '40px',
      position: 'absolute'
    };
    const innerStyles = {
      width: `${width}px`
    };
    return (
      <div style={styles} className="pomodoro-record-container">
        <div style={innerStyles} className={`pomodoro-record ${pomodoro.type}`} >{minutes}m</div>
        <span className="marker left-marker">
          {`${startTimeLabel.getHours()}:${startTimeLabel.getMinutes()}`}
        </span>
        <span className="marker right-marker">
          {`${endTimeLabel.getHours()}:${endTimeLabel.getMinutes()}`}
        </span>
      </div>
    );
  }
}

PomodoroRecord.propTypes = {
  pomodoro: PropTypes.object,
  totalTime: PropTypes.number,
  startTime: PropTypes.number,
  runningTime: PropTypes.number
};