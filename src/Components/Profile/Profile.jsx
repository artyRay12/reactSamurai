import React from 'react';
import './Profile';
import './Profile.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostsContainer from './MyPosts/MyPostsContaiter';
import Preloader from '../common/preloader/Preloader';


const Profile = (props) => {
    return (
        <div>
            <div className="content_wrapper">
                Начать с 63.5 урока!
                {!props.profileInfo ? (
                    <Preloader />
                ) : (
                    <ProfileInfo profileInfo={props.profileInfo} />
                )}
                <MyPostsContainer />
            </div>
        </div>
    );
};

export default Profile;
