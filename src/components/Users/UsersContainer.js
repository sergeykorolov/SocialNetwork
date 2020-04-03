import {connect} from "react-redux";
import Users from "./Users";
import {followActionCreator, setUsersActionCreator, unfollowActionCreator} from "../../redux/usersReducer";

/* принимает весь state и возвращает объект только с теми данными, которые из него нужны*/
let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users   // достаем из state массив users
    }
}

/* передает в презентационную компоненту колбэки (функции которые презентацю компонента сможет вызывать)*/
let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(followActionCreator(userId))
        },
        unfollow: (userId) => {
            dispatch(unfollowActionCreator(userId))
        },
        setUsers: (users) => {
            dispatch(setUsersActionCreator(users))
        }
    }
}

/*
   connect отрисовывает компоненту users
   mapStateToProps прокидывает в props данные
   mapDispatchToProps прокидывает colbacks
*/
const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;