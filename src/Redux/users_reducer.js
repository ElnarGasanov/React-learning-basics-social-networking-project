import {usersAPI} from "../api/api";

let initialState = {
    users: [],
    pageSize: 20,
    totalUsersCount: 500,
    currentPage: 1,
    isFetching: false,
    followingInProgress: [],
}


export const users_reducer = (state = initialState, action) => {


    switch (action.type) {
        case "FOLLOW":
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true};
                    }
                    return u;
                }),
            };
//мы говорим map мы пробегаемся по массиву users, map создает новый массив элементами которого будет всё тот же массив
        case "UNFOLLOW":
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false};
                    }
                    return u;
                }),
            };
        case "SET_USERS":
            return {...state, users: action.users,} //чтобы добавить массив, ...state.users
        case "SET_CURRENT_PAGE":
            return {...state, currentPage: action.currentPage}
        case "TOGGLE_IS_FETCHING":
            return {...state, isFetching: action.isFetching}
        case "TOGGLE_IS_FOLLOWING_PROGRESS":
            return {
                ...state,
                followingInProgress: action.isFetching ?
                    [...state.followingInProgress, action.usersId] : state.followingInProgress.filter(id => id !== action.usersId)
            }
        default:
            return state;
    }
}

export const followSuccess = (userId) => ({type: "FOLLOW", userId});
export const unfollowSuccess = (userId) => ({type: "UNFOLLOW", userId});
export const setUsers = (users) => ({type: "SET_USERS", users});
export const setCurrentPage = (currentPage) => ({type: "SET_CURRENT_PAGE", currentPage});
export const toggleIsFetching = (isFetching) => ({type: "TOGGLE_IS_FETCHING", isFetching});
export const toggleIsFollowingProgress = (isFetching, usersId) => ({
    type: "TOGGLE_IS_FOLLOWING_PROGRESS",
    isFetching,
    usersId
});

export const getUsers = (currentPage, pageSize) => {
    return (dispatch) => {
        dispatch(toggleIsFetching(true));

        usersAPI.getUsers(currentPage, pageSize).then(data => {
            dispatch(toggleIsFetching(false));
            dispatch(setUsers(data.items));
        })
    }
}

export const getUsersCurrent = (pageNumber, pageSize) => {
    return (dispatch) => {
        dispatch(toggleIsFetching(true));
        dispatch(setCurrentPage(pageNumber));

        usersAPI.getUsers(pageNumber, pageSize).then(data => {
            dispatch(toggleIsFetching(false));
            dispatch(setUsers(data.items));
        })
    }
}

export const follow = (userId) => {
    return (dispatch) => {

        dispatch(toggleIsFollowingProgress(true, userId));
        usersAPI.followUser(userId).then(resultCode => {
            if (resultCode === 0) {
                dispatch(followSuccess(userId));
            }
            dispatch(toggleIsFollowingProgress(false, userId));
        });
    }
}

export const unfollow = (userId) => {
    return (dispatch) => {
        dispatch(toggleIsFollowingProgress(true, userId));
        usersAPI.unFollowUser(userId).then(resultCode => {
            if (resultCode === 0) {
                dispatch(unfollowSuccess(userId));
            }
            dispatch(toggleIsFollowingProgress(false, userId));
        });
    }
}


export default users_reducer;