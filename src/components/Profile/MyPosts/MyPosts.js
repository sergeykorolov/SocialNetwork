import React, {useState} from "react";
import style from './MyPosts.module.css';
import Post from "./Post/Post";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator} from "../../../utils/validators/validators";
import {Textarea} from "../../common/FormsControls/FormsControls";

const MyPosts = (props) => {

    let [newPostField, setNewPostField] = useState(false);

    let postsElements = props.posts
        .map(post => <Post postId={post.id}
                           message={post.message}
                           likesCount={post.likesCount}
                           likeStatus={post.likeStatus}
                           userPhoto={props.userPhoto}
                           changeLikesCount={props.changeLikesCount}
                           key={post.id}/>);

    const onAddPost = (formData) => {
        props.addPost(formData.newPostText);
        setNewPostField(false);
    }

    return (
        <div className={style.postsBlock}>
            <h3>My posts</h3>
            {! newPostField
                ? <button onClick={() => setNewPostField(true)}>Add new post</button>
                : <div className={style.newPost}>
                    <AddNewPostReduxForm setNewPostField={setNewPostField} onSubmit={onAddPost}/>
                    <button className={style.cancel} onClick={() => setNewPostField(false)}>Cancel</button>
                </div>
            }
            <div className={style.posts}>{postsElements}</div>
        </div>
    )
};

const maxLength = maxLengthCreator(50);

const AddNewPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field autoFocus={true} placeholder="new post" name="newPostText" component={Textarea}
                       validate={maxLength}/>
            </div>
            <div className={style.add}>
                <button>Add</button>
            </div>
        </form>
    )
}

const AddNewPostReduxForm = reduxForm({form: 'profileAddNewPostForm'})(AddNewPostForm);

export default MyPosts;