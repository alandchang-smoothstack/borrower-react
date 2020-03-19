import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as checkoutActions from '../../actions/checkoutActions';
import CheckoutRender from './CheckoutRender';

const CheckoutContainer = (props) => {
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

function mapStateToProps(state) {
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

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(checkoutActions, dispatch)
    }
}

CheckoutContainer.propTypes = {
    actions: PropTypes.object
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CheckoutContainer);
