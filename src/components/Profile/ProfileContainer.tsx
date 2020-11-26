import Profile from "./Profile";
import React from "react";
import {connect} from "react-redux";
import {getStatus, getUserProfile, savePhoto, saveProfile, updateStatus} from "../../redux/profile-reducer";
import {withRouter} from "react-router-dom";
import {compose} from "redux";
import {ProfileType} from "../../types/types";
import {AppStateType} from "../../redux/redux-store";

type MapStatePropsType = {
    profile: ProfileType | null
    status: string
    authorizedUserId: number | null
    isAuth: boolean
}

type MapDispatchPropsType = {
    getUserProfile: (userId: number) => ProfileType
    getStatus: (userId: number) => string
    updateStatus: () => void
    savePhoto: () => void
    saveProfile: () => void
}

type PropsType = MapStatePropsType & MapDispatchPropsType;

class ProfileContainer extends React.Component<PropsType> {

    refreshProfile() {
        // @ts-ignore
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = this.props.authorizedUserId;
            if (!userId) {
                // @ts-ignore
                this.props.history.push("/login");
            }
        }
        this.props.getUserProfile(userId);
        this.props.getStatus(userId);
    }

    // срабатывает при первом монтировании компоненты
    componentDidMount() {
        this.refreshProfile();
    }

    // срабатывает при каждом изменении props
    componentDidUpdate(prevProps: any, prevState: any, snapshot: any) {
        // @ts-ignore
        if (this.props.match.params.userId !== prevProps.match.params.userId) {
            this.refreshProfile();
        }
    }

    render() {
        return (
            <Profile {...this.props}
                    // @ts-ignore
                     isOwner={!this.props.match.params.userId}
                     profile={this.props.profile}
                     status={this.props.status}
                     updateStatus={this.props.updateStatus}
                     savePhoto={this.props.savePhoto}/>
        )
    }
}

let mapStateToProps = (state: AppStateType): MapStatePropsType => ({
    profile: state.profilePage.userProfile,
    status: state.profilePage.status,
    authorizedUserId: state.auth.userId,
    isAuth: state.auth.isAuth
});

/* compose берет ProfileContainer и отдает сначала в withAuthRedirect,
   затем вернувшийся результат в withRouter, а затем в connect */
export default compose(
    connect(mapStateToProps, {getUserProfile, getStatus, updateStatus, savePhoto, saveProfile}),
    withRouter
)(ProfileContainer)