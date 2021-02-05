import {getAuthUserData} from "./auth-reducer";
import {ThunkAction} from "redux-thunk";
import {AppStateType} from "./redux-store";
import {Dispatch} from "redux";

const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS';

const initialState = {
    initialized: false
};

type InitialStateType = typeof initialState;

const appReducer = (state = initialState, action: ActionsTypes): InitialStateType => {

    switch (action.type) {
        case INITIALIZED_SUCCESS:
            return {
                ...state,
                initialized: true
            };

        default:
            return state;
    }
};

type ActionsTypes = InitializedSuccessType

// action
// функции возвращают экшны (объект, у которого есть как минимум св-во type)
type InitializedSuccessType = {
    type: typeof INITIALIZED_SUCCESS
}
export const initializedSuccess = (): InitializedSuccessType => ({type: INITIALIZED_SUCCESS});

type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionsTypes>

// thunk
export const initializeApp = ():ThunkType => {
    return async (dispatch, getState) => {
        let promise = dispatch(getAuthUserData());
        Promise.all([promise])
            .then(() => {
                dispatch(initializedSuccess());
            })
    }
};


export default appReducer;