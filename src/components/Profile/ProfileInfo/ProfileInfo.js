import React from "react";
import style from "./ProfileInfo.module.css";
import Preloader from "../../common/Preloader/Preloader";
import userPhoto from "../../../assets/images/user.png";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";

const ProfileInfo = ({profile, status, updateStatus}) => {

    if(!profile) {
        return <Preloader/>
    }

    return (
        <div>
            <div>
                <img src="https://www.appiapolis.it/wp-content/uploads/2020/01/DSCF2192-1024x319.jpg"/>
            </div>
            <div className={style.descriptionBlock}>
                <img src={profile.photos.large != null ? profile.photos.large : userPhoto}/>
                <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
                <div><b>Обо мне:</b> {profile.aboutMe}</div>
                <div><b>Контакты:</b> {profile.contacts.facebook} {profile.contacts.vk} {profile.contacts.github}</div>
                <div><b>Имя:</b> {profile.fullName}</div>
            </div>
        </div>
    )
}

export default ProfileInfo;