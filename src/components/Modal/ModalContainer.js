import React from 'react';
import { connect } from 'react-redux';

import ModalRender from './ModalRender';

const ModalContainer = (props) => {
    return (
        <div>
            <ModalRender {...props} />
        </div>
    );
}

function mapStateToProps(state) {
    return {
        modalProps: state.modalReducer.modalProps,
        modalType: state.modalReducer.modalType
    }
}

export default connect(
    mapStateToProps,
    null
)(ModalContainer);