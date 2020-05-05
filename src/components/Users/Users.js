import React from "react";
import Paginator from "../common/Paginator/Paginator";
import User from "./User";
import style from "./Users.module.css";

let Users = ({currentPage, totalUsersCount, pageSize, onPageChanged, users, ...props}) => {
    return (
        <div>
            <Paginator currentPage={currentPage}
                       onPageChanged={onPageChanged}
                       totalItemsCount={totalUsersCount}
                       pageSize={pageSize}/>
            <div className={style.users}>
                {
                    users.map(user => <User user={user}
                                            followingInProgress={props.followingInProgress}
                                            unfollow={props.unfollow}
                                            follow={props.follow}
                                            key={user.id}
                    />)
                }
            </div>
        </div>
    )
}

export default Users;