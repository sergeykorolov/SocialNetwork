import {AvatarType, DialogType, MessageType} from "../types/types";

const ADD_MESSAGE = 'ADD-MESSAGE';

let initialState = {
    dialogs: [
        {id: 1, name: 'Cartman'},
        {id: 2, name: 'Kenny'},
        {id: 3, name: 'Stan'},
        {id: 4, name: 'Kyle'},
        {id: 5, name: 'Shef'},
        {id: 6, name: 'Mr.Garrison'}
    ] as Array<DialogType>,
    messages: [
        {id: 1, message: 'Guys i hate you'},
        {id: 2, message: 'Mmmm mmm'},
        {id: 3, message: 'Cartman Fat Ass'},
        {id: 4, message: 'You bastard!!!'},
        {id: 5, message: 'Hello children!'}
    ] as Array<MessageType>,
    avatars: [
        {
            id: 1,
            avatar: 'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/28/2876f8083f952a5894f49df69d6865557fd80d71_full.jpg'
        },
        {
            id: 2,
            avatar: 'https://cdn.escapistmagazine.com/media/global/images/quizzes/cat_img/474.png'
        },
        {
            id: 3,
            avatar: 'https://cdn.hipwallpaper.com/i/51/71/BolWfG.png'
        },
        {
            id: 4,
            avatar: 'https://avatarfiles.alphacoders.com/111/thumb-111509.png'
        },
        {
            id: 5,
            avatar: 'https://res.cloudinary.com/teepublic/image/private/s--rcqc6v7Y--/t_Preview/b_rgb:191919,c_limit,f_jpg,h_630,q_90,w_630/v1513725878/production/designs/2198655_1.jpg'
        },
        {
            id: 6,
            avatar: 'https://i.pinimg.com/564x/8c/e1/7f/8ce17f240c7683e1f531c677a5fb8109.jpg'
        }
    ] as Array<AvatarType>,
};

export type InitialStateType = typeof initialState; // создаем тип для initialState

const dialogsReducer = (state = initialState, action: ActionsTypes): InitialStateType => {

    switch (action.type) {
        case ADD_MESSAGE: {
            return {
                ...state,
                messages: [...state.messages, {id: 5, message: action.newMessageText}]
            };
        }
        default:
            return state;
    }
};

type ActionsTypes = AddMessageType

type AddMessageType = {
    type: typeof ADD_MESSAGE
    newMessageText: string
}

export const addMessage = (newMessageText: string): AddMessageType  => ({type: ADD_MESSAGE, newMessageText});

export default dialogsReducer;