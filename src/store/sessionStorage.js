const sessionStorage = require('sessionstorage');

export const loadState = () => {
    try {
        const serializedState = sessionStorage.getItem('state');

        if (serializedState === null) {
            return undefined;
        }

        let parsedState = JSON.parse(serializedState);

        if (parsedState.returnReducer.loanData && parsedState.returnReducer.loanData.loans) {
            parsedState.returnReducer.loanData.loans.forEach(loans => {
                loans.dateOut = new Date(loans.dateOut);
                loans.dateDue = new Date(loans.dateDue);
            });
        }

        return parsedState;
    } catch (error) {
        return undefined;
    }
};

export const saveState = (state) => {
    try {
        console.log(state);
        const serializedState = JSON.stringify(state);
        sessionStorage.setItem('state', serializedState);
    } catch (error) {
    }
};