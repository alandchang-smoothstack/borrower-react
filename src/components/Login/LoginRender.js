import React from 'react';
import PropTypes from 'prop-types';
import logo from '../../assets/img/SelbyvilleLibrary_Logo_no_text.png';

const LoginRender = (props) => {

    return (
        <div className="mt-4">
            <img id="lmsLogo" width="315px" src={logo} alt="LMS LOGO" />

            <div id="login">
                <div className="container">
                    <div id="login-row" className="row justify-content-center align-items-center">
                        <div id="login-column" className="col-md-6">
                            <div id="login-box" className="col-md-12">
                                <form id="login-form" onSubmit={(event) => { props.actions.login(props.loginId); event.preventDefault(); }}>
                                    <h3 id="login-title" className="mt-2">Login</h3>
                                    {(props.status && props.status.loginFailure) ? <div className="alert alert-danger" role="alert">Login Failure!</div>: <br></br>}
                                    <div className="form-group">
                                        <label for="cardno">Card Number</label>
                                        <input type="text" id="cardno" className="form-control" value={props.loginId} onChange={(event) => { props.actions.loginIdChange(event.target.value); }} required></input>
                                    </div>
                                    <input className="btn btn-primary" type="submit" value="Submit" /><br></br>
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