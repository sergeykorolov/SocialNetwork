import {NavbarItemType} from "../types/types";

let initialState = {
    items: [
        {id: 1, item: 'Profile'},
        {id: 2, item: 'Messages'},
        {id: 3, item: 'Users'},
        {id: 4, item: 'News'},
        {id: 5, item: 'Music'},
        {id: 6, item: 'Settings'},
        {id: 7, item: 'Subscriptions'}
    ] as Array<NavbarItemType>
};

export type InitialStateType = typeof initialState; // задает тип по объекту initialState

const sidebarReducer = (state = initialState): InitialStateType => {
    return state;
};

export default sidebarReducer;