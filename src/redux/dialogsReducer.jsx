let ADD_MESSAGE = 'ADD-MESSAGE';

let initialState = {
    dialogs: [{ userName: 'Pheobeo' }, { userName: 'Joyey' }],
    messages: [{ messageText: 'Privet' }, { messageText: 'Unlucker' }],
    newMessageText: '',
};

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE: {
            let newMessage = {
                messageText: action.textMessage,
            };

            let copyState = { ...state };
            copyState.messages = [...state.messages];
            copyState.messages.push(newMessage);
            copyState.newMessageText = '';

            return copyState;
        }
        default:
            return state;
    }
};

export const sendMessageActionCreator = (textMessage) => {
    return { type: ADD_MESSAGE, textMessage};
};

export default dialogsReducer;
