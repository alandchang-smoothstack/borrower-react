import { createStore, applyMiddleware, compose } from 'redux';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';
import { loadState, saveState } from './sessionStorage';

function configureStore() {
  const middlewares = [
    reduxImmutableStateInvariant(),
    thunk,
  ];

  let initialState = loadState();

  const enhancers = compose(
    applyMiddleware(...middlewares),
    window.devToolsExtension()
  );

  const store = createStore(
    rootReducer,
    initialState,
    enhancers
  );

  store.subscribe(() => saveState(store.getState()));

  return store;
}

export default configureStore;
