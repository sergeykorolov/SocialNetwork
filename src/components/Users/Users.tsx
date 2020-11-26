import React, {FC} from "react";
import Paginator from "../common/Paginator/Paginator";
import User from "./User";
import style from "./Users.module.css";
import {UserType} from "../../types/types";
import cn from "classnames";

type PropsType = {
    currentPage: number
    totalUsersCount: number
    pageSize: number
    onPageChanged: (pageNumber: number) => void
    users: Array<UserType>
    followingInProgress: Array<number>
    unfollow: (userId: number) => void
    follow: (userId: number) => void
    isFetching: boolean
}

let Users: FC<PropsType> = ({currentPage, totalUsersCount, pageSize, onPageChanged, users, ...props}) => {
    return (
        <div className={cn({[style.shadow] : props.isFetching})}>
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
            <div className={style.paginator}>
                <Paginator currentPage={currentPage}
                           onPageChanged={onPageChanged}
                           totalItemsCount={totalUsersCount}
                           pageSize={pageSize}/>
            </div>
        </div>
    )
}

export default Users;