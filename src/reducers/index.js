import { combineReducers } from 'redux';

import loginReducer from './loginReducer';
import checkoutReducer from './checkoutReducer';
import returnReducer from './returnReducer';
import modalReducer from './modalReducer';

const rootReducer = combineReducers({
  loginReducer,
  checkoutReducer,
  returnReducer,
  modalReducer
});

export default rootReducer;
