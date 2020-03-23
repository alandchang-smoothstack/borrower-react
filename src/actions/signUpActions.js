import axios from 'axios';

import {
    SIGN_UP_FAILURE, SIGN_UP_SUCCESSFUL,
    SIGN_UP_PENDING, SIGN_UP_PHONE_INPUT,
    SIGN_UP_NAME_INPUT, SIGN_UP_ADDRESS_INPUT,
    RESET_STATE
} from '../constants/signUpActionTypes';

import { LOGIN_ATTEMPT_SUCCESSFUL } from '../constants/loginActionTypes';

export const signUp = (nameIn, phoneIn, addressIn) => {
    return dispacth => {
        dispacth(_signUpStarted());
        let borrower = {
            name: nameIn,
            phone: phoneIn,
            address: addressIn
        }
        return axios.post(`${process.env.REACT_APP_API_URL}/borrowers/`, borrower)
            .then(res => {
                if (res.data._id) {
                    dispacth(_signUpSuccessful(res.data));
                    dispacth(_loginSuccessful(res.data));
                } else {
                    dispacth(_signUpFailure(new Error("Unkown Server Error")));
                }
            }).catch(err => {
                console.log(err);
                dispacth(_signUpFailure(err));
            })
    }
}

const _resetState = () => {
    return {
        type: RESET_STATE
    }
}

export const resetState = () => {
    return dispacth => {
        dispacth(_resetState());
    }
}


export const inputName = (newData) => {
    return {
        type: SIGN_UP_NAME_INPUT,
        data: newData
    }

}

export const inputAddress = (newData) => {
    return {
        type: SIGN_UP_ADDRESS_INPUT,
        data: newData
    }
}
export const inputPhone = (newData) => {
    return {
        type: SIGN_UP_PHONE_INPUT,
        data: newData
    }

}

const _signUpFailure = (err) => {
    return {
        type: SIGN_UP_FAILURE,
        err
    }
}

const _signUpStarted = () => {
    return {
        type: SIGN_UP_PENDING
    }
}

const _signUpSuccessful = (res) => {
    return {
        type: SIGN_UP_SUCCESSFUL,
        data: res
    }
}

const _loginSuccessful = (res) => {
    return {
        type: LOGIN_ATTEMPT_SUCCESSFUL,
        data: res
    };
};