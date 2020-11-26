import React, {FC} from "react";
import style from './Navbar.module.css';
import NavbarItem from "./NavbarItem/NavbarItem";
import Friends from "../Friends/Friends";
import {NavbarItemType} from "../../types/types";

type PropsType = {
    items: Array<NavbarItemType>
}

const Navbar: FC<PropsType> = (props) => {

    let NavbarElements = props.items
        .map(item => <NavbarItem key={item.id} id={item.id} item={item.item} />);

    // let friends = props.dialogs
    //     .map(dialog => <Friends id={dialog.id} name={dialog.name} avatar={props.avatars[dialog.id-1].avatar}/>);

    return (
        <nav className={style.nav}>
            <div className={style.item}>
                {NavbarElements}
            </div>
            {/*<div className={style.friendsWrapper}>
                {friends}
            </div>*/}
        </nav>
    )
}

export default Navbar;