import React from 'react';
import './App.css';
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import {Route} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import SidebarContainer from "./components/Navbar/SidebarContainer";
import FriendsContainer from "./components/Friends/FriendsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";

const App = () => {
    return (
        <div className='app-wrapper'>
            <HeaderContainer/>
            <SidebarContainer/>
            <div className='app-wrapper-content'>
                <Route path='/messages'
                       render={() => <DialogsContainer/>}/>
                <Route path='/profile/:userId?'             // после : параметр, ?-означает что параметр не обязателен
                       render={() => <ProfileContainer/>}/>
                <Route path='/users'
                       render={() => <UsersContainer/>}/>
                <Route path='/news' component={News}/>
                <Route path='/music' component={Music}/>
                <Route path='/settings' component={Settings}/>
                <Route path='/friends'
                       render={() => <FriendsContainer/>}/>
            </div>
        </div>
    );
}

export default App;
