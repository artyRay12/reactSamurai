import React from 'react';
import './Profile';
import './Profile.css';
import Profile from './Profile';
import { connect } from 'react-redux';
import { getUserProfileT, setStatusT, updateStatusT } from '../../redux/profileReducer';
import { withRouter } from 'react-router-dom';

class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId && this.props.isAuth) {
            userId = this.props.myUserId;
        }
        this.props.getUserProfileT(userId);
        this.props.setStatusT(userId);
    }

    render() {
        return (
            <Profile
                {...this.props}
                profileInfo={this.props.profileInfo}
                status={this.props.status}
                updateStatus={this.props.updateStatusT}
            />
        );
    }
}

let mapStateToProps = (state) => {
    return {
        profileInfo: state.profilePage.profileInfo,
        status: state.profilePage.status,
        myUserId: state.auth.userId,
        isAuth: state.auth.isAuth,
    };
};

let urlData = withRouter(ProfileContainer);
export default connect(mapStateToProps, { getUserProfileT, setStatusT, updateStatusT })(urlData);
