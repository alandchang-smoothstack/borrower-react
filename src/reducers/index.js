import { combineReducers } from 'redux';

import loginReducer from './loginReducer';
import signUpReducer from './signUpReducer';
import checkoutReducer from './checkoutReducer';
import returnReducer from './returnReducer';
import modalReducer from './modalReducer';

const rootReducer = combineReducers({
  loginReducer,
  checkoutReducer,
  loginReducer,
  signUpReducer,
  returnReducer,
  modalReducer
});

export default rootReducer;
