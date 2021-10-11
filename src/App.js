import React from 'react';
import './App.css';
import {Route} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import Friends from "./components/Friends/Friends";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import NavBarContainer from "./components/NavBar/NavBarContainer";
import UsersPageContainer from "./components/Users/UsersPageContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";




const App = (props) => {
    return (
            <div className="app-wrapper">
                <HeaderContainer/>
                <NavBarContainer />
                <div className="app-wrapper_content">
                    <Route path="/login" render={ () => <Login />} />
                    <Route path="/profile/:userId?" render={ () => <ProfileContainer  />} />
                    <Route path="/dialogs" render={ () => <DialogsContainer />} />
                    <Route path="/news" render={ () => <News />} />
                    <Route path="/music" render={ () => <Music />} />
                    <Route path="/settings" render={ () => <Settings />} />
                    <Route path="/friends" render={ () => <Friends />} />
                    <Route path="/users" render={ () => <UsersPageContainer />} />
                </div>
            </div>
    );
}
export default App;
