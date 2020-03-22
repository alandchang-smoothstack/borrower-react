import React from 'react';
import PropTypes from 'prop-types';

const SignUpRender = (props) => {
    return (
        <form onSubmit={(event) => { props.actions.signUp(props.name, props.phone, props.address) }}>
            <h3>Sign Up</h3>
            <label>Name:<input type="text" value={props.name} onChange={(event) => { props.actions.inputName(event.target.value) }} required></input></label><br></br>
            <label>Phone Number:<input type="tel" value={props.phone} pattern="^\d{3}-\d{3}-\d{4}$" placeholder="XXX-XXX-XXXX" onChange={(event) => { props.actions.inputPhone(event.target.value) }} required></input></label><br></br>
            <label>Address:<input type="text" value={props.address} onChange={(event) => { props.actions.inputAddress(event.target.value) }} required></input></label><br></br>
            <input type="submit" value="Sumbit" />
        </form >
    )
}

SignUpRender.propTypes = {
    actions: PropTypes.object
};

export default SignUpRender;