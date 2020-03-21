import { combineReducers } from 'redux';

import checkoutReducer from './checkoutReducer';
import returnReducer from './returnReducer';

const rootReducer = combineReducers({
  checkoutReducer,
  returnReducer
});

export default rootReducer;
