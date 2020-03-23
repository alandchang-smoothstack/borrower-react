import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import './loginStyle.css';
import { Redirect } from "react-router-dom";

import * as logInActions from '../../actions/logInActions';
import LoginRender from './LoginRender';

const LoginContainer = (props) => {
    useEffect(() => {
        const { actions } = { ...props };
    }, []);

    return (props.loggedIn ? <Redirect to="/home" /> : <div><LoginRender {...props} /></div>)
};

function mapStateToProps(state) {
    return {
        borrower: state.loginReducer.borrower,
        loginId: (state.loginReducer.loginId || ''),
        status: state.loginReducer.status,
        loggedIn: state.loginReducer.loggedIn
    };
};



function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(logInActions, dispatch)
    };
};

LoginContainer.propTypes = {
    actions: PropTypes.object
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(LoginContainer);