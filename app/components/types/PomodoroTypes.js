import React, { Component, PropTypes } from 'react';
import PomodoroTypeButton from './PomodoroTypeButton';

export default class PomodoroTypes extends Component {
  render() {
    return (
      <div className="type-selectors">
        {Object.keys(this.props.types).map(type => (
          <PomodoroTypeButton
            key={type}
            {...this.props.types[type]}
            selected={this.props.selected === type}
            selectType={this.props.selectType}
            updatePomodoroTime={this.props.updatePomodoroTime}
          />
        ))}
      </div>
    );
  }
}

PomodoroTypes.propTypes = {
  types: PropTypes.object,
  selected: PropTypes.string,
  selectType: PropTypes.func,
  updatePomodoroTime: PropTypes.func
};
