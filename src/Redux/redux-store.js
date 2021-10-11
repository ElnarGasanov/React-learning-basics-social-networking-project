import {applyMiddleware, combineReducers, createStore} from "redux";
import profile_reducer from "./profile_reducer";
import dialogs_reducer from "./dialogs_reducer";
import friends_reducer from "./friends_reducer";
import users_reducer from "./users_reducer";
import auth_reducer from "./auth_reducer";
import thunkMiddleware from "redux-thunk"

let reducers = combineReducers({
   profilePage: profile_reducer,
   dialogsPage: dialogs_reducer,
   friendsPage: friends_reducer,
   usersPage: users_reducer,
   auth: auth_reducer,
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;

export default store;