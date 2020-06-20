import React from 'react';
import './MyPosts.css';
import { reduxForm, Field } from 'redux-form';
import {
    reqiredFields,
    maxLengthCreator,
    minLengthCreator,
} from '../../../redux/utils/validators/validator';
import {Input } from '../../common/forms/textArea';

const maxLength = maxLengthCreator(200);
const minLength = minLengthCreator(1);

const PostForm = (props) => {
    return (
        <form className="new_post_wrapper" onSubmit={props.handleSubmit}>
            <Field
                name={'postText'}
                component={Input}
                placeholder={'type post here'}
                validate={[reqiredFields, maxLength, minLength]}
                morph={'textarea'}
            />
            <button className="new_post_btn">send</button>
        </form>
    );
};

const ReduxPostForm = reduxForm({ form: 'postForm' })(PostForm);

export default ReduxPostForm;
