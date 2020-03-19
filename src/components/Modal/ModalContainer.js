import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as modalActions from '../../actions/modalActions';
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

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(modalActions, dispatch)
    }
}

ModalContainer.propTypes = {
    actions: PropTypes.object
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ModalContainer);