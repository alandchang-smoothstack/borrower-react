import { combineReducers } from 'redux';

import checkoutReducer from './checkoutReducer';
import loginReducer from './loginReducer';
import signUpReducer from './signUpReducer';

const rootReducer = combineReducers({
  checkoutReducer,
  loginReducer,
  signUpReducer
});

export default rootReducer;
