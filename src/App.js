import React, {Component, Suspense} from 'react';
import './App.css';
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import {HashRouter, Redirect, Route, Switch, withRouter} from "react-router-dom";
import NavbarContainer from "./components/Navbar/NavbarContainer";
import FriendsContainer from "./components/Friends/FriendsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import {connect, Provider} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./redux/app-reducer";
import Preloader from "./components/common/Preloader/Preloader";
import store from "./redux/redux-store";

// компонеты отрисовываются только ккогда понадобятся (не при первой загрузке приложения)
const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));

class App extends Component {

    catchAllUnhandledErrors = (promiseRejectionEvent) => {
        // alert("Some error occured");
        // console.error(promiseRejectionEvent);
    }

    // срабатывает при первой  отрисовке
    componentDidMount() {
        this.props.initializeApp();
        window.addEventListener("unhandledrejection", this.catchAllUnhandledErrors);
    }

    componentWillUnmount() {
        window.removeEventListener("unhandledrejection", this.catchAllUnhandledErrors);
    }

    render() {

        if (!this.props.initialized) {
            return <Preloader/>
        }

        return (
            <div className='app-wrapper'>
                <div className='backHeader'><HeaderContainer/></div>
                <div className='backImg'></div>
                <Suspense fallback={<Preloader/>}>
                    <div className='app-wrapper-content'>
                        <div className='contentBlock'>
                            <NavbarContainer/>
                            <div>
                                <Route path='/messages'
                                       render={() => <div className='blockInsideContent'><DialogsContainer/></div>}/>
                                <Route
                                    path='/profile/:userId?'
                                    render={() => <div><ProfileContainer/></div>}/>
                                <Route path='/users'
                                       render={() => <div className='blockInsideContent'><UsersContainer pageTitle="Самураи"/></div>}/>
                                <Route path='/news'
                                       render={() => <div className='blockInsideContent'><News/></div>}/>
                                <Route path='/music'
                                    render={() => <div className='blockInsideContent'><Music/></div>}/>
                                <Route path='/settings'
                                    render={() => <div className='blockInsideContent'><Settings/></div>}/>
                                <Route path='/subscriptions'
                                       render={() => <div className='blockInsideContent'><FriendsContainer/></div>}/>
                                <Route path='/login' render={() => <div className='blockInsideContent'><Login/></div>}/>
                                <Redirect from='/' to='/profile'/>
                            </div>
                        </div>
                    </div>
                </Suspense>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    initialized: state.app.initialized
})

let AppContainer = compose(
    withRouter,
    connect(mapStateToProps, {initializeApp}))(App);

const SocialNetworkJSApp = (props) => {
    return <HashRouter>
        <Provider store={store}>
            <AppContainer/>
        </Provider>
    </HashRouter>
}

export default SocialNetworkJSApp;