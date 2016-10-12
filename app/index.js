import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import App from './containers/App';
import './app.global.css';

const store = configureStore({
  pomodoroTypes: {
    work: {
      type: 'work',
      time: 25,
      name: 'Work'
    },
    shortBreak: {
      type: 'shortBreak',
      time: 5,
      name: 'Short Break'
    },
    longBreak: {
      type: 'longBreak',
      time: 30,
      name: 'Long Break'
    }
  },
  selectedType: 'work',
  recordedPomodoros: []
});

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
