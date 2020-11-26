import {getAuthUserData} from "./auth-reducer";
import {ThunkAction} from "redux-thunk";
import {AppStateType} from "./redux-store";

const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS';

export type InitialStateType = {
    initialized: boolean
}

let initialState: InitialStateType = {
    initialized: false
};

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
}

type ActionsTypes = InitializedSuccessActionType

// action
// функции возвращают экшны (объект, у которого есть как минимум св-во type)
type InitializedSuccessActionType = {
    type: typeof INITIALIZED_SUCCESS
}
export const initializedSuccess = (): InitializedSuccessActionType => ({type: INITIALIZED_SUCCESS});

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
}


export default appReducer;