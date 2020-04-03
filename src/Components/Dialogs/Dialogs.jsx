import React from "react";
import "./Dialogs.css";
import { NavLink } from "react-router-dom";


const Dialogs = props => {

    const Dialog = props => {
        let name = props.name;
        return (
            <li className="dialog_list_item">
                <NavLink className="dialog_list_item_link" to={name}>
                    {name}
                </NavLink>
            </li>
        );
    };
    
    const Message = props => {
        let message = props.messageText;
        return <p className="message">{message}</p>;
    };

    let dialogsElements = props.dialogsData.dialogs.map(userName => 
        <Dialog name={userName.userName} />);
    
    let messagesElements = props.dialogsData.messages.map(messageText =>
        <Message messageText={messageText.messageText} />);
    
    return (
        <div className="dialogs_wrapper">
            <div className="dialog_list_wrapper">
                <ul className="dialog_list">
                    {dialogsElements}
                </ul>
            </div>

            <div className="messages_wrapper">
                {messagesElements}
            </div>
        </div>
    );
};

export default Dialogs;
