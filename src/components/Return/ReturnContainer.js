import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as returnActions from '../../actions/returnActions';
import ReturnRender from './ReturnRender';

const ReturnContainer = (props) => {

    // use this effect after every render
    useEffect(() => {
        const { actions } = { ...props };
        actions.readLoans('5e66949385ed682e1800f4a2', 1, 10);
    }, []);

    return (
        <div>
            <ReturnRender {...props} />
        </div>
    );
}

// used for collecting the correct data from the store that the component needs
function mapStateToProps(state) {
    console.log(state);
    return {
        loanData: state.returnReducer.loanData
    };
}

// used for dispatching actions to the store
function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(returnActions, dispatch)
    };
}

ReturnContainer.propTypes = {
    actions: PropTypes.object
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ReturnContainer);