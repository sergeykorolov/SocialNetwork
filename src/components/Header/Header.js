import React from "react";
import style from './Header.module.css';
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return (
        <header className={style.header}>
            <img src="https://www.nicepng.com/png/detail/194-1946707_logo-ss-lazio.png"/>

            <div className={style.loginBlock}>
                {props.isAuth ? props.login : <NavLink to={'/login'}>Login</NavLink>}
            </div>
        </header>
    )
}

export default Header;