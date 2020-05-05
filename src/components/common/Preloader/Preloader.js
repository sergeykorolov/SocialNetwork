import preloader from "../../../assets/images/loader.gif";
import React from "react";
import style from "./Preloader.module.css"

let Preloader = (props) => {
    return (
        <div className={style.preloader}>
            <img src={preloader}/>
        </div>
    )
}

export default Preloader;

