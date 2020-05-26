let ADD_MESSAGE = 'ADD-MESSAGE';
let UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE=TEXT';

let initialState = {
    dialogs: [{ userName: 'Pheobeo' }, { userName: 'Joyey' }],
    messages: [{ messageText: 'Privet' }, { messageText: 'Unlucker' }],
    newMessageText: '',
};

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE: {
            let newMessage = {
                messageText: state.newMessageText,
            };

            let copyState = { ...state };
            copyState.messages = [...state.messages];
            copyState.messages.push(newMessage);
            copyState.newMessageText = '';

            return copyState;
        }
        case UPDATE_NEW_MESSAGE_TEXT: {
            let copyState = { ...state };
            copyState.newMessageText = action.newMessageText;
            return copyState;
        }
        default:
            return state;
    }
};

export const addMessageActionCreator = () => {
    return { type: ADD_MESSAGE };
};

export const updateNewMessageTextActionCreator = (text) => {
    return { type: UPDATE_NEW_MESSAGE_TEXT, newMessageText: text };
};

export default dialogsReducer;
