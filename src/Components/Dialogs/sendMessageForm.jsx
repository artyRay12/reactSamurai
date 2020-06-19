import React from 'react';
import './Dialogs.css';
import { reduxForm, Field } from 'redux-form';

const SendMessageForm = (props) => {
    return (
        <form className="message_add_wrapper" onSubmit={props.handleSubmit}>
            <Field component={'textarea'} name={'textarea'} className={"message_add_textarea"}/>
            <button className="message_add_btn">send</button>
        </form>
    );
};

const ReduxSendMessageForm = reduxForm({ form: 'sendMessageForm' })(SendMessageForm);
export default ReduxSendMessageForm;
