import {profileApi} from "../api/api";
import {stopSubmit} from "redux-form";
import {updateObjectInPostsArray} from "../utils/object-helpers";
import {PhotosType, PostType, ProfileType} from "../types/types";

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
    ] as Array<PostType>,
    userProfile: null as ProfileType | null,
    status: ""
};

export type InitialStateType = typeof initialState; // задает тип по объекту initialState

const profileReducer = (state = initialState, action: any): InitialStateType => {

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
            return {...state, userProfile: {...state.userProfile, photos: action.photos} as ProfileType}
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

type AddPostActionType = {
    type: typeof ADD_POST
    newPostText: string
}
export const addPost = (newPostText: string): AddPostActionType => ({type: ADD_POST, newPostText});
type DeletePostActionType = {
    type: typeof DELETE_POST
    postId: number
}
export const deletePost = (postId: number): DeletePostActionType => ({type: DELETE_POST, postId});
type SetUserProfileActionType = {
    type: typeof SET_USER_PROFILE
    userProfile: ProfileType
}
export const setUserProfile = (userProfile: ProfileType): SetUserProfileActionType => ({type: SET_USER_PROFILE, userProfile});
type SetStatusActionType = {
    type: typeof SET_STATUS
    status: string
}
export const setStatus = (status: string): SetStatusActionType => ({type: SET_STATUS, status});
type SavePhotoSuccessActionType = {
    type: typeof SAVE_PHOTO_SUCCESS
    photos: PhotosType
}
export const savePhotoSuccess = (photos: PhotosType): SavePhotoSuccessActionType => ({type: SAVE_PHOTO_SUCCESS, photos});
type ChangeLikesCountActionType = {
    type: typeof CHANGE_LIKES_COUNT
    postId: number
    likesCount: number
    likeStatus: boolean
}
export const changeLikesCount = (postId: number, likesCount: number, likeStatus: boolean): ChangeLikesCountActionType => ({type: CHANGE_LIKES_COUNT, postId, likesCount, likeStatus});

export const getUserProfile = (userId: number) => async (dispatch: any) => {
    let response = await profileApi.getUserProfile(userId);
    dispatch(setUserProfile(response.data));
}

export const getStatus = (userId: number) => async (dispatch: any) => {
    let response = await profileApi.getStatus(userId);
    dispatch(setStatus(response.data));
}

export const updateStatus = (status: string) => async (dispatch: any) => {
    let response = await profileApi.updateStatus(status);
    if (response.data.resultCode === 0) {
        dispatch(setStatus(status));
    }
}

export const savePhoto = (file: any) => async (dispatch: any) => {
    let response = await profileApi.savePhoto(file);
    if (response.data.resultCode === 0) {
        dispatch(savePhotoSuccess(response.data.data.photos));
    }
}

export const saveProfile = (profile: ProfileType) => async (dispatch: any, getState: any) => {
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