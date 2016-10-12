import React, { Component, PropTypes } from 'react';
import PomodoroRecord from './PomodoroRecord';

export default class RecordedPomodoros extends Component {
  render() {
    let totalTime = 0;
    const pomodoros = this.props.recorded.map(pomodoro => {
      const alteredPomodoro = {
        ...pomodoro,
        runningTime: totalTime
      };
      totalTime += pomodoro.time;
      return alteredPomodoro;
    });

    return (
      <ul className="pomodoro-record-list">
        {pomodoros.map((pomodoro, i) => (
          <PomodoroRecord
            key={i}
            pomodoro={pomodoro}
            totalTime={totalTime}
          />
        ))}
      </ul>
    );
  }
}

RecordedPomodoros.propTypes = {
  recorded: PropTypes.arrayOf(PropTypes.object)
};
