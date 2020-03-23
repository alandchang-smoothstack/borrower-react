import React from 'react';
import PropTypes from 'prop-types';
import logo from '../../assests/img/SelbyvilleLibrary_Logo_no_text.png';

const LoginRender = (props) => {

    return (
        <div>
            <img id="lmsLogo" width="315px" src={logo} alt="LMS LOGO" />

            <div id="login">
                <div className="container">
                    <div id="login-row" className="row justify-content-center align-items-center">
                        <div id="login-column" className="col-md-6">
                            <div id="login-box" className="col-md-12">
                                <form id="login-form" onSubmit={(event) => { props.actions.login(props.loginId); event.preventDefault(); }}>
                                    <h3 id="login-title">Login</h3>
                                    {(props.status && props.status.loginFailure) ? <label id="loginFailure" >Login Failure<br></br></label> : <br></br>}
                                    <label>BorrowerId: <input type="text" value={props.loginId} onChange={(event) => { props.actions.loginIdChange(event.target.value); }} required></input></label>
                                    <input type="submit" value="Submit" /><br></br>
                                    <label className="link"><a href="#/signup">Sign Up Here</a></label>
                                </form>
                            </div>
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