import React from 'react';
import './MyPosts.css';
import Post from './Post/Post';

const MyPosts = (props) => {
    let newPost = React.createRef();

    let addPost = () => {
        props.addPost();
    };

    let updateNewPostText = () => {
         props.updateNewPostText(newPost.current.value);
    }

    let postsCreator = props.postsData.posts.map((postText) => (
        <Post message={postText.postText} />
    ));

    return (
        <div className="posts_wrapper">
            MyPosts
            <div className="new_post_wrapper">
                <textarea
                    ref={newPost}
                    onChange={updateNewPostText}
                    value={props.postsData.newPostText}
                    className="new_post_text"></textarea>
                <button onClick={addPost} className="new_post_btn">
                    send
                </button>
            </div>
            <div className="posts">{postsCreator}</div>
        </div>
    );
};

export default MyPosts;
