import React from 'react';
import './Post.css';

const Post = props => {
  return (
    <div className="posts_item">
      <img src="http://tiny.cc/lt5cmz  " alt="ava" className="post_avatar" />
      <p className="post_text">{props.message}</p>
    </div>
  );
};

export default Post;
