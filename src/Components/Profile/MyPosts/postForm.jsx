import React from 'react';
import './MyPosts.css';
import { reduxForm, Field } from 'redux-form';

const PostForm = (props) => {
    return (
        <form className="new_post_wrapper" onSubmit={props.handleSubmit}>
            <Field name={'postText'} className="new_post_text" component={'textarea'} />
            <button className="new_post_btn">send</button>
        </form>
    );
};

const ReduxPostForm = reduxForm({ form: 'postForm' })(PostForm);

export default ReduxPostForm;
