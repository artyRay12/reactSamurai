import React from 'react';
import Header from './Header';
import Axios from 'axios';
import { setAuthUserData } from '../../redux/authReducer';
import { connect } from 'react-redux';
import { authMe } from '../../api/api';

class HeaderContainer extends React.Component {

    componentDidMount() {
        authMe().then((data) => {
            if (data.resultCode === 0) {
                let {id, email, login} = data.data;
                this.props.setAuthUserData(id, email, login);
            }
        });
    }

    render() {
        return <Header isAuth={this.props.isAuth} login={this.props.login} />;
    }
}

const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login,
    };
};

export default connect(mapStateToProps, { setAuthUserData })(HeaderContainer);
