import {
    SHOW_MODAL,
    HIDE_MODAL
} from '../constants/modalActionTypes';

export const showModal = (modalProps, modalType) => {
    return dispatch => {
        dispatch(_showModal(modalProps, modalType));
    };
}

export const hideModal = () => {
    return dispatch => {
        dispatch(_hideModal());
    }
}

const _showModal = (modalProps, modalType) => {
    return {
        type: SHOW_MODAL,
        modalProps: modalProps,
        modalType: modalType
    }
}

const _hideModal = () => {
    return {
        type: HIDE_MODAL
    };
}