import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Redirect } from "react-router-dom";

import * as returnActions from '../../actions/returnActions';
import * as modalActions from '../../actions/modalActions';
import ReturnRender from './ReturnRender';

const ReturnContainer = (props) => {

    // use this effect everytime the page changes
    useEffect(() => {
        const { actions } = { ...props };
        actions.readLoans(props.borrower._id, props.page, 10);
    }, [props.page]);

    return (props.loggedIn ? <div><ReturnRender {...props} /></div> : <Redirect to="/login" />);
}

function mapStateToProps(state) {
    return {
        loanData: state.returnReducer.loanData,
        page: state.returnReducer.page ? state.returnReducer.page : 1,
        loggedIn: state.loginReducer.loggedIn,
        borrower: state.loginReducer.borrower
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(returnActions, dispatch),
        modalActions: bindActionCreators(modalActions, dispatch)
    };
}

ReturnContainer.propTypes = {
    actions: PropTypes.object
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ReturnContainer);