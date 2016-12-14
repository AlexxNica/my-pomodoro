import React, { Component, PropTypes } from 'react';
import { ipcRenderer } from 'electron';

export default class Timer extends Component {
  constructor(props) {
    super(props);
    this.loop = this.loop.bind(this);
    this.state = {
      progress: 0
    };
  }

  componentDidMount() {
    this.notificationSent = false;
    requestAnimationFrame(this.loop);
  }

  componentWillUpdate(nextProps) {
    if (this.props.currentPomodoro !== nextProps.currentPomodoro) {
      this.stopTimer();
    }
  }

  startTimer() {
    this.startTime = new Date().getTime();
    this.timerOn = true;
    this.timeout = setTimeout(() => this.notify(this.props.currentPomodoro.type),
      this.props.currentPomodoro.time * 60 * 1000);
    this.startBtn.style.display = 'none';
    this.stopBtn.style.display = 'block';

    ipcRenderer.send('change-icon', this.props.currentPomodoro.type);
  }

  stopTimer() {
    if (this.timerOn) {
      this.props.addPomodoro(this.props.currentPomodoro.type, {
        start: this.startTime,
        end: new Date().getTime()
      });
      this.timerOn = false;
      clearTimeout(this.timeout);
      this.startBtn.style.display = 'block';
      this.stopBtn.style.display = 'none';
      this.setState({ progress: 0 });
      ipcRenderer.send('change-icon', 'off');
    }
  }

  notify(type) {
    new Notification( // eslint-disable-line no-new
      'Time\'s Up!', {
        body: type === 'work' ? 'You can take a break :)' : 'back to work!',
        sound: 'audio/what-friends-are-for.mp3'
      }
    );
  }

  loop() {
    if (this.timerOn) {
      const t = new Date().getTime();
      const seconds = (t - this.startTime) / 1000;
      let progress = (seconds / (this.props.currentPomodoro.time * 60)).toFixed(3);
      if (progress > 1) progress = 1;
      if (this.state.progress !== progress) this.setState({ progress, seconds });
    }
    requestAnimationFrame(this.loop);
  }

  render() {
    const styles = {
      display: 'none'
    };

    const pathStyles = {
      strokeDashoffset: 380 - (this.state.progress * 380)
    };
    const minutesStyles = {
      display: this.state.progress === 0 ? 'none' : 'block'
    };

    return (
      <div className="progress">
        <button
          className="play"
          ref={e => this.startBtn = e}
          onClick={() => this.startTimer()}
        >
          <svg viewBox="0 0 75.37 78.36">
            <polygon points="0 39.18 0 0 37.75 19.59 75.38 39.18 37.69 58.77 0 78.36 0 39.18" />
          </svg>
        </button>
        <button
          className="stop"
          ref={e => this.stopBtn = e}
          onClick={() => this.stopTimer()}
          style={styles}
        >
          <svg viewBox="0 0 75.23 75.23">
            <rect width="75.23" height="75.23" />
          </svg>
        </button>
        <svg className="progress-svg" width="160" height="160" viewBox="0 0 160 160">
          <path
            ref={p => this.svgPath = p}
            style={pathStyles}
            className={this.props.currentPomodoro.type}
            d="M20,80a60,60 0 1,0 120,0a60,60 0 1,0 -120,0"
          />
        </svg>
        <svg className="progress-svg" width="160" height="160" viewBox="0 0 160 160">
          <circle className="timer-border" cx="80" cy="80" r="42" />
          <circle className="timer-border" cx="80" cy="80" r="79" />
        </svg>
        <p
          className="minutes-progress"
          style={minutesStyles}
        >{Math.floor(this.state.seconds / 60)} minutes
        </p>
      </div>
    );
  }
}

Timer.propTypes = {
  currentPomodoro: PropTypes.shape({
    type: PropTypes.string,
    time: PropTypes.number
  }),
  addPomodoro: PropTypes.func
};