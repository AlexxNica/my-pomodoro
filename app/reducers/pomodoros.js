import {
  SELECT_TYPE,
  UPDATE_POMODORO_TIME,
  ADD_POMODORO,
  CLEAR_POMODOROS
} from '../actions/pomodoros';

export default function pomodoro(state = 0, action) {
  switch (action.type) {
    case SELECT_TYPE:
      return {
        ...state,
        selectedType: action.payload.type
      };
    case UPDATE_POMODORO_TIME:
      return {
        ...state,
        pomodoroTypes: {
          ...state.pomodoroTypes,
          [action.payload.type]: {
            ...state.pomodoroTypes[action.payload.type],
            time: parseInt(action.payload.time.replace(/\D/g, ''))
          }
        }
      };
    case ADD_POMODORO:
      return {
        ...state,
        recordedPomodoros: [
          ...state.recordedPomodoros,
          action.payload
        ]
      };
    case CLEAR_POMODOROS:
      return {
        ...state,
        recordedPomodoros: []
      };
    default:
      return state;
  }
};