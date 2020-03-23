import axios from 'axios';

import {
    READ_LOANS_FAILURE,
    READ_LOANS_PENDING,
    READ_LOANS_SUCCESSFUL,
    RETURN_BOOK_FAILURE,
    RETURN_BOOK_SUCCESSFUL,
    RETURN_BOOK_PENDING,
    CHANGE_PAGE
} from '../constants/returnActionTypes';

export const changePage = (page) => {
    return dispatch => {
        dispatch(_changePage(page));
    };
}

export const readLoans = (cardNo, page, pageSize) => {
    return dispatch => {
        dispatch(_readLoansStarted());
        return axios.get(`http://localhost:3000/borrowers/${cardNo}/loans?page=${page}&pagesize=${pageSize}`)
            .then(res => {
                dispatch(_readLoansSuccess(res));
            })
            .catch((err) => {
                console.log(err);
                dispatch(_readLoansFailure(err));
            });
    };
}

export const returnBook = (loanId, cardNo, page, pageSize, numLoans) => {
    return dispatch => {
        dispatch(_returnBookStarted());
        return axios.put('http://localhost:3000/loans', { loanId })
            .then(() => {
                dispatch(_returnBookSuccess());
                if (numLoans === 1 && page > 1) {
                    changePage(page - 1)(dispatch);
                } else {
                    readLoans(cardNo, page, pageSize)(dispatch);
                }
            })
            .catch((err) => {
                console.log(err);
                dispatch(_returnBookFailure(err));
            });
    };
}

const _readLoansStarted = () => {
    return {
        type: READ_LOANS_PENDING
    };
}

const _readLoansSuccess = (res) => {
    return {
        type: READ_LOANS_SUCCESSFUL,
        data: res.data
    };
}

const _readLoansFailure = (err) => {
    return {
        type: READ_LOANS_FAILURE,
        err
    };
}

const _returnBookStarted = () => {
    return {
        type: RETURN_BOOK_PENDING
    };
}

const _returnBookSuccess = () => {
    return {
        type: RETURN_BOOK_SUCCESSFUL
    };
}

const _returnBookFailure = (err) => {
    return {
        type: RETURN_BOOK_FAILURE,
        err
    };
}

const _changePage = (page) => {
    return {
        type: CHANGE_PAGE,
        page
    };
}