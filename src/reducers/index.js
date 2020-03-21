import { combineReducers } from 'redux';

import checkoutReducer from './checkoutReducer';
import returnReducer from './returnReducer';
import modalReducer from './modalReducer';

const rootReducer = combineReducers({
  checkoutReducer,
  returnReducer,
  modalReducer
});

export default rootReducer;
