
import axios from 'axios'

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

export const readBranches = () => {
    return dispatch => {
        dispatch(_readBranchesStarted());
        return axios.get(`${process.env.REACT_APP_API_URL}/branches`)
            .then(res => {
                dispatch(_readBranchesSuccess(res));
            })
            .catch((error) => {
                console.log(error);
                dispatch(_readBranchesFailed(error));
            });
    };
}

export const readCopies = (branchId, { searchString, pageIndex, pageSize }) => {
    return dispatch => {
        let url = `${process.env.REACT_APP_API_URL}/branches/${branchId}/copies`;
        let query = [];
        if (searchString && searchString.length) query.push(`title=${searchString}`);
        if (pageIndex >= 0) query.push(`page=${pageIndex + 1}`);
        if (pageSize) query.push(`pagesize=${pageSize}`);
        if (query.length) {
            url += '?';
            url += query.join('&');
        }
        dispatch(_readCopiesStarted());
        return axios.get(url)
            .then(res => {
                dispatch(_readCopiesSuccess(res));
            })
            .catch((error) => {
                console.log(error);
                dispatch(_readCopiesFailed(error));
            });
    };
}

export const checkoutBook = ({ index, borrowerId, branchId, bookId }) => {
    borrowerId = '5e66949385ed682e1800f4a2';
    return dispatch => {
        dispatch(_checkoutBookStarted());
        return axios.post(`${process.env.REACT_APP_API_URL}/loans`, { borrowerId, branchId, bookId })
            .then(() => {
                dispatch(_checkoutBookSuccess({ data: index }));
            })
            .catch((error) => {
                console.log(error);
                dispatch(_checkoutBookFailed(error));
            });
    };
}

export const changeBranch = (branchIndex) => {
    return dispatch => {
        dispatch(_changeBranch(branchIndex));
    };
}

export const changePage = (pageIndex) => {
    return dispatch => {
        dispatch(_changePage(pageIndex));
    };
}

export const changeSearch = (searchString) => {
    return dispatch => {
        dispatch(_changeSearch(searchString));
    };
}

export const resetState = () => {
    return dispatch => {
        dispatch(_resetState());
    };
}

const _readBranchesSuccess = (res) => {
    return {
        type: READ_BRANCHES_SUCCESSFUL,
        data: res.data
    };
}

const _readBranchesFailed = (error) => {
    return {
        type: READ_BRANCHES_FAILURE,
        error
    };
}

const _readBranchesStarted = () => {
    return {
        type: READ_BRANCHES_PENDING
    };
}

const _readCopiesSuccess = (res) => {
    return {
        type: READ_COPIES_SUCCESSFUL,
        data: res.data
    };
}

const _readCopiesFailed = (error) => {
    return {
        type: READ_COPIES_FAILURE,
        error
    };
}

const _readCopiesStarted = () => {
    return {
        type: READ_COPIES_PENDING
    };
}

const _checkoutBookSuccess = (res) => {
    return {
        type: CHECKOUT_BOOK_SUCCESSFUL,
        data: res.data
    };
}

const _checkoutBookFailed = (error) => {
    return {
        type: CHECKOUT_BOOK_FAILURE,
        error
    };
}

const _checkoutBookStarted = () => {
    return {
        type: CHECKOUT_BOOK_PENDING
    };
}

const _changeBranch = (branchIndex) => {
    return {
        type: CHANGE_BRANCH,
        data: branchIndex
    };
}

const _changePage = (pageIndex) => {
    return {
        type: CHANGE_PAGE,
        data: pageIndex
    };
}

const _changeSearch = (searchString) => {
    return {
        type: CHANGE_SEARCH,
        data: searchString
    };
}

const _resetState = () => {
    return {
        type: RESET_STATE
    };
}