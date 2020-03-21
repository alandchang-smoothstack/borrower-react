import React from 'react';
import PropTypes from 'prop-types';
import ReactPaginate from 'react-paginate';

const ReturnRender = (props) => {

    function createLoanRow(loan, index) {
        return (
            <tr key={index+1}>
                <td> {index+1} </td>
                <td> {loan.branch} </td>
                <td> {loan.book} </td>
                <td> {loan.dateOut.getMonth()+1}/{loan.dateOut.getDate()}/{loan.dateOut.getFullYear()} </td>
                <td> 
                    {loan.dateDue.getMonth()+1}/{loan.dateDue.getDate()}/{loan.dateOut.getFullYear()} 
                    {loan.pastDue? "PAST DUE!": null}
                </td>
                <td><button type="button" className="btn btn-success">Return Book</button></td>
            </tr>
        );
    }

    let content = '';
    console.log(props);
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
            <div>
                <table className="table">
                    <thead>
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
                        {props.loanData.loans.map((loan, index) => createLoanRow(loan, index))}
                    </tbody>
                </table>
                <ReactPaginate
                previousLabel={'<'}
                nextLabel={'>'}
                breakLabel={'...'}
                breakClassName={'break-me'}
                pageCount={Math.ceil(props.loanData.numLoans/10)}
                marginPagesDisplayed={2}
                pageRangeDisplayed={10}
                onPageChange={()=>{}}// put a function here
                containerClassName={'pagination'}
                subContainerClassName={'pages pagination'}
                activeClassName={'active'}
                />
            </div>
        );
    }

    if (props.loanData && props.loanData.requestFailed) {
        content =
            (
                <div className="alert alert-danger" role="alert">
                    An error has occured.
                </div>
            )
    }

    return (
        <div>
            <h1>My Loans</h1>
            {content}
        </div>
    );
}

ReturnRender.propTypes = {
    loanData: PropTypes.object
};

export default ReturnRender;