import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Redirect } from "react-router-dom";

import * as signUpActions from '../../actions/signUpActions';
import SignUpRender from './SignUpRender';
import './signUp.css'


const SignUpContainer = (props) => {
    return (props.loggedIn ? <Redirect to="/home" /> : <div><SignUpRender {...props} /></div>);
};

function mapStateToProps(state) {
    console.log(state);
    return {
        name: (state.signUpReducer.username ? state.signUpReducer.username : ''),
        phone: (state.signUpReducer.userphone ? state.signUpReducer.userphone : ''),
        address: (state.signUpReducer.useraddress ? state.signUpReducer.useraddress : ''),
        status: state.signUpReducer.status,
        loggedIn: state.loginReducer.loggedIn
    }
};

function mapDispacthToProps(dispatch) {
    return {
        actions: bindActionCreators(signUpActions, dispatch)
    };
};

SignUpContainer.propTypes = {
    actions: PropTypes.object
};

export default connect(
    mapStateToProps,
    mapDispacthToProps
)(SignUpContainer);