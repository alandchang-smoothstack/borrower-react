import React from 'react';
import PropTypes from 'prop-types';

const LoginRender = (props) => {



    return (
        <div id="login">
            <div class="container">
                <div id="login-row" class="row justify-content-center align-items-center">
                    <div id="login-column" class="col-md-6">
                        <div id="login-box" class="col-md-12">
                            <form id="login-form" onSubmit={(event) => { props.actions.login(props.loginId); console.log(event) }}>
                                <h3 id="login-title">Login</h3>
                                {(props.status && props.status.loginFailure) ? <label>Login Failure<br></br></label> : <br></br>}
                                <label>BorrowerId: <input type="text" value={props.loginId} onChange={(event) => { props.actions.loginIdChange(event.target.value); console.log(props) }} required></input></label>
                                <input type="submit" value="Submit" />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};



LoginRender.propTypes = {
    actions: PropTypes.object,
};

export default LoginRender;