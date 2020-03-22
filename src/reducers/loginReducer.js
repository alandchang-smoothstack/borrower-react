import {
    LOGIN_ATTEMPT_FAILURE, LOGIN_ATTEMPT_PENDING,
    LOGIN_ATTEMPT_SUCCESSFUL, LOGIN_INPUT_CHANGE
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
        default:
            return state;
    }
}