import { 
    READ_LOANS_FAILURE, 
    READ_LOANS_PENDING, 
    READ_LOANS_SUCCESSFUL, 
    RETURN_BOOK_FAILURE, 
    RETURN_BOOK_SUCCESSFUL, 
    RETURN_BOOK_PENDING,
    CHANGE_PAGE,
    RESET_STATE
} from '../constants/returnActionTypes';

const initialState = {
    page: 1,
    pageSize: 10
};

export default function returnReducer(state = initialState, action) {
    switch(action.type) {
        case READ_LOANS_SUCCESSFUL:
            let loans = action.data.loans.map(loan => {
                let dateDue = new Date(loan.dateDue);
                return {
                    id: loan._id,
                    branch: loan.branch.name,
                    book: loan.book.title,
                    dateOut: new Date(loan.dateOut),
                    dateDue: dateDue,
                    pastDue: dateDue < (new Date())
                };
            });
            return { ...state, loanData: { requestSuccessful: true, loans: loans, numLoans: action.data.numLoans } };
        case READ_LOANS_FAILURE:
            return { ...state, loanData: { requestFailed: true } };
        case READ_LOANS_PENDING:
            return { ...state, loanData: { requestPending: true } };
        case RETURN_BOOK_SUCCESSFUL:
            return state;
        case RETURN_BOOK_FAILURE:
            return { ...state, loanData: { requestFailed: true } };
        case RETURN_BOOK_PENDING:
            return { ...state, loanData: { requestPending: true } };
        case CHANGE_PAGE:
            return { ...state, page: action.page}
        case RESET_STATE:
            return initialState;
        default:
            return state;
    }
}