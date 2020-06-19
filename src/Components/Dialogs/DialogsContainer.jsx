import './Dialogs.css';
import Dialogs from './Dialogs';
import { connect } from 'react-redux';
import {sendMessageActionCreator } from '../../redux/dialogsReducer';
import authRedirect from '../HOC/authRedirect';
import { compose } from 'redux';

let mapStateToProps = (state) => {  
    return {
        dialogsData: state.dialogPage,
    };
};

let mapDispatchToProps = (dispatch) => {
    return {
        sendMessage: (textMessage) => {
            dispatch(sendMessageActionCreator(textMessage));
        },
    };
};


export default compose(
    authRedirect,
    connect(mapStateToProps, mapDispatchToProps)
)(Dialogs)
