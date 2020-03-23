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
            <tr key={index}>
                <td className="align-middle"> {index + 1} </td>
                <td className="align-middle"> {copy.book.title} </td>
                <td className="align-middle"> {copy.book.authors.map(a => a.name).reduce((a, b) => { return a + ', ' + b })}</td>
                <td className="align-middle"> {copy.book.publisher.name} </td>
                <td className="align-middle"> {copy.book.genres.map(a => a.name).reduce((a, b) => { return a + ', ' + b })}</td>
                <td className="align-middle"> {copy.amount}</td>
                <td><button type="button" className="btn btn-primary" onClick={() => {
                    props.modalActions.showModal({
                        open: true,
                        title: `Book #${index + 1} Confirmation`,
                        message: `Are you sure you want to checkout ${copy.book.title} from ${copy.branch.name}?`,
                        confirmAction: () => {
                            props.actions.checkoutBook({
                                index: index,
                                borrowerId: props.borrower._id,
                                branchId: copy.branch._id,
                                bookId: copy.book._id
                            }); props.modalActions.hideModal();
                        },
                        close: props.modalActions.hideModal
                    }, 'confirm')
                }}>Checkout</button></td>
            </tr>
        );
    }

    let content = '';

    if ((!props.checkoutData.status || props.checkoutData.status.requestPending) && !props.checkoutData.isSearching) {
        content = (
            <div className="d-flex justify-content-center">
                <div className="spinner-border" role="status">
                    <span className="sr-only">Loading...</span>
                </div>
            </div>
        );
    }

    if (props.checkoutData.status && (props.checkoutData.status.requestSuccessful || props.checkoutData.isSearching)) {
        content =
            (
                <div>
                    <div className="form-group">
                        <label>Select a library branch:</label>
                        <select className="form-control" value={props.checkoutData.branchIndex} onChange={(event) => { props.actions.changeBranch(event.target.value); props.actions.changePage(0); }}>
                            {props.checkoutData.branchList.map((branch, index) => createBranchOption(branch, index))}
                        </select>
                    </div>
                    <div className="form-group">
                        <label>Search for a book:</label>
                        <input className="form-control" type="text" pattern="[a-zA-Z0-9 ]+" value={props.checkoutData.searchString}
                            onChange={(event) => { if (!event.target.checkValidity()) return; props.actions.changeSearch(event.target.value); props.actions.changePage(0); }}
                        />
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
                            {props.checkoutData.copyList.map((copy, index) => createCopyRow(copy, index))}
                        </tbody>
                    </table>
                    <ReactPaginate
                        forcePage={props.checkoutData.pageIndex}
                        previousLabel={'<'}
                        nextLabel={'>'}
                        breakLabel={'...'}
                        pageCount={Math.ceil(props.checkoutData.count / 10)}
                        marginPagesDisplayed={2}
                        pageRangeDisplayed={10}
                        onPageChange={(page) => { props.actions.changePage(page.selected) }}
                        containerClassName={'pagination'}
                        pageClassName={'page-item'}
                        nextClassName={'page-item'}
                        previousClassName={'page-item'}
                        pageLinkClassName={'page-link'}
                        nextLinkClassName={'page-link'}
                        previousLinkClassName={'page-link'}
                        activeClassName={'active'}
                    />
                </div>
            );
    }

    if (props.checkoutData.status && props.checkoutData.status.requestFailed) {
        content =
            (
                <div className="alert alert-danger" role="alert">
                    Error while loading checkouts!
                </div>
            )
    }

    return (
        <div className="container">
            <h1 className="mt-3">Checkout</h1>
            {content}
            <ModalRoot />
        </div>
    );
}

CheckoutRender.propTypes = {
    actions: PropTypes.object
};

export default CheckoutRender;
