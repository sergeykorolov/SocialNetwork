import {connect} from "react-redux";
import Friends from "./Friends";

let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage
    }
}

const FriendsContainer = connect(mapStateToProps)(Friends);

export default FriendsContainer;