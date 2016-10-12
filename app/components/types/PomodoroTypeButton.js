import React, { Component, PropTypes } from 'react';

export default class PomodoroTypeButton extends Component {
  onInputChange() {
    this.props.updatePomodoroTime(this.props.type, this.input.value);
  }

  render() {
    let className = `type-btn ${this.props.type}`;
    let inputClassName = this.props.type;
    if (this.props.selected) {
      className += ' selected';
      inputClassName += ' selected';
    }
    return (
      <div className="button-selector">
        <button
          className={className}
          onClick={() => this.props.selectType(this.props.type)}
        >
          <span>{this.props.name}</span>
        </button>
        <input
          ref={e => this.input = e}
          className={inputClassName}
          type="text"
          value={this.props.time}
          onChange={() => this.onInputChange()}
        />
      </div>
    );
  }
}

PomodoroTypeButton.propTypes = {
  name: PropTypes.string,
  time: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  type: PropTypes.string,
  selected: PropTypes.bool,
  selectType: PropTypes.func,
  updatePomodoroTime: PropTypes.func
};
