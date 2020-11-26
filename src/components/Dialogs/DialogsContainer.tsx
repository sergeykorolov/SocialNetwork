import React from "react";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";
import {addMessage} from "../../redux/dialogs-reducer";
import {AppStateType} from "../../redux/redux-store";
import {AvatarType, DialogType, MessageType, ProfileType} from "../../types/types";

type MapStatePropsType = {
    dialogs: Array<DialogType>
    messages: Array<MessageType>
    avatars: Array<AvatarType>
    profile: ProfileType | null,
}

let mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        dialogs: state.dialogsPage.dialogs,
        messages: state.dialogsPage.messages,
        avatars: state.dialogsPage.avatars,
        profile: state.profilePage.userProfile
    }
}

export default compose(
    connect(mapStateToProps, {addMessage}),
    withAuthRedirect
)(Dialogs);