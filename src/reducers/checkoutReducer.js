import {
  READ_BRANCHES_SUCCESSFUL,
  READ_BRANCHES_PENDING,
  READ_BRANCHES_FAILURE,
  READ_COPIES_SUCCESSFUL,
  READ_COPIES_PENDING,
  READ_COPIES_FAILURE,
  CHECKOUT_BOOK_SUCCESSFUL,
  CHECKOUT_BOOK_PENDING,
  CHECKOUT_BOOK_FAILURE,
  CHANGE_BRANCH
} from '../constants/checkoutActionTypes';

export default (state = {}, action) => {
  switch (action.type) {
    case READ_BRANCHES_SUCCESSFUL:
      return { ...state, status: { requestSuccessful: true }, branchList: action.data, branchIndex: 0, copyList: [], page: 1, pageSize: 10 };
    case READ_BRANCHES_PENDING:
      return { ...state, status: { requestPending: true } };
    case READ_BRANCHES_FAILURE:
      return { ...state, status: { requestFailed: true } };
    case READ_COPIES_SUCCESSFUL:
      console.log(action.data);
      return { ...state, status: { requestSuccessful: true }, copyList: action.data.copies || [], count: action.data.count };
    case READ_COPIES_PENDING:
      return { ...state, status: { requestPending: true } };
    case READ_COPIES_FAILURE:
      return { ...state, status: { requestFailed: true }, copyList: [] };
    case CHECKOUT_BOOK_SUCCESSFUL: {
      let copiesList = [...state.checkoutData.copiesList];
      copiesList[action.data.index] = action.data.copy;
      return { ...state, status: { requestSuccessful: true }, copiesList: copiesList };
    }
    case CHECKOUT_BOOK_PENDING:
      return { ...state, status: { requestPending: true } };
    case CHECKOUT_BOOK_FAILURE:
      return { ...state, status: { requestFailed: true } };
    case CHANGE_BRANCH:
      return { ...state, branchIndex: action.data };
    default:
      return state;
  }
}
