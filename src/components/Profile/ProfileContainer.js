import Profile from "./Profile";
import React from "react";
import * as axios from "axios";
import {connect} from "react-redux";
import {setUserProfile} from "../../redux/profileReducer";
import {withRouter} from "react-router-dom";

class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 2;
        }
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
            .then(response => {
                this.props.setUserProfile(response.data);
            });
    }

    render() {
        return (
            <Profile {...this.props} profile={this.props.profile}/>
        )
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.userProfile
});

// withRouter оборачивает компоненту ProfileContainer другой компонентой, которая достает данные из URL
let WithUrlDataContainerComponent = withRouter(ProfileContainer);

// connect передает props в компонент ProfileContainer
export default connect(mapStateToProps, {setUserProfile})(WithUrlDataContainerComponent);