import Axios from 'axios';

const instance = Axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': 'f3d14cca-066c-42d1-8c5b-ba507fa48c1e',
    },
});

export const userApi = {
    getUsers(currentPage = 1, pageSize = 5) {
        return instance
            .get(`users/?page=${currentPage}&count=${pageSize}`)
            .then((response) => response.data);
    },

    follow(userId) {
        return instance.post(`follow/${userId}`, {}).then((response) => {
            return response.data;
        });
    },

    unfollow(userId) {
        return instance.delete(`follow/${userId}`).then((response) => {
            return response.data;
        });
    },

    getProfile(userId) {
        return instance.get(`profile/${userId}`);
    },
};

export const profileApi = {
    getStatus(userId) {
        return instance.get(`/profile/status/${userId}`);
    },

    updateStatus(status) {
        return instance.put(`/profile/status`, {
            status,
        });
    },
};

export const authApi = {
    authMe() {
        return instance.get(`auth/me`, {}).then((response) => {
            return response.data;
        });
    },

    login(formData) {
        return instance
            .post(
                `auth/login?email=${formData.email}&password=${formData.password}&rememberMe=${
                    formData.rememberMe ? 'true' : 'false'
                }`,
                {},
            )
            .then((response) => {
                return response.data;
            });
    },

    logout() {
        return instance.delete(`auth/login`).then((response) => {
            return response.data;
        });
    },
};

export const loginApi = {
    login: '1',
    logout: '2',
};
