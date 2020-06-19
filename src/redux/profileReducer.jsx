import { userApi, profileApi } from '../api/api';

let ADD_POST = 'ADD-POST';
let SET_USER_PROFILE = 'SET-USER_PROFILE';
let SET_STATUS = 'SET-STATUS';


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
    status: '',
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                postText: action.postText,
            };

            let stateCopy = {
                ...state,
            };

            stateCopy.posts = [...state.posts];
            stateCopy.posts.push(newPost);

            return stateCopy;
        }

        case SET_USER_PROFILE: {
            return { ...state, profileInfo: action.profileInfo };
        }

        case SET_STATUS: {
            return { ...state, status: action.status };
        }

        default:
            return state;
    }
};

export const addPostActionCreator = (postText) => {
    return {
        type: ADD_POST,
        postText
    };
};


export const setUserProfile = (profileInfo) => {
    return {
        type: SET_USER_PROFILE,
        profileInfo,
    };
};

export const setStatusAC = (status) => {
    return {
        type: SET_STATUS,
        status,
    };
};

export const getUserProfileT = (userId) => {
    return (dispatch) => {
        userApi.getProfile(userId).then((response) => {
            return dispatch(setUserProfile(response.data));
        });
    };
};

export const setStatusT = (userId) => {
    return (dispatch) => {
        profileApi.getStatus(userId).then((response) => {
            return dispatch(setStatusAC(response.data));
        });
    };
}; 

export const updateStatusT = (status) => {
    return (dispatch) => {
        profileApi.updateStatus(status).then((response) => {
            if (response.data.resultCode === 0) return dispatch(setStatusAC(response.statusText));
        });
    };
};

export default profileReducer;
