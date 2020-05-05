import React from "react";
import style from './Post.module.css';
import userPhoto from "../../../../assets/images/user.png"

const Post = (props) => {
    return (
        <div className={style.item}>
            <img src={userPhoto}/>
            {props.message}
            <div>
                <span>like {props.like}</span>
            </div>
        </div>
    )
}

export default Post;