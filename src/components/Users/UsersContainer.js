import {connect} from "react-redux";
import Users from "./Users";
import {
    followActionCreator,
    setCurrentPageActionCreator, setTotalUsersCountActionCreator,
    setUsersActionCreator,
    unfollowActionCreator
} from "../../redux/usersReducer";

/* принимает весь state и возвращает объект users (массив)*/
let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,   // достаем из state массив users
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage
    }
}

/* передает в презентационную компоненту колбэки (функции которые презент. компонента сможет вызывать)*/
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
        },
        setCurrentPage: (pageNumber) => {
            dispatch(setCurrentPageActionCreator(pageNumber))
        },
        setTotalUsersCount: (totalCount) => {
            dispatch(setTotalUsersCountActionCreator(totalCount))
        }
    }
}

/*
   connect отрисовывает компоненту users
   mapStateToProps прокидывает в props данные
   mapDispatchToProps прокидывает в props colbacks
   когда изменяется что-либо в state срабатывает функция connect
   если в mapStateToProps приходит объект без изменений, то компонента не перерисовывается
*/
const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;