import React, { Component } from 'react';
import PomodoroTypesContainer from '../containers/PomodoroTypesContainer';
import TimerContainer from '../containers/TimerContainer';
import RecordedPomodorosContainer from '../containers/RecordedPomodorosContainer';

export default class Main extends Component {
  render() {
    return (
      <div className="container">
        <PomodoroTypesContainer />
        <TimerContainer />
        <RecordedPomodorosContainer />
      </div>
    );
  }
}
