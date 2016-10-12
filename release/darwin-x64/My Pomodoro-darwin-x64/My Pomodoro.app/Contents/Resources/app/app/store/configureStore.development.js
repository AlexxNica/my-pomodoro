import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import pomodoros from '../reducers/pomodoros';

import * as pomodoroActions from '../actions/pomodoros';

const actionCreators = {
  ...pomodoroActions
};

const logger = createLogger({
  level: 'info',
  collapsed: true,
});

const enhancer = compose(
  applyMiddleware(thunk, logger),
  window.devToolsExtension ?
    window.devToolsExtension({ actionCreators }) :
    noop => noop
);

export default function configureStore(initialState) {
  const store = createStore(pomodoros, initialState, enhancer);

  if (window.devToolsExtension) {
    window.devToolsExtension.updateStore(store);
  }

  if (module.hot) {
    module.hot.accept('../reducers/pomodoros', () =>
      store.replaceReducer(require('../reducers/pomodoros')) // eslint-disable-line global-require
    );
  }

  return store;
}
