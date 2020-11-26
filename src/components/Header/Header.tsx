import React, {FC} from "react";
import style from './Header.module.css';
import {NavLink} from "react-router-dom";
import logo from "../../assets/images/logo.png"

type PropsType = {
    isAuth: boolean
    login: string | null
    logout: () => void
}

const Header: FC<PropsType> = (props) => {
    return (
        <header className={style.header}>
            <img src={logo}/>

            <div className={style.loginBlock}>
                {props.isAuth
                    ? <div>
                        <NavLink className={style.profileName} to={'/profile'}>{props.login}</NavLink>
                        <button onClick={props.logout}>Log out</button>
                    </div>
                    : <NavLink to={'/login'}>Login</NavLink>}
            </div>
        </header>
    )
}

export default Header;