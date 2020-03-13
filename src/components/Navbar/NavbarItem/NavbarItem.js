import React from "react";
import style from "../Navbar.module.css";
import {NavLink} from "react-router-dom";

const NavbarItem = (props) => {

    let path = "/" + props.item.toLowerCase();

    return (
        <div className={style.nav}>
            <NavLink to={path} activeClassName={style.activeLink}>{props.item}</NavLink>
        </div>
    )
}

export default NavbarItem;