import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import {Route} from "react-router-dom";
import Friends from "./components/Friends/Friends";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import SidebarContainer from "./components/Navbar/SidebarContainer";
import FriendsContainer from "./components/Friends/FriendsContainer";

const App = (props) => {
    return (
        <div className='app-wrapper'>
            <Header/>
            <SidebarContainer />
            <div className='app-wrapper-content'>
                <Route path='/messages'
                       render={() => <DialogsContainer />}/>
                <Route path='/profile'
                       render={() => <Profile />}/>
                <Route path='/news' component={News}/>
                <Route path='/music' component={Music}/>
                <Route path='/settings' component={Settings}/>
                <Route path='/friends'
                       render={() => <FriendsContainer />}/>
            </div>
        </div>
    );
}

export default App;
