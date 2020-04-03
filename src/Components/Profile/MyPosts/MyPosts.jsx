import React from 'react';
import './MyPosts.css';
import Post from './Post/Post';

const MyPosts = props => {
    let postsTextElements = props.postsInfo.posts.map(postText => <Post message={postText.postText} />);

    let newPost = React.createRef();

    let addPost = () => {
        let text = newPost.current.value;
        props.addPost(text);
    }

    let updateNewPostText = () => {
        let text = newPost.current.value;
        props.updateNewPostText(text);
    }

    return (
        <div className="posts_wrapper">
            MyPosts
            <div className="new_post_wrapper">
                <textarea ref={newPost} onChange={updateNewPostText} value={props.postsInfo.newPostText} className="new_post_text"></textarea>
                <button onClick={addPost} className="new_post_btn">
                    send
                </button>
            </div>
            <div className="posts">{postsTextElements}</div>
        </div>
    );
};

export default MyPosts;
