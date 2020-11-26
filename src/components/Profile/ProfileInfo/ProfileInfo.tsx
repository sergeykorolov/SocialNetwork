import React, {FC, useState} from "react";
import style from "./ProfileInfo.module.css";
import userPhoto from "../../../assets/images/user.png";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import ProfileDataForm from "./ProfileDataForm";
import {PhotosType, ProfileType} from "../../../types/types";

type ProfileInfoPropsType = {
    isOwner: boolean
    profile: ProfileType
    status: string
    updateStatus: (status: string) => void
    savePhoto: (image: PhotosType) => void
    saveProfile: (profile: ProfileType) => void
}

const ProfileInfo: FC<ProfileInfoPropsType> = ({isOwner, profile, status, updateStatus, savePhoto, saveProfile}) => {

    let [editMode, setEditMode] = useState(false);
    let [inputElement, setInputElement] = useState(null);

    const onMainPhotoSelected = (e: any) => {
        if (e.target.files.length) {
            // @ts-ignore
            savePhoto(e.target.files[0]).then(
                () => {
                    setInputElement(null);
                }
            );
        }
    }

    // @ts-ignore
    const onSubmit = (formData) => {
        // @ts-ignore
        saveProfile(formData).then(
            () => {
                setEditMode(false);
            }
        );
    }

    return (
        <div className={style.profileInfoBlock}>
            <div className={style.mainPhotoBlock}>
                <img src={profile.photos.large || userPhoto} className={style.mainPhoto}/>
                {isOwner &&
                <div>
                    {/*@ts-ignore*/}
                    <div className={style.editPhotoIcon} title="изменить фото" onClick={() => inputElement.click()}></div>
                    <input className={style.alwaysHide}
                           // @ts-ignore
                           ref={input => setInputElement(input)}
                           type={"file"}
                           onChange={onMainPhotoSelected}/>
                </div>
                }
            </div>
            <div className={style.descriptionBlock}>
                {editMode
                    // @ts-ignore
                    ? <ProfileDataForm initialValues={profile} profile={profile} onSubmit={onSubmit}/>
                    // @ts-ignore
                    : <ProfileData profile={profile} status={status} updateStatus={updateStatus} isOwner={isOwner}
                                   goToEditMode={() => {
                                       setEditMode(true)
                                   }}/>}

            </div>
        </div>
    )
}

type ProfileDataPropsType = {
    isOwner: boolean
    profile: ProfileType
    status: string
    updateStatus: (status: string) => void
    goToEditMode: () => void
}

const ProfileData: FC<ProfileDataPropsType> = ({profile, isOwner, goToEditMode, status, updateStatus}) => {
    return (
        <div>
            <div className={style.fullName}><h3>{profile.fullName}</h3></div>
            <ProfileStatusWithHooks status={status} updateStatus={updateStatus} isOwner={isOwner}/>
            <div><strong className={style.itemLabel}>Looking for a job:</strong>{profile.lookingForAJob ? "yes" : "no"}
            </div>
            {profile.lookingForAJob &&
            <div><strong className={style.itemLabel}>My professional skills:</strong>{profile.lookingForAJobDescription}
            </div>}
            <div><strong className={style.itemLabel}>About me:</strong>{profile.aboutMe}</div>
            <div><strong>Contacts:</strong>{Object.keys(profile.contacts).map(key => {
                // @ts-ignore
                return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]}/>
            })}</div>
            {isOwner && <div className={style.editButton}>
                <button onClick={goToEditMode}>edit</button>
            </div>}
        </div>
    )
}

type ContactPropsType = {
    contactTitle: string
    contactValue: string
}

const Contact: FC<ContactPropsType> = ({contactTitle, contactValue}) => {
    return <div><strong className={style.contact}>{contactTitle}:</strong> {contactValue}</div>
}

export default ProfileInfo;