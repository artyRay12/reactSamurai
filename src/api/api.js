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
};

export const authMe = () => instance.get(`auth/me`, {}).then((response) => response.data);

export const followAPI = (usedId) =>
    instance.post(`follow/${usedId}`, {}).then((response) => {
        debugger;
        return response.data;
    });

export const unfollowAPI = (usedId) => {
    debugger;
    return instance.delete(`follow/${usedId}`).then((response) => {
        debugger;
        return response.data;
    });
};
