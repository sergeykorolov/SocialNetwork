import style from "./Users.module.css";
import styleApp from "../../App.css"
import userPhoto from "../../assets/images/user.png";
import React from "react";
import {NavLink} from "react-router-dom";

let User = ({user, followingInProgress, unfollow, follow}) => {
    return (
        <div>
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
                        ? <button className={styleApp.button} disabled={followingInProgress.some(id => id === user.id)}
                                  onClick={() => {
                                      unfollow(user.id)
                                  }}>Unfollow</button>
                        : <button disabled={followingInProgress.some(id => id === user.id)}
                                  onClick={() => {
                                      follow(user.id)
                                  }}>Follow</button>
                    }
                </div>
            </span>
            <span>
                <span>
                    <div>{user.name}</div>
                    <div className={style.status}>{user.status}</div>
                </span>
                <span>
                    <div>{"user.location.country"}</div>
                    <div>{"user.location.city"}</div>
                </span>
            </span>
        </div>
    )
}

export default User;