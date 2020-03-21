import React from 'react';
import PropTypes from 'prop-types';

const LoginRender = (props) => {

    return (
        <form onSubmit={(event) => { props.actions.login(props.loginId); console.log(event) }}>
            <label>BorrowerId: <input type="text" value={props.loginId} onChange={(event) => { props.actions.loginIdChange(event.target.value); console.log(props) }}></input></label>
            <input type="submit" value="Submit" />
        </form>
    );
};



LoginRender.propTypes = {
    actions: PropTypes.object,
    loginData: PropTypes.object
};

export default LoginRender;