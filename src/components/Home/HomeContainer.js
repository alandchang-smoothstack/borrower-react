import React from 'react';
import { connect } from 'react-redux';

import HomeRender from './HomeRender';

const HomeContainer = (props) => {
    return (
        <div>
            <HomeRender {...props} />
        </div>
    );
}

function mapStateToProps(state) {
    return {
        borrowerName: state.loginReducer.borrower? state.loginReducer.borrower.name: 'User'
    }
}

export default connect(
    mapStateToProps,
    null
)(HomeContainer);