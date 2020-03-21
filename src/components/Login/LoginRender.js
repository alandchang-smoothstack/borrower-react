import React from 'react';
import PropTypes from 'prop-types';

const LoginRender = (props) => {



    return (
        <form onSubmit={(event) => { props.actions.login(props.loginId); console.log(event) }}>
            <h3>Login</h3>
            {(props.status && props.status.loginFailure) ? <label>Login Failure<br></br></label> : <br></br>}
            <label>BorrowerId: <input type="text" value={props.loginId} onChange={(event) => { props.actions.loginIdChange(event.target.value); console.log(props) }} required></input></label>
            <input type="submit" value="Submit" />
        </form>
    );
};



LoginRender.propTypes = {
    actions: PropTypes.object,
};

export default LoginRender;