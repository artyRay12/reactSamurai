import React from 'react';
import './Dialogs.css';
import { reduxForm, Field } from 'redux-form';
import { textArea, Input } from '../common/forms/textArea';
import { maxLengthCreator, reqiredFields } from '../../redux/utils/validators/validator';

const maxLength100 = maxLengthCreator(10);

const SendMessageForm = (props) => {
    return (
        <form className="message_add_wrapper" onSubmit={props.handleSubmit}>
            <Field
                component={Input}
                name={'textarea'}
                validate={[reqiredFields, maxLength100]}
                morph={'textarea'}
            />
            <button className="message_add_btn">send</button>
        </form>
    );
};

const ReduxSendMessageForm = reduxForm({ form: 'sendMessageForm' })(SendMessageForm);
export default ReduxSendMessageForm;
