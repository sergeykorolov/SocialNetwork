import React from "react";
import style from "./Friends.module.css";

const Friends = (props) => {

    console.log(props)

    return (
        <div className={style.friend}>
            <img src={props.avatar}/>
            <span>{props.name}</span>
        </div>
    )
}

export default Friends;