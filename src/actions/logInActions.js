import axios from 'axios';

import {
    LOGIN_ATTEMPT_FAILURE,
    LOGIN_ATTEMPT_PENDING,
    LOGIN_ATTEMPT_SUCCESSFUL,
    LOGIN_INPUT_CHANGE,
    LOG_OUT_SUCCESSFUL,
    RESET_STATE
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

const _resetState = () => {
    return {
        type: RESET_STATE
    }
}

export const resetState = () => {
    return dispatch => {
        dispatch(_resetState());
    }
}

export const logOut = () => {
    return {
        type: LOG_OUT_SUCCESSFUL
    }
}

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