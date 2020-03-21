import React from 'react';
import PropTypes from 'prop-types';

const NavbarRender = (props) => {
    const logoutButton = props.loginStatus && props.loginStatus.loginSuccesful ?
        <button type="button" className="btn btn-primary" onClick={() => { /*props.loginActions.logout()*/ }}>Logout</button>
        : null;
    return (
        <nav className="navbar navbar-dark bg-dark justify-content-between">
            <a className="navbar-brand" href="/#">HOME</a>
            {logoutButton}
        </nav>
    );
};

NavbarRender.propTypes = {
    loginActions: PropTypes.object,
};

export default NavbarRender;