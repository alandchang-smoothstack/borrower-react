import React, { useEffect } from 'react';
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
        loginStatus: state.loginReducer.status
    }
};

function mapDispatchToProps(dispatch) {
    return {
        loginActions: bindActionCreators(logInActions, dispatch)
    };
};

NavbarContainer.propTypes = {
    actions: PropTypes.object
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(NavbarContainer);