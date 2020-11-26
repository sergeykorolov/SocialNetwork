import style from "../Dialogs.module.css";
import React, {FC} from "react";

type PropsType = {
    avatar: string
    message: string
}

const Message: FC<PropsType> = (props) => {
    return (
        <div className={style.message}>
            <img src={props.avatar}/>
            <span>{props.message}</span>
        </div>
    )
};

export default Message;