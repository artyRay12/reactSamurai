let ADD_POST = 'ADD-POST';
let UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
let SET_USER_PROFILE = 'SET-USER_PROFILE';

let initialState = {
    posts: [
        {
            postText: 'Hi bro',
        },
        {
            postText: 'How are u?',
        },
        {
            postText: 'Wanna drink some beer?',
        },
    ],
    newPostText: '',
    profileInfo: null,
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                postText: state.newPostText,
            };

            let stateCopy = {
                ...state,
            };
            stateCopy.posts = [...state.posts];
            stateCopy.posts.push(newPost);
            stateCopy.newPostText = '';

            return stateCopy;
        }

        case UPDATE_NEW_POST_TEXT: {
            let stateCopy = {
                ...state,
            };
            stateCopy.newPostText = action.newPostText;

            return stateCopy;
        }

        case SET_USER_PROFILE: {
            return { ...state, profileInfo: action.profileInfo };
        }
        default:
            return state;
    }
};

export const addPostActionCreator = () => {
    return {
        type: ADD_POST,
    };
};

export const updateNewPostTextActionCreator = (text) => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        newPostText: text,
    };
};

export const setUserProfile = (profileInfo) => {
    return {
        type: SET_USER_PROFILE,
        profileInfo,
    };
};

export default profileReducer;
