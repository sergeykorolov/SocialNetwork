import React from "react";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";
import {addMessage} from "../../redux/dialogs-reducer";

let mapStateToProps = (state) => {
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