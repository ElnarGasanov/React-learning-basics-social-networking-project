import {usersAPI} from "../api/api";

let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
    loginUser: null,
}


export const auth_reducer = (state = initialState, action) => {

    switch (action.type) {
        case "SET_USER_DATA":
            return {
                ...state,
                ...action.data,
                isAuth: true,
            }
        case "LOGIN_USER":
            return {
                ...state,
                loginUser: action.loginUser,
            }
        default:
            return state;
    }
}


export const setAuthUserData = (userId, email, login) => ({type: "SET_USER_DATA", data: {userId, email, login}});
export const setLoginUser = (loginUser) => ({type: "LOGIN_USER", loginUser});

export const authMe = () => {
    return (dispatch) => {
        usersAPI.authMe().then(response => {
            if (response.data.resultCode === 0) {
                let {id, email, login} = response.data.data;
                dispatch(setAuthUserData(id, email, login));
                usersAPI.getMyData(id).then(response => {
                    dispatch(setLoginUser(response.data));
                })
            }
        })
    };
}

export default auth_reducer;