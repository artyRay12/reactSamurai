let FOLLOW = 'FOLLOW';
let UNFOLLOW = 'UNFOLLOW';
let SET_USERS = 'SET-USERS';
let SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';
let SET_TOTAL_USERS_COUNT = 'SET-TOTAL-USERS-COUNT';
let TOGGLE_IS_FETCHING = 'TOGGLE-IS-FETHING';

let initialState = {
    users: [],
    totalUsersCount: 15,
    pageSize: 5,
    currentPage: 1,
    isFetching: true,
};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map((u) => {
                    if (u.id === action.userId) {
                        return {
                            ...u,
                            followed: true,
                        };
                    }
                    return u;
                }),
            };
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map((u) => {
                    if (u.id === action.userId) {
                        return {
                            ...u,
                            followed: false,
                        };
                    }
                    return u;
                }),
            };
        case SET_USERS:
            return { ...state, users: [...action.users] };
        case SET_CURRENT_PAGE:
            return { ...state, currentPage: action.pageNumber };
        case SET_TOTAL_USERS_COUNT:
            return { ...state, totalUsersCount: action.totalUsersCount };
        case TOGGLE_IS_FETCHING:
            return { ...state, isFetching: action.isFetching };
        default:
            return state;
    }
};
 
export const follow = (id) => ({
    type: FOLLOW,
    userId: id,
});

export const unfollow = (id) => ({
    type: UNFOLLOW,
    userId: id,
});

export const setUsers = (users) => ({
    type: SET_USERS,
    users,
});

export const setCurrentPage = (pageNumber) => ({
    type: SET_CURRENT_PAGE,
    pageNumber,
});

export const setTotalUsersCount = (totalUsersCount) => ({
    type: SET_TOTAL_USERS_COUNT,
    totalUsersCount,
});

export const toggleIsFetching = (fetchingState) => ({
    type: TOGGLE_IS_FETCHING,
    isFetching: fetchingState,
});


export default usersReducer;
