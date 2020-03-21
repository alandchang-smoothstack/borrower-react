import { combineReducers } from 'redux';

import checkoutReducer from './checkoutReducer';
import loginReducer from './loginReducer';

const rootReducer = combineReducers({
  checkoutReducer,
  loginReducer
});

export default rootReducer;
