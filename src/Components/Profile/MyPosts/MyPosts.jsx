import React from 'react';
import './MyPosts.css';
import Post from './Post/Post';
import ReduxPostForm from './postForm';

const MyPosts = (props) => {
    
    let addPost = (formData) => {
        props.addPost(formData.postText);
    };

    let postsCreator = props.postsData.posts.map((postText) => (
        <Post message={postText.postText} />
    ));

    return (
        <div className="posts_wrapper">
            MyPosts
            
            <ReduxPostForm onSubmit={addPost} />
            <div className="posts">{postsCreator}</div>
        </div>
    );
};

export default MyPosts;
