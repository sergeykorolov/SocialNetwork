import style from "../Dialogs.module.css";
import {NavLink} from "react-router-dom";
import React, {FC} from "react";

type PropsType = {
    id: number
    avatar: string
    name: string
}

const DialogItem: FC<PropsType> = (props) => {
    let path = "/messages/" + props.id;

    return (
        <div className={style.dialog}>
            <img src={props.avatar}/>
            <NavLink to={path} activeClassName={style.activeLink}>{props.name}</NavLink>
        </div>
    )
}

export default DialogItem;