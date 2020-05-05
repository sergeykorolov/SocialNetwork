import {connect} from "react-redux";
import Navbar from "./Navbar";

let mapStateToProps = (state) => {
    return {
        items: state.sidebar.items,
        dialogs: state.dialogsPage.dialogs,
        avatars: state.dialogsPage.avatars
    }
}

let mapDispatchToProps = (dispatch) => {
    return {

    }
}

const NavbarContainer = connect(mapStateToProps, mapDispatchToProps)(Navbar);

export default NavbarContainer;