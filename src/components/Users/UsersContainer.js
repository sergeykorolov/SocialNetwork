import {connect} from 'react-redux';
import {follow, getUsers, setCurrentPage, toggleFollowingProgress, unfollow} from '../../redux/usersReducer';
import React from 'react';
import Users from './Users';
import Preloader from "../common/Preloader";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";

class UsersContainer extends React.Component {

    // вызывается после первой отрисовки компонеты (отправляет запрос на сервер)
    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
    }

    onPageChanged = (pageNumber) => {
        this.props.getUsers(pageNumber, this.props.pageSize);
    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users totalUsersCount={this.props.totalUsersCount}
                   pageSize={this.props.pageSize}
                   onPageChanged={this.onPageChanged}
                   users={this.props.users}
                   currentPage={this.props.currentPage}
                   follow={this.props.follow}
                   unfollow={this.props.unfollow}
                   followingInProgress={this.props.followingInProgress}
                   toggleFollowingProgress={this.props.toggleFollowingProgress}
            />
        </>
    }
}

/* принимает весь state */
let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,   // достаем из state массив users
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress,
    }
}

let withRedirect = withAuthRedirect(UsersContainer);

/*
   connect отрисовывает компонент usersContainer
   mapStateToProps прокидывает в props данные
   объект с колбэками прокидывается в props
   когда изменяется что-либо в state срабатывает функция connect
   если в mapStateToProps приходит объект без изменений, то компонент не перерисовывается
*/
export default connect(mapStateToProps, {
    follow,
    unfollow,
    setCurrentPage,
    toggleFollowingProgress,
    getUsers
})(withRedirect);
