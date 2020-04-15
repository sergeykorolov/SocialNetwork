import Profile from "./Profile";
import React from "react";
import {connect} from "react-redux";
import {getUserProfile} from "../../redux/profileReducer";
import {withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";

class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 2;
        }
        this.props.getUserProfile(userId);
    }

    render() {
        return (
            <Profile {...this.props} profile={this.props.profile}/>
        )
    }
}

let AuthRedirectComponent = withAuthRedirect(ProfileContainer);

let mapStateToProps = (state) => ({
    profile: state.profilePage.userProfile
});

// withRouter оборачивает компоненту AuthRedirectComponent другой компонентой, которая достает данные из URL
let WithUrlDataContainerComponent = withRouter(AuthRedirectComponent);

// connect передает props в компонент ProfileContainer
export default connect(mapStateToProps, {getUserProfile})(WithUrlDataContainerComponent);