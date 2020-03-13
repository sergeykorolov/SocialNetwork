import style from "../Dialogs.module.css";
import React from "react";

const Message = (props) => {
    return (
        <div className={style.message}>
            <img src={props.avatar}/>
            <span>{props.message}</span>
        </div>
    )
}

export default Message;