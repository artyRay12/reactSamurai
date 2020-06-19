import React from 'react';
import './Dialogs.css';
import { NavLink } from 'react-router-dom';
import ReduxSendMessageForm from './sendMessageForm';

const Dialogs = (props) => {

    let addMessage = (formData) => {
        props.sendMessage(formData.textarea);
    };

    const Dialog = (props) => {
        let name = props.name;
        return (
            <li className="dialog_list_item">
                <NavLink className="dialog_list_item_link" to={'/dialogs/' + name}>
                    {name}
                </NavLink>
            </li>
        );
    };

    const Message = (props) => {
        let message = props.messageText;
        return <p className="message">{message}</p>;
    };

    
    let dialogsCreator = props.dialogsData.dialogs.map((userName) => (
        <Dialog name={userName.userName} />
    ));

    let messagesCreator =
        (props.name,
        props.dialogsData.messages.map((messageText) => (
            <Message messageText={messageText.messageText} />
        )));

    return (
        <div className="dialogs_wrapper">
            <div className="dialog_list_wrapper">
                <ul className="dialog_list">{dialogsCreator}</ul>
            </div>
            <div className="messages_wrapper">
                {messagesCreator}
            </div>
            <ReduxSendMessageForm onSubmit={addMessage} />
        </div>
    );
};

export default Dialogs;
