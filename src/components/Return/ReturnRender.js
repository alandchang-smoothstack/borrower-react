import React from 'react';
import PropTypes from 'prop-types';
import ReactPaginate from 'react-paginate';
import ModalRoot from '../Modal/ModalContainer';

const ReturnRender = (props) => {

    function createLoanRow(loan, index) {
        return (
            <tr key={index + 1}>
                <td> {index + 1} </td>
                <td> {loan.branch} </td>
                <td> {loan.book} </td>
                <td> {loan.dateOut.getMonth() + 1}/{loan.dateOut.getDate()}/{loan.dateOut.getFullYear()} </td>
                <td>
                    {loan.dateDue.getMonth() + 1}/{loan.dateDue.getDate()}/{loan.dateDue.getFullYear()} {loan.pastDue ? <span className="badge badge-danger">Past Due!</span> : null}
                </td>
                <td>
                    <button type="button" className="btn btn-primary"
                        onClick={() => {
                            props.modalActions.showModal({
                                open: true,
                                title: `Loan #${index + 1} Confirmation`,
                                message: `Are you sure you want to return ${loan.book} to ${loan.branch}?`,
                                confirmAction: () => {
                                    props.actions.returnBook(loan.id, props.borrower._id, props.page, props.pageSize, props.loanData.loans.length);
                                    props.modalActions.hideModal();
                                },
                                close: props.modalActions.hideModal
                            }, 'confirm');
                        }}>
                        Return Book
                    </button>
                </td>
            </tr>
        );
    }

    let content = '';
    if (!props.loanData || props.loanData.requestPending) {
        content = (
            <div className="d-flex justify-content-center">
                <div className="spinner-border" role="status">
                    <span className="sr-only">Loading...</span>
                </div>
            </div>
        );
    }

    if (props.loanData && props.loanData.requestSuccessful) {
        content = (
            <div className="mt-3">
                <table className="table table-striped">
                    <thead className="thead-dark">
                        <tr>
                            <th></th>
                            <th>Branch</th>
                            <th>Book</th>
                            <th>Date Out</th>
                            <th>Date Due</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {props.loanData.loans.map((loan, index) => createLoanRow(loan, (props.page - 1) * 10 + index))}
                    </tbody>
                </table>
                <ReactPaginate
                    forcePage={props.page ? props.page - 1 : 0}
                    previousLabel={'<'}
                    nextLabel={'>'}
                    breakLabel={'...'}
                    pageCount={Math.ceil(props.loanData.numLoans / 10)}
                    marginPagesDisplayed={2}
                    pageRangeDisplayed={10}
                    onPageChange={(page) => { props.actions.changePage(page.selected + 1) }}
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

    if (props.loanData && props.loanData.requestFailed) {
        content =
            (
                <div className="alert alert-danger container" role="alert">
                    An error has occured.
                </div>
            )
    }

    return (
        <div className="container">
            <h1 className="mt-3">My Loans</h1>
            {content}
            <ModalRoot />
        </div>
    );
}

ReturnRender.propTypes = {
    loanData: PropTypes.object,
    actions: PropTypes.object,
    modalActions: PropTypes.object
};

export default ReturnRender;