import React from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import Preloader from "../common/Preloader/Preloader";

const Profile = (props) => {

    return (<>
            {!props.profile
                ? <Preloader/>
                : <div>
                    <ProfileInfo isOwner={props.isOwner}
                                 profile={props.profile}
                                 status={props.status}
                                 updateStatus={props.updateStatus}
                                 savePhoto={props.savePhoto}/>
                    <MyPostsContainer/>
                </div>}
        </>
    )
}

export default Profile;