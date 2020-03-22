import {
    SIGN_UP_FAILURE, SIGN_UP_SUCCESSFUL,
    SIGN_UP_PENDING, SIGN_UP_PHONE_INPUT,
    SIGN_UP_NAME_INPUT, SIGN_UP_ADDRESS_INPUT
} from '../constants/signUpActionTypes';

export default function signUpReducer(state = {}, action) {
    switch (action.type) {
        case SIGN_UP_FAILURE:
            return { ...state, status: { signUpFailure: true } };
        case SIGN_UP_SUCCESSFUL:
            return { ...state, status: { signUpSuccessful: true } };
        case SIGN_UP_PENDING:
            return { ...state, status: { signUpPending: true } };
        case SIGN_UP_PHONE_INPUT:
            return { ...state, userphone: action.data };
        case SIGN_UP_NAME_INPUT:
            return { ...state, username: action.data };
        case SIGN_UP_ADDRESS_INPUT:
            return { ...state, useraddress: action.data };
        default:
            return state;
    }
}