import React from "react";
import style from './Navbar.module.css';
import NavbarItem from "./NavbarItem/NavbarItem";
import Friends from "../Friends/Friends";

const Navbar = (props) => {

    console.log(props);

    let NavbarElements = props.sidebarState.items
        .map(item => <NavbarItem id={item.id} item={item.item} />);

    let friends = props.dialogState.dialogs
        .map(dialog => <Friends id={dialog.id} name={dialog.name} avatar={props.dialogState.avatars[dialog.id-1].avatar}/>);

    return (
        <nav className={style.nav}>
            <div className={style.item}>
                {NavbarElements}
            </div>
            <div className={style.friendsWrapper}>
                {friends}
            </div>
        </nav>
    )
}

export default Navbar;