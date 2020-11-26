import preloader from "../../../assets/images/loader.gif";
import React, {FC} from "react";
import style from "./Preloader.module.css"

type PropsType = {

}

let Preloader: FC<PropsType> = (props) => {
    return (
        <div className={style.preloader}>
            <img src={preloader}/>
        </div>
    )
}

export default Preloader;

