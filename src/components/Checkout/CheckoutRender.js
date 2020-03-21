import React from 'react';
import PropTypes from 'prop-types';
import ReactPaginate from 'react-paginate';
import ModalRoot from '../Modal/ModalContainer';

const CheckoutRender = (props) => {
    function createBranchOption(branch, index) {
        return <option key={index} value={index}>{branch.name}</option>;
    }

    function createCopyRow(copy, index) {
        return (
            <tr key={index + 1}>
                <td className="align-middle"> {index + 1} </td>
                <td className="align-middle"> {copy.book.title} </td>
                <td className="align-middle"> {copy.book.authors.map(a => a.name).reduce((a, b) => { return a + ', ' + b })}</td>
                <td className="align-middle"> {copy.book.publisher.name} </td>
                <td className="align-middle"> {copy.book.genres.map(a => a.name).reduce((a, b) => { return a + ', ' + b })}</td>
                <td className="align-middle"> {copy.amount}</td>
                <td><button type="button" className="btn btn-primary" onClick={() => {
                    props.modalActions.showModal({
                        open: true,
                        title: 'confirmation',
                        message: 'message',
                        confirmAction: () => { props.actions.checkoutBook(); },
                        close: props.modalActions.hideModal
                    }, 'confirm')
                }}>Checkout</button></td>
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
                    <div className="form-group">
                        <label>Select a library branch:</label>
                        <select className="form-control" value={props.branchIndex} onChange={(event) => { props.actions.changeBranch(event.target.value) }}>
                            {props.branchList.map((branch, index) => createBranchOption(branch, index))}
                        </select>
                    </div>
                    <div className="form-group">
                        <label>Search for a book:</label>
                        <input className="form-control" type="text" />
                    </div>
                    <table className="table table-striped">
                        <thead className="thead-dark">
                            <tr>
                                <th>ID</th>
                                <th>Title</th>
                                <th>Authors</th>
                                <th>Publisher</th>
                                <th>Genres</th>
                                <th>Amount</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {props.copyList.map((copy, index) => createCopyRow(copy, index))}
                        </tbody>
                    </table>
                    <ReactPaginate
                        previousLabel={'previous'}
                        nextLabel={'next'}
                        breakLabel={'...'}
                        breakClassName={'break-me'}
                        pageCount={props.pageCount}
                        marginPagesDisplayed={2}
                        pageRangeDisplayed={5}
                        onPageChange={props.actions.changePage}
                        containerClassName={'pagination'}
                        subContainerClassName={'pages pagination'}
                        activeClassName={'active'}
                    />
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
        <div className="container">
            <h1>Checkout</h1>
            {content}
            <ModalRoot />
        </div>
    );
}

CheckoutRender.propTypes = {
    actions: PropTypes.object
};

export default CheckoutRender;
