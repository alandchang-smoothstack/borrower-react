import React from 'react';
import PropTypes from 'prop-types';

const SignUpRender = (props) => {
    return (
        <div id="login">
            <div className="container">
                <div id="login-row" className="row justify-content-center align-items-center">
                    <div id="login-column" className="col-md-6">
                        <div id="login-box" className="col-md-12">
                            <form id="login-form" onSubmit={(event) => { props.actions.signUp(props.name, props.phone, props.address) }}>
                                <h3 id="login-title">Sign Up</h3>
                                <label className="loginLabel">Name:<input type="text" value={props.name} onChange={(event) => { props.actions.inputName(event.target.value) }} required></input></label><br></br>
                                <label className="loginLabel"> Phone Number:<input type="tel" value={props.phone} pattern="^\d{3}-\d{3}-\d{4}$" placeholder="XXX-XXX-XXXX" onChange={(event) => { props.actions.inputPhone(event.target.value) }} required></input></label><br></br>
                                <label className="loginLabel">Address:<input type="text" value={props.address} onChange={(event) => { props.actions.inputAddress(event.target.value) }} required></input></label><br></br>
                                <input type="submit" className="btn btn-primary" value="Sumbit" />
                            </form >
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

SignUpRender.propTypes = {
    actions: PropTypes.object
};

export default SignUpRender;