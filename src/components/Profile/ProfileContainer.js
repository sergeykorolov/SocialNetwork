import Profile from "./Profile";
import React from "react";
import {connect} from "react-redux";
import {getUserProfile} from "../../redux/profileReducer";
import {Redirect, withRouter} from "react-router-dom";

class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 2;
        }
        this.props.getUserProfile(userId);
    }

    render() {
        if (!this.props.isAuth) return <Redirect to={"/login"}/>

        return (
            <Profile {...this.props} profile={this.props.profile}/>
        )
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.userProfile,
    isAuth: state.auth.isAuth
});

// withRouter оборачивает компоненту ProfileContainer другой компонентой, которая достает данные из URL
let WithUrlDataContainerComponent = withRouter(ProfileContainer);

// connect передает props в компонент ProfileContainer
export default connect(mapStateToProps, {getUserProfile})(WithUrlDataContainerComponent);