import React, {useState} from "react";
import style from "./ProfileInfo.module.css";
import userPhoto from "../../../assets/images/user.png";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";

const ProfileInfo = ({isOwner, profile, status, updateStatus, savePhoto}) => {

    let [editMode, setEditMode] = useState(false);

    const onMainPhotoSelected = (e) => {
        if(e.target.files.length) {
            savePhoto(e.target.files[0]);
        }
    }

    return (
        <div>
            <div className={style.descriptionBlock}>
                <img src={profile.photos.large || userPhoto} className={style.mainPhoto}/>
                {isOwner && <input type={"file"} onChange={onMainPhotoSelected}/>}
                <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>

                {editMode
                    ? <ProfileDataForm profile={profile}/>
                    : <ProfileData profile={profile} goToEditMode={() => {setEditMode(true)}}/>}

            </div>
        </div>
    )
}

const ProfileData = ({profile, isOwner, goToEditMode}) => {
    return (
        <div>
            {isOwner && <div><button onClick={goToEditMode}>edit</button></div>}
            <div><b>Full name</b>: {profile.fullName}</div>
            <div><b>Looking for a job</b>: {profile.lookingForAJob ? "yes" : "no"}</div>
            {profile.lookingForAJob &&
            <div><b>My professional skills</b>: {profile.lookingForAJobDescription}</div>}

            <div><b>About me</b>: {profile.aboutMe}</div>
            <div><b>Contacts</b>: {Object.keys(profile.contacts).map(key => {
                return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]}/>
            })}</div>
        </div>
    )
}
const ProfileDataForm = ({profile}) => {
    return (
        <div>
            <div><b>Full name</b>: {profile.fullName}</div>
            <div><b>Looking for a job</b>: {profile.lookingForAJob ? "yes" : "no"}</div>
            {profile.lookingForAJob &&
            <div><b>My professional skills</b>: {profile.lookingForAJobDescription}</div>}

            <div><b>About me</b>: {profile.aboutMe}</div>
            <div><b>Contacts</b>: {Object.keys(profile.contacts).map(key => {
                return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]}/>
            })}</div>
        </div>
    )
}

const Contact = ({contactTitle, contactValue}) => {
    return <div className={style.contact}><b>{contactTitle}</b>: {contactValue}</div>
}

export default ProfileInfo;