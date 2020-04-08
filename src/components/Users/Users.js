import style from "./Users.module.css";
import userPhoto from "../../assets/images/user.png";
import React from "react";
import {NavLink} from "react-router-dom";
import * as axios from "axios";
import {userAPI} from "../../api/api";

let Users = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return (
        <div>
            <div>
                {pages.map(page =>
                    <span
                        onClick={(event) => {
                            props.onPageChanged(page)
                        }}
                        className={props.currentPage === page && style.selectedPage}>{page}</span>
                )}
            </div>
            {
                props.users.map(user => <div key={user.id}>
                    <span>
                        <div>
                            <NavLink to={'/profile/' + user.id}>
                                <img src={user.photos.small != null ? user.photos.small : userPhoto}
                                     className={style.userAvatar}/>
                            </NavLink>
                        </div>
                    </span>
                    <span>
                        <div>
                            {user.followed
                                ? <button onClick={() => {
                                    userAPI.unfollow(user.id)
                                        .then(data => {
                                            if (data.resultCode === 0) {
                                                props.unfollow(user.id);
                                            }
                                        });
                                }}>Unfollow</button>
                                : <button onClick={() => {
                                    userAPI.follow(user.id)
                                        .then(data => {
                                            if (data.resultCode === 0) {
                                                props.follow(user.id);
                                            }
                                        });
                                }}>Follow</button>
                            }
                        </div>
                    </span>
                    <span>
                        <span>
                            <div>{user.name}</div>
                            <div>{user.status}</div>
                        </span>
                        <span>
                            <div>{"user.location.country"}</div>
                            <div>{"user.location.city"}</div>
                        </span>
                    </span>
                </div>)
            }
        </div>
    )
}

export default Users;