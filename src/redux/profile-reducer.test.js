import React from "react";
import profileReducer, {addPost, deletePost} from "./profile-reducer";

let state = {posts: [
    {id: 1, message: 'Hi, how are you?', likesCount: 12},
    {id: 2, message: "It's my first post", likesCount: 4}
]}

it('new post should be added', () => {
    // test data
    let action = addPost("Test text");
    // action
    let newState = profileReducer(state, action);
    // expectation
    expect(newState.posts.length).toBe(3);
});

it('text of new post should be correct', () => {
    // test data
    let action = addPost("TEST TEXT");
    // action
    let newState = profileReducer(state, action);
    // expectation
    expect(newState.posts[2].message).toBe("TEST TEXT");
});

it('after deleting length of posts should be decrement', () => {
    // test data
    let action = deletePost(3);
    // action
    let newState = profileReducer(state, action);
    // expectation
    expect(newState.posts.length).toBe(2);
});

it(`after deleting length shouldn't be decrement if id is incorrect`, () => {
    // test data
    let action = deletePost(1000);
    // action
    let newState = profileReducer(state, action);
    // expectation
    expect(newState.posts.length).toBe(2);
});