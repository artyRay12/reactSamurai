import React from 'react';
import './Profile';
import MyPosts from './MyPosts/MyPosts.jsx';
import './Profile.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import Post from './MyPosts/Post/Post';

const Profile = props => {
    return (
        <div>
            <div className="content_wrapper">
                <ProfileInfo />
                <MyPosts postsInfo={props.profileInfo} addPost={props.addPost} updateNewPostText={props.updateNewPostText}/>
            </div>
        </div>
    );
};

export default Profile;
