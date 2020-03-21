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

export const changePage = (cardNo, page, pageSize) => {
    return dispatch => {
        dispatch(_changePage(page, pageSize));
        readLoans(cardNo, page, pageSize)(dispatch);
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

export const returnBook = (loanId, cardNo, page, pageSize) => {
    return dispatch => {
        dispatch(_returnBookStarted());
        return axios.put('http://localhost:3000/loans', { loanId })
            .then(() => {
                dispatch(_returnBookSuccess());
                readLoans(cardNo, page, pageSize)(dispatch);
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

const _changePage = (page, pageSize) => {
    return {
        type: CHANGE_PAGE,
        data: { 
            page,
            pageSize
        }
    };
}