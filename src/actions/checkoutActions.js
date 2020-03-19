
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
    CHANGE_BRANCH
} from '../constants/checkoutActionTypes';

export const readBranches = () => {
    return dispatch => {
        dispatch(_readBranchesStarted());
        return axios.get(`http://localhost:3000/branches`)
            .then(res => {
                dispatch(_readBranchesSuccess(res));
            })
            .catch((error) => {
                console.log(error);
                dispatch(_readBranchesFailed(error));
            });
    };
}

export const readCopies = (branchId, page, pageSize) => {
    return dispatch => {
        dispatch(_readCopiesStarted());
        return axios.get(`http://localhost:3000/branches/${branchId}/copies?page=${page}&pagesize=${pageSize}`)
            .then(res => {
                dispatch(_readCopiesSuccess(res));
            })
            .catch((error) => {
                console.log(error);
                dispatch(_readCopiesFailed(error));
            });
    };
}

export const checkoutBook = (borrowerId, branchId, bookId) => {
    console.log(borrowerId + ' ' + branchId + ' ' + bookId);
    return dispatch => {
        dispatch(_checkoutBookStarted());
        return axios.get(`http://www.mocky.io/v2/5e68f06a2f0000c276d8b12f`)
            .then(res => {
                dispatch(_checkoutBookSuccess(res));
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