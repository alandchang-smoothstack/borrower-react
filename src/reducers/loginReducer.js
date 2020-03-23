import {
    LOGIN_ATTEMPT_FAILURE, LOGIN_ATTEMPT_PENDING,
    LOGIN_ATTEMPT_SUCCESSFUL, LOGIN_INPUT_CHANGE,
    LOG_OUT_SUCCESSFUL
} from '../constants/loginActionTypes';

export default function loginReducer(state = {}, action) {
    switch (action.type) {
        case LOGIN_ATTEMPT_FAILURE:
            return { ...state, status: { loginFailure: true } };
        case LOGIN_ATTEMPT_PENDING:
            return { ...state, status: { loginPending: true } };
        case LOGIN_ATTEMPT_SUCCESSFUL:
            return { ...state, status: { loginSuccesful: true }, borrower: action.data, loggedIn: true };
        case LOGIN_INPUT_CHANGE:
            return { ...state, loginId: action.data }
        case LOG_OUT_SUCCESSFUL:
            return { ...state, loggedIn: false, borrower: undefined }
        default:
            return state;
    }
}