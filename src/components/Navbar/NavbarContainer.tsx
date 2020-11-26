import {connect} from "react-redux";
import Navbar from "./Navbar";
import {AppStateType} from "../../redux/redux-store";
import {AvatarType, DialogType, NavbarItemType} from "../../types/types";

type MapStatePropsType = {
    items: Array<NavbarItemType>
    dialogs: Array<DialogType>
    avatars: Array<AvatarType>
}

let mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        items: state.sidebar.items,
        dialogs: state.dialogsPage.dialogs,
        avatars: state.dialogsPage.avatars
    }
}

const NavbarContainer = connect(mapStateToProps)(Navbar);

export default NavbarContainer;