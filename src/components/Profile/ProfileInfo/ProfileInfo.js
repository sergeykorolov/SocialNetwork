import React from "react";
import style from "./ProfileInfo.module.css";
import Preloader from "../../common/Preloader";
import userPhoto from "../../../assets/images/user.png";

const ProfileInfo = (props) => {

    if(!props.profile) {
        return <Preloader/>
    }

    return (
        <div>
            <div>
                <img src="https://www.appiapolis.it/wp-content/uploads/2020/01/DSCF2192-1024x319.jpg"/>
            </div>
            <div className={style.descriptionBlock}>
                <img src={props.profile.photos.large != null ? props.profile.photos.large : userPhoto}/>
                <div><b>Обо мне:</b> {props.profile.aboutMe}</div>
                <div><b>Контакты:</b> {props.profile.contacts.facebook} {props.profile.contacts.vk} {props.profile.contacts.github}</div>
                <div><b>Имя:</b> {props.profile.fullName}</div>
            </div>
        </div>
    )
}

export default ProfileInfo;