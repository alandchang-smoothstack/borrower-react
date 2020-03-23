import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as logInActions from '../../actions/logInActions';
import NavbarRender from './NavbarRender';

const NavbarContainer = (props) => {
    return (
        <div>
            <NavbarRender {...props} />
        </div>
    )
};

function mapStateToProps(state) {
    return {
        loggedIn: state.loginReducer.loggedIn
    }
};

function mapDispatchToProps(dispatch) {
    return {
        loginActions: bindActionCreators(logInActions, dispatch)
    };
};

NavbarContainer.propTypes = {
    loginActions: PropTypes.object
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(NavbarContainer);