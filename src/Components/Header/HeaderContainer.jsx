import React from 'react';
import Header from './Header';
import {getAuthUserDataT } from '../../redux/authReducer';
import { connect } from 'react-redux';

class HeaderContainer extends React.Component {
    componentDidMount() {
        this.props.getAuthUserDataT();
    }

    render() {
        return <Header isAuth={this.props.isAuth} login={this.props.login} userId={this.props.userId}/>;
    }
}

const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login,
        userId: state.auth.userId
    };
};

export default connect(mapStateToProps, { getAuthUserDataT })(HeaderContainer);
