import React, {FC} from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import Preloader from "../common/Preloader/Preloader";
import style from "./Profile.module.css";
import {PhotosType, ProfileType} from "../../types/types";

type PropsType = {
    profile: ProfileType | null
    isOwner: boolean
    status: string
    updateStatus: (status: string) => void
    savePhoto: (image: PhotosType) => void
    saveProfile: (profile: ProfileType) => void
}

const Profile: FC<PropsType> = (props) => {

    return (<>
            {!props.profile
                ? <Preloader/>
                : <div className={style.profileBlock}>
                    <ProfileInfo isOwner={props.isOwner}
                                 profile={props.profile}
                                 status={props.status}
                                 updateStatus={props.updateStatus}
                                 savePhoto={props.savePhoto}
                                 saveProfile={props.saveProfile}/>
                    <MyPostsContainer isOwner={props.isOwner}/>
                </div>}
        </>
    )
}

export default Profile;