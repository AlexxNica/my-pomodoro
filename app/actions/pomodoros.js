export const SELECT_TYPE = 'SELECT_TYPE';
export const UPDATE_POMODORO_TIME = 'UPDATE_POMODORO_TIME';
export const ADD_POMODORO = 'ADD_POMODORO';
export const CLEAR_POMODOROS = 'CLEAR_POMODOROS';

export function selectType(type) {
  return {
    type: SELECT_TYPE,
    payload: {
      type
    }
  };
}

export function updatePomodoroTime(type, time) {
  return {
    type: UPDATE_POMODORO_TIME,
    payload: {
      type,
      time
    }
  };
}

export function addPomodoro(type, time) {
  return {
    type: ADD_POMODORO,
    payload: {
      type,
      time
    }
  };
}
