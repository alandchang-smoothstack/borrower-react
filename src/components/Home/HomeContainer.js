import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from "react-router-dom";
import HomeRender from './HomeRender';

const HomeContainer = (props) => {
    return (props.loggedIn ? <div><HomeRender {...props} /></div> : <Redirect to="/login" />);
}

function mapStateToProps(state) {
    return {
        borrower: state.loginReducer.borrower,
        loggedIn: state.loginReducer.loggedIn
    }
}

export default connect(
    mapStateToProps,
    null
)(HomeContainer);