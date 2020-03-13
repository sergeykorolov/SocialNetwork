import React from "react";
import {NavLink} from "react-router-dom";

const SidebarFriends = () => {
    return (
        <NavLink to={'/friends'}>Friends</NavLink>
    )
}

export default SidebarFriends;