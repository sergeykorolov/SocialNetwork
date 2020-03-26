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

const App = (props) => {
    return (
        <div className='app-wrapper'>
            <Header/>
            <Navbar sidebarState={props.store.getState().sidebar} dialogState={props.store.getState().dialogsPage}/>
            <div className='app-wrapper-content'>
                <Route path='/messages'
                       render={() => <DialogsContainer store={props.store}/>}/>
                <Route path='/profile'
                       render={() => <Profile store={props.store} />}/>
                <Route path='/news' component={News}/>
                <Route path='/music' component={Music}/>
                <Route path='/settings' component={Settings}/>
                <Route path='/friends'
                       render={() => <Friends state={props.store.getState().dialogsPage}/>}/>
            </div>
        </div>
    );
}

export default App;
