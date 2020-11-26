import React, {FC} from "react";
import style from "../Navbar.module.css";
import {NavLink} from "react-router-dom";

type PropsType = {
    item: string
    id: number
}

const NavbarItem: FC<PropsType> = (props) => {

    let path = "/" + props.item.toLowerCase();

    return (
        <div className={style.nav}>
            <NavLink to={path} activeClassName={style.activeLink}>{props.item}</NavLink>
        </div>
    )
}

export default NavbarItem;