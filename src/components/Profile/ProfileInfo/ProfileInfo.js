import React, {useState} from "react";
import style from "./ProfileInfo.module.css";
import userPhoto from "../../../assets/images/user.png";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import ProfileDataForm from "./ProfileDataForm";

const ProfileInfo = ({isOwner, profile, status, updateStatus, savePhoto, saveProfile}) => {

    let [editMode, setEditMode] = useState(false);
    let [inputElement, setInputElement] = useState(null);

    const onMainPhotoSelected = (e) => {
        if (e.target.files.length) {
            savePhoto(e.target.files[0]).then(
                () => {
                    setInputElement(null);
                }
            );
        }
    }

    const onSubmit = (formData) => {
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
                    <div className={style.editPhotoIcon} onClick={() => inputElement.click()}></div>
                    <input className={style.alwaysHide}
                           ref={input => setInputElement(input)}
                           type={"file"}
                           onChange={onMainPhotoSelected}/>
                </div>
                }
            </div>
            <div className={style.descriptionBlock}>
                {editMode
                    ? <ProfileDataForm initialValues={profile} profile={profile} onSubmit={onSubmit}/>
                    : <ProfileData profile={profile} status={status} updateStatus={updateStatus} isOwner={isOwner}
                                   goToEditMode={() => {
                                       setEditMode(true)
                                   }}/>}

            </div>
        </div>
    )
}

const ProfileData = ({profile, isOwner, goToEditMode, status, updateStatus}) => {
    return (
        <div>
            <div><h3>{profile.fullName}</h3></div>
            <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
            <div><strong className={style.itemLabel}>Looking for a job:</strong>{profile.lookingForAJob ? "yes" : "no"}
            </div>
            {profile.lookingForAJob &&
            <div><strong className={style.itemLabel}>My professional skills:</strong>{profile.lookingForAJobDescription}
            </div>}

            <div><strong className={style.itemLabel}>About me:</strong>{profile.aboutMe}</div>
            <div><strong>Contacts:</strong>{Object.keys(profile.contacts).map(key => {
                return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]}/>
            })}</div>
            {isOwner && <div>
                <button onClick={goToEditMode}>edit</button>
            </div>}
        </div>
    )
}

const Contact = ({contactTitle, contactValue}) => {
    return <div><strong className={style.contact}>{contactTitle}:</strong> {contactValue}</div>
}

export default ProfileInfo;