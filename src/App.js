import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import {Route} from "react-router-dom";
import Friends from "./components/Friends/Friends";

const App = (props) => {
    return (
        <div className='app-wrapper'>
            <Header/>
            <Navbar sidebarState={props.state.sidebar} dialogState={props.state.dialogsPage}/>
            <div className='app-wrapper-content'>
                <Route path='/messages'
                       render={() => <Dialogs state={props.state.dialogsPage}/>}/>
                <Route path='/profile'
                       render={() => <Profile
                           state={props.state.profilePage}
                           addPost={props.addPost}
                           stringSet={props.stringSet}/>}/>
                <Route path='/news' component={News}/>
                <Route path='/music' component={Music}/>
                <Route path='/settings' component={Settings}/>
                <Route path='/friends'
                       render={() => <Friends state={props.state.dialogsPage}/>}/>
            </div>
        </div>
    );
}

export default App;
