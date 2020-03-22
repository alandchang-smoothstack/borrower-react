import { createStore, applyMiddleware } from 'redux';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';
import { loadState, saveState } from './sessionStorage'

function configureStore() {
  const middlewares = [
    reduxImmutableStateInvariant(),
    thunk,
  ];

  let initialState = loadState();

  const store = createStore(
    rootReducer,
    initialState,
    applyMiddleware(...middlewares)
  );

  store.subscribe(() => saveState(store.getState()));

  return store;
}

export default configureStore;
