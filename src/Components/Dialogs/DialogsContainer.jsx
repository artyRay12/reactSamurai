import './Dialogs.css';
import Dialogs from './Dialogs';
import { connect } from 'react-redux';
import { updateNewMessageTextActionCreator, addMessageActionCreator } from '../../redux/dialogsReducer';

let mapStateToProps = (state) => {  
    return {
        dialogsData: state.dialogPage,
    };
};

let mapDispatchToProps = (dispatch) => {
    return {
        addMessage: () => {
            dispatch(addMessageActionCreator());
        },
        updateNewMessageText: (text) => {
            dispatch(updateNewMessageTextActionCreator(text));
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Dialogs);

