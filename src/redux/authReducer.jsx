import { authApi } from '../api/api';
import { stopSubmit } from 'redux-form';

let SET_USER_DATA = 'SET-USER-DATA';

let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data,
                isAuth: true,
            };
        default:
            return state;
    }
};

export const setAuthUserData = (userId, email, login, isAuth) => ({
    type: SET_USER_DATA,
    data: { userId, email, login, isAuth },
});

export const getAuthUserDataT = () => (dispatch) => {
    authApi.authMe().then((data) => {
        if (data.resultCode === 0) {
            let { id, email, login } = data.data;
            dispatch(setAuthUserData(id, email, login, true));
        }
    });
};

export const loginT = (formData) => (dispatch) => {
    return authApi.login(formData).then((response) => {
        if (response.resultCode === 0) {
            dispatch(getAuthUserDataT());
        } else {
            let action = stopSubmit('login', { email: 'email is wrong' });
            dispatch(action);
        }
    });
};

export const logoutT = () => (dispatch) => {
    authApi.logout().then((response) => {
        if (response.resultCode === 0) {
            dispatch(setAuthUserData(null, null, null, false));
        }
    });
};

export default authReducer;
