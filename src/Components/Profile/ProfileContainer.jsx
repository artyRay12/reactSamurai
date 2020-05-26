import React from 'react';
import './Profile';
import './Profile.css';
import Profile from './Profile';
import Axios from 'axios';
import { connect } from 'react-redux';
import { setUserProfile } from '../../redux/profileReducer';
import { withRouter } from 'react-router-dom';

class ProfileContainer extends React.Component {
    state = {};
    
    componentDidMount() {
        let userId = this.props.match.params.userId;
        Axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`).then((response) => {
            this.props.setUserProfile(response.data);
        });
    }
    
    render() {
        return <Profile {...this.props} profileInfo={this.props.profileInfo} />;
    }
}

let mapStateToProps = (state) => {
    return {
        profileInfo: state.profilePage.profileInfo,
    };
};

let urlData = withRouter(ProfileContainer);

export default connect(mapStateToProps, { setUserProfile })(urlData);
