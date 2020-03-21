import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as returnActions from '../../actions/returnActions';
import * as modalActions from '../../actions/modalActions';
import ReturnRender from './ReturnRender';

const ReturnContainer = (props) => {

    // use this effect everytime the page prop changes
    useEffect(() => {
        const { actions } = { ...props };
        actions.readLoans('5e66949385ed682e1800f4a2', props.page, 10);
    }, [props.page]);

    return (
        <div>
            <ReturnRender {...props} />
        </div>
    );
}

function mapStateToProps(state) {
    return {
        loanData: state.returnReducer.loanData,
        page: state.returnReducer.page? state.returnReducer.page: 1
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(returnActions, dispatch),
        modalActions: bindActionCreators(modalActions, dispatch)
    };
}

ReturnContainer.propTypes = {
    actions: PropTypes.object
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ReturnContainer);