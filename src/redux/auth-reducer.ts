import {authApi, securityAPI} from "../api/api";
import {stopSubmit} from "redux-form";
import {ThunkAction} from "redux-thunk";
import {AppStateType} from "./redux-store";
import {Dispatch} from "redux";

const SET_USER_DATA = 'book-face/auth/SET_USER_DATA';
const GET_CAPTCHA_URL_SUCCESS = 'book-face/auth/GET_CAPTCHA_URL_SUCCESS';

// as приводит что-то к какому-то типу
let initialState = {
    userId: null as number | null,
    email: null as string | null,
    login: null as string | null,
    isAuth: false,
    captchaUrl: null as string | null // if null, then captcha is not required
};

// typeof использует значение объекта в качестве типа
export type InitialStateType = typeof initialState; // задает тип по объекту initialState

const authReducer = (state = initialState, action: ActionsTypes): InitialStateType => {

    switch (action.type) {
        case SET_USER_DATA:
        case GET_CAPTCHA_URL_SUCCESS:
            return {
                ...state,
                ...action.payload
            };
        default:
            return state;
    }
}

type ActionsTypes = SetAuthUserDataType | GetCaptchaUrlSuccessType

// тип для объекта payload
type SetAuthUserDataPayloadType = {
    userId: number | null
    email: string | null
    login: string | null
    isAuth: boolean
}
// тип для экшна setAuthUserData
type SetAuthUserDataType = {
    type: typeof SET_USER_DATA, // typeof вытаскивает значение константы
    payload: SetAuthUserDataPayloadType
}
// функции возвращают экшны (объект, у которого есть как минимум св-во type)
export const setAuthUserData = (userId: number | null, email: string | null, login: string | null, isAuth: boolean): SetAuthUserDataType => ({
    type: SET_USER_DATA,
    payload: {userId, email, login, isAuth}
});

// тип для экшна getCaptchaUrlSuccess
type GetCaptchaUrlSuccessType = {
    type: typeof GET_CAPTCHA_URL_SUCCESS,
    payload: {captchaUrl: string}
}

export const getCaptchaUrlSuccess = (captchaUrl: string): GetCaptchaUrlSuccessType => ({
    type: GET_CAPTCHA_URL_SUCCESS,
    payload: {captchaUrl}
});

type GetStateType = () => AppStateType;
type DispatchType = Dispatch<ActionsTypes>;
type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionsTypes>

// thunks
export const getAuthUserData = (): ThunkType => async (dispatch) => {
    let response = await authApi.getAuthUserData();
    if (response.data.resultCode === 0) {
        let {id, email, login} = response.data.data;
        dispatch(setAuthUserData(id, email, login, true));
    }
};

export const login = (email: string, password: string, rememberMe: boolean, captcha: string):ThunkType => async (dispatch) => {
    let response = await authApi.login(email, password, rememberMe, captcha);
    if (response.data.resultCode === 0) {
        await dispatch(getAuthUserData());
    } else {
        if (response.data.resultCode === 10) {
            await dispatch(getCaptchaUrl());
        }
        let message = response.data.messages.length > 0 ? response.data.messages[0] : "Some error";
        // @ts-ignore
      dispatch(stopSubmit("login", {_error: message}));
    }
};

export const getCaptchaUrl = ():ThunkType => async (dispatch) => {
    const response = await securityAPI.getCaptchaUrl();
    const captchaUrl = response.data.url;
    dispatch(getCaptchaUrlSuccess(captchaUrl));
};

export const logout = ():ThunkType => async (dispatch) => {
    let response = await authApi.logout();
    if (response.data.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false));
    }
}

export default authReducer;