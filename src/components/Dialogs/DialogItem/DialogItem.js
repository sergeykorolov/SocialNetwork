import style from "../Dialogs.module.css";
import {NavLink} from "react-router-dom";
import React from "react";

const DialogItem = (props) => {
    let path = "/messages/" + props.id;

    return (
        <div className={style.dialog}>
            <img src={props.avatar}/>
            <NavLink to={path} activeClassName={style.activeLink}>{props.name}</NavLink>
        </div>
    )
}

export default DialogItem;