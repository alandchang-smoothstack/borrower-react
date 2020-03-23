import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Redirect } from "react-router-dom";

import * as checkoutActions from '../../actions/checkoutActions';
import CheckoutRender from './CheckoutRender';

import * as modalActions from '../../actions/modalActions';

const CheckoutContainer = props => {
    useEffect(() => {
        const { actions } = { ...props };
        actions.readBranches();
    }, []);
    useEffect(() => {
        if (props.checkoutData.branchIndex >= 0 && props.checkoutData.pageIndex >= 0 && props.checkoutData.pageSize >= 0) {
            const { actions } = { ...props };
            const { branchList, branchIndex, searchString, pageIndex, pageSize } = { ...props.checkoutData };
            actions.readCopies(branchList[branchIndex]._id, { searchString, pageIndex, pageSize });
        }
    }, [props.checkoutData.branchIndex, props.checkoutData.pageIndex, props.checkoutData.pageSize, props.checkoutData.searchString]);

    return (props.loggedIn ? <div><CheckoutRender {...props} /></div> : <Redirect to="/login" />);
}

const mapStateToProps = state => {
    return {
        checkoutData: state.checkoutReducer.checkoutData,
        loggedIn: state.loginReducer.loggedIn
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
