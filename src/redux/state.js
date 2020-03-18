import {rerenderEntireTree} from "../render";

let state = {
    profilePage: {
        posts: [
            {id: 1, message: 'Hi, how are you?', likesCount: 12},
            {id: 2, message: "It's my first post", likesCount: 4}
        ]
    },
    dialogsPage: {
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
            {id: 1, avatar: 'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/28/2876f8083f952a5894f49df69d6865557fd80d71_full.jpg'},
            {id: 2, avatar: 'data:image/png;base64,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'},
            {id: 3, avatar: 'https://cdn.hipwallpaper.com/i/51/71/BolWfG.png'},
            {id: 4, avatar: 'https://avatarfiles.alphacoders.com/111/thumb-111509.png'},
            {id: 5, avatar: 'https://res.cloudinary.com/teepublic/image/private/s--rcqc6v7Y--/t_Preview/b_rgb:191919,c_limit,f_jpg,h_630,q_90,w_630/v1513725878/production/designs/2198655_1.jpg'},
            {id: 6, avatar: 'https://i.pinimg.com/564x/8c/e1/7f/8ce17f240c7683e1f531c677a5fb8109.jpg'}
        ]
    },
    sidebar: {
        items: [
            {id: 1, item: 'Profile'},
            {id: 2, item: 'Messages'},
            {id: 3, item: 'News'},
            {id: 4, item: 'Music'},
            {id: 5, item: 'Settings'},
            {id: 6, item: 'Friends'}
        ]
    },
};

export let addPost = (postMessage) => {
    let newPost = {
        id: 3,
        message: postMessage,
        likesCount: 0
    };

    state.profilePage.posts.push(newPost);
    rerenderEntireTree(state);
};

let set = '';

export let stringSet = (symbol) => {
    set = set + symbol;
    let newPost = {
        id: 3,
        message: symbol,
        likesCount: 0
    };
    state.profilePage.posts.push(newPost);
    rerenderEntireTree(state);
}

export default state;