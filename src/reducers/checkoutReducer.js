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
  CHANGE_BRANCH,
  CHANGE_PAGE,
  CHANGE_SEARCH,
  RESET_STATE
} from '../constants/checkoutActionTypes';

const initialState = {
  checkoutData: {
    branchList: [],
    copyList: [],
    pageIndex: 0,
    pageSize: 10,
    searchString: '',
    isSearching: false
  }
};

export default (state = initialState, action) => {
  switch (action.type) {
    case READ_BRANCHES_SUCCESSFUL:
      return { ...state, checkoutData: { ...state.checkoutData, status: { requestSuccessful: true }, branchList: action.data || [], branchIndex: 0 } };
    case READ_BRANCHES_PENDING:
      return { ...state, checkoutData: { ...state.checkoutData, status: { requestPending: true } } };
    case READ_BRANCHES_FAILURE:
      return { ...state, checkoutData: { ...state.checkoutData, status: { requestFailed: true }, branchList: [] } };
    case READ_COPIES_SUCCESSFUL:
      return { ...state, checkoutData: { ...state.checkoutData, status: { requestSuccessful: true }, copyList: action.data.copies || [], count: action.data.count, isSearching: false } };
    case READ_COPIES_PENDING:
      return { ...state, checkoutData: { ...state.checkoutData, status: { requestPending: true } } };
    case READ_COPIES_FAILURE:
      return { ...state, checkoutData: { ...state.checkoutData, status: { requestFailed: true }, copyList: [], isSearching: false } };
    case CHECKOUT_BOOK_SUCCESSFUL: {
      const copy = state.checkoutData.copyList[action.data];
      let copyList = [];
      copyList.push(...state.checkoutData.copyList.slice(0, action.data));
      if (copy.amount > 1) {
        copyList.push(Object.assign({}, copy, { amount: copy.amount - 1 }));
      }
      copyList.push(...state.checkoutData.copyList.slice(action.data + 1));
      return { ...state, checkoutData: { ...state.checkoutData, status: { requestSuccessful: true }, copyList } };
    }
    case CHECKOUT_BOOK_PENDING:
      return { ...state, checkoutData: { ...state.checkoutData, status: { requestPending: true } } };
    case CHECKOUT_BOOK_FAILURE:
      return { ...state, checkoutData: { ...state.checkoutData, status: { requestFailed: true } } };
    case CHANGE_BRANCH:
      return { ...state, checkoutData: { ...state.checkoutData, branchIndex: action.data } };
    case CHANGE_PAGE:
      return { ...state, checkoutData: { ...state.checkoutData, pageIndex: action.data } };
    case CHANGE_SEARCH:
      return { ...state, checkoutData: { ...state.checkoutData, searchString: action.data, isSearching: true, pageIndex: 0 } };
    case RESET_STATE:
      return initialState;
    default:
      return state;
  }
}
