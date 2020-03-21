import React from 'react';
import PropTypes from 'prop-types';

const CheckoutRender = (props) => {
    console.log(props);
    function createBranchOption(branch, index) {
        return <option key={index} value={index}>{branch.name}</option>;
    }

    function createCopyRow(copy, index) {
        return (
            <tr key={index + 1}>
                <td> {index + 1} </td>
                <td> {copy.book.title} </td>
                <td> {copy.book.authors.map(a => a.name).reduce((a, b) => { return a + ', ' + b })}</td>
                <td> {copy.book.publisher.name} </td>
                <td> {copy.book.genres.map(a => a.name).reduce((a, b) => { return a + ', ' + b })}</td>
                <td> {copy.amount}</td>
                <td><button type="button" className='btn' onClick={() => props.actions.checkoutBook("test", copy.branch._id, copy.book._id)}>Checkout</button></td>
            </tr>
        );
    }

    let content = '';

    if (!props.status || props.status.requestPending) {
        content = (
            <div className="d-flex justify-content-center">
                <div className="spinner-border" role="status">
                    <span className="sr-only">Loading...</span>
                </div>
            </div>
        );
    }

    if (props.status && props.status.requestSuccessful) {
        content =
            (
                <div>
                    <select value={props.branchIndex} onChange={(event) => { props.actions.changeBranch(event.target.value) }}>
                        {props.branchList.map((branch, index) => createBranchOption(branch, index))}
                    </select>
                    <table className="table">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Title</th>
                                <th>Authors</th>
                                <th>Publisher</th>
                                <th>Genres</th>
                                <th>Amount</th>
                            </tr>
                        </thead>
                        <tbody>
                            {props.copyList.map((copy, index) => createCopyRow(copy, index))}
                        </tbody>
                    </table>
                </div>
            );
    }

    if (props.status && props.status.requestFailed) {
        content =
            (
                <div className="alert alert-danger" role="alert">
                    Error while loading checkouts!
                </div>
            )
    }

    return (
        <div>
            <h1>Checkout</h1>
            {content}
        </div>
    );
}

CheckoutRender.propTypes = {
    actions: PropTypes.object,
    checkoutData: PropTypes.object
};

export default CheckoutRender;
