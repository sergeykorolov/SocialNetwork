import React from "react";
import {addPost, changeLikesCount} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText,
        avatars: state.profilePage.avatars,
        userPhoto: state.profilePage.userProfile.photos.small
    }
}

const MyPostsContainer = connect(mapStateToProps, {addPost, changeLikesCount})(MyPosts);

export default MyPostsContainer;