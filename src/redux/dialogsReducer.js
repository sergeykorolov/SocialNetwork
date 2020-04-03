const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

let initialState = {
    dialogs: [
        {id: 1, name: 'Cartman'},
        {id: 2, name: 'Kenny'},
        {id: 3, name: 'Stan'},
        {id: 4, name: 'Kyle'},
        {id: 5, name: 'Shef'},
        {id: 6, name: 'Mr.Garrison'}
    ],
    messages: [
        {id: 1, message: 'Guys i hate you'},
        {id: 2, message: 'Mmmm mmm'},
        {id: 3, message: 'Cartman Fat Ass'},
        {id: 4, message: 'You bastard!!!'},
        {id: 1, message: 'Screw you gays, I am going home)'}
    ],
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
    ],
    newMessageText: ''
}

const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_MESSAGE: {
            let text = state.newMessageText;
            return {
                ...state,
                newMessageText: '',
                messages: [...state.messages, {id: 5, message: text}]
            };
        }
        case UPDATE_NEW_MESSAGE_TEXT: {
            return {
                ...state,
                newMessageText: action.newMessageText
            }
        }
        default:
            return state;
    }
}

export const addMessageActionCreator = () => {
    return {
        type: ADD_MESSAGE
    }
}

export const updateNewMessageTextActionCreator = (text) => {
    return {
        type: UPDATE_NEW_MESSAGE_TEXT,
        newMessageText: text
    }
}

export default dialogsReducer;