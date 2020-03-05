import React from "react";
import style from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
    return (
        <div>
            <div>
                <img src="https://www.appiapolis.it/wp-content/uploads/2020/01/DSCF2192-1024x319.jpg"/>
            </div>
            <div>ava + description</div>
            <MyPosts />
        </div>
    )
}

export default Profile;