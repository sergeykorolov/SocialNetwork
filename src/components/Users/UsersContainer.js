import {connect} from 'react-redux';
import {
    follow,
    setCurrentPage,
    setTotalUsersCount,
    setUsers,
    toggleIsFetching,
    unfollow
} from '../../redux/usersReducer';
import React from 'react';
import Users from './Users';
import Preloader from "../common/Preloader";
import {getUsers, userAPI} from "../../api/api";

class UsersContainer extends React.Component {

    // вызывается после первой отрисовки компонеты (отправляет запрос на сервер)
    componentDidMount() {
        this.props.toggleIsFetching(true);

        userAPI.getUsers(this.props.currentPage, this.props.pageSize)
            .then(data => {
                this.props.setUsers(data.items);
                this.props.setTotalUsersCount(data.totalCount);
                this.props.toggleIsFetching(false);
            });
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        this.props.toggleIsFetching(true);

        userAPI.getUsers(pageNumber, this.props.pageSize)
            .then(data => {
                this.props.setUsers(data.items);
                this.props.toggleIsFetching(false);
            });
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
            />
        </>
    }
}

/* принимает весь state и возвращает объект users (массив)*/
let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,   // достаем из state массив users
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching
    }
}

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
    setUsers,
    setCurrentPage,
    setTotalUsersCount,
    toggleIsFetching
})(UsersContainer);
