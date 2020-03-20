import { combineReducers } from 'redux';

import checkoutReducer from './checkoutReducer';
import modalReducer from './modalReducer';

const rootReducer = combineReducers({
  checkoutReducer,
  modalReducer
});

export default rootReducer;
