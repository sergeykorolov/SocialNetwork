import {profileApi} from "../api/api";
import {stopSubmit} from "redux-form";
import {updateObjectInPostsArray} from "../utils/object-helpers";

const ADD_POST = 'ADD-POST';
const DELETE_POST = 'DELETE_POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';
const SAVE_PHOTO_SUCCESS = 'SAVE_PHOTO_SUCCESS';
const CHANGE_LIKES_COUNT = 'CHANGE_LIKES_COUNT';

let initialState = {
    posts: [
        {id: 1, message: 'Hi, how are you?', likesCount: 12, likeStatus: false},
        {id: 2, message: "It's my first post", likesCount: 4, likeStatus: false}
    ],
    userProfile: null,
    status: ""
};

const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: state.posts.length + 1,
                message: action.newPostText,
                likesCount: 0,
                likeStatus: false
            };
            return {
                ...state, posts: [...state.posts, newPost],
            };
        }
        case DELETE_POST: {
            return {...state, posts: state.posts.filter(post => post.id !== action.postId)};
        }
        case SET_USER_PROFILE: {
            return {
                ...state, userProfile: action.userProfile
            }
        }
        case SET_STATUS: {
            return {...state, status: action.status}
        }
        case SAVE_PHOTO_SUCCESS: {
            return {...state, userProfile: {...state.userProfile, photos: action.photos}}
        }
        case CHANGE_LIKES_COUNT: {
            action.likeStatus ? action.likesCount++ : action.likesCount--;
            return {
                ...state,
                posts: updateObjectInPostsArray(
                    state.posts, action.postId, {likeStatus: action.likeStatus, likesCount: action.likesCount}
                )
            };
        }
        default:
            return state;
    }
}

export const addPost = (newPostText) => ({type: ADD_POST, newPostText});
export const deletePost = (postId) => ({type: DELETE_POST, postId});
export const setUserProfile = (userProfile) => ({type: SET_USER_PROFILE, userProfile});
export const setStatus = (status) => ({type: SET_STATUS, status});
export const savePhotoSuccess = (photos) => ({type: SAVE_PHOTO_SUCCESS, photos});
export const changeLikesCount = (postId, likesCount, likeStatus) => ({type: CHANGE_LIKES_COUNT, postId, likesCount, likeStatus});

export const getUserProfile = (userId) => async (dispatch) => {
    let response = await profileApi.getUserProfile(userId);
    dispatch(setUserProfile(response.data));
}

export const getStatus = (userId) => async (dispatch) => {
    let response = await profileApi.getStatus(userId);
    dispatch(setStatus(response.data));
}

export const updateStatus = (status) => async (dispatch) => {
    let response = await profileApi.updateStatus(status);
    if (response.data.resultCode === 0) {
        dispatch(setStatus(status));
    }
}

export const savePhoto = (file) => async (dispatch) => {
    let response = await profileApi.savePhoto(file);
    if (response.data.resultCode === 0) {
        dispatch(savePhotoSuccess(response.data.data.photos));
    }
}

export const saveProfile = (profile) => async (dispatch, getState) => {
    const userId = getState().auth.userId;
    const response = await profileApi.saveProfile(profile);
    if (response.data.resultCode === 0) {
        dispatch(getUserProfile(userId));
    } else {
        dispatch(stopSubmit("edit-profile", {_error: response.data.messages[0]}));
        return Promise.reject(response.data.messages[0]);
    }
}

export default profileReducer;