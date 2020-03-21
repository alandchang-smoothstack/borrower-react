import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as checkoutActions from '../../actions/checkoutActions';
import CheckoutRender from './CheckoutRender';

import * as modalActions from '../../actions/modalActions';

const CheckoutContainer = props => {
    useEffect(() => {
        const { actions } = { ...props };
        actions.readBranches();
    }, []);
    useEffect(() => {
        const { actions } = { ...props };
        if (props.branchIndex >= 0 && props.page >= 0 && props.pageSize >= 0) {
            actions.readCopies(props.branchList[props.branchIndex]._id, props.page, props.pageSize);
        }
    }, [props.branchIndex, props.page, props.pageSize]);

    return (
        <div>
            <CheckoutRender {...props} />
        </div>
    );
}

const mapStateToProps = state => {
    return {
        branchList: state.checkoutReducer.branchList,
        branchIndex: state.checkoutReducer.branchIndex,
        copyList: state.checkoutReducer.copyList,
        copyIndex: state.checkoutReducer.copyIndex,
        page: state.checkoutReducer.page,
        pageSize: state.checkoutReducer.pageSize,
        status: state.checkoutReducer.status
    }
}

const mapDispatchToProps = dispatch => {
    return {
        actions: bindActionCreators(checkoutActions, dispatch),
        modalActions: bindActionCreators(modalActions, dispatch)
    }
}

CheckoutContainer.propTypes = {
    actions: PropTypes.object,
    modalActions: PropTypes.object
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CheckoutContainer);
