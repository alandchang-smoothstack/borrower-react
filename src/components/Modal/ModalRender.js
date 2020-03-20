import React from 'react';
import ReactModal from 'react-modal';
import modalTypes from './modalTypes';
import PropTypes from 'prop-types';

const MODAL_TYPES = {
    'alert': modalTypes.alertModal,
    'confirm': modalTypes.confirmModal,
    'delete': modalTypes.deleteModal,
    'prompt': modalTypes.promptModal
};

const ModalRender = (props) => {
    if (!props.modalType) {
        return null;
    }
    const Modal = MODAL_TYPES[props.modalType];
    return (
        <div>
            <ReactModal
                isOpen={props.modalProps.open}
                onRequestClose={props.modalProps.close}
                ariaHideApp={false}
                className='modal-dialog modal-dialog-centered'
            >
                <Modal
                    closeModal={props.modalProps.close}
                    {...props.modalProps}
                />
            </ReactModal>
        </div>
    );
}

ModalRender.propTypes = {
    actions: PropTypes.object
};

export default ModalRender;
