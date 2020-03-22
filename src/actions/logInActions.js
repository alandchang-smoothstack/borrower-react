import axios from 'axios';

import {
    LOGIN_ATTEMPT_FAILURE,
    LOGIN_ATTEMPT_PENDING,
    LOGIN_ATTEMPT_SUCCESSFUL,
    LOGIN_INPUT_CHANGE
} from '../constants/loginActionTypes';

export const login = (borrowerId) => {
    return dispatch => {
        dispatch(_loginStarted());
        return axios.get(`http://localhost:3000/borrowers/${borrowerId}`)
            .then(res => {
                if (res.data.name) {
                    dispatch(_loginSuccessful(res.data));
                } else {
                    dispatch(_loginFailed(new Error("Unkown Server Error")));
                }
            }).catch(err => {
                console.log(err);
                dispatch(_loginFailed(err));
            });
    };

};

export const loginIdChange = (inputData) => {
    return {
        type: LOGIN_INPUT_CHANGE,
        data: inputData
    }
};

const _loginFailed = (err) => {
    return {
        type: LOGIN_ATTEMPT_FAILURE,
        err
    }
};

const _loginStarted = () => {
    return {
        type: LOGIN_ATTEMPT_PENDING
    }
};

const _loginSuccessful = (res) => {
    return {
        type: LOGIN_ATTEMPT_SUCCESSFUL,
        data: res
    };
};