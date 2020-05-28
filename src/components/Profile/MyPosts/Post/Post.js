import React, {useState} from "react";
import style from './Post.module.css';
import photo from "../../../../assets/images/user.png"
import likeActive from "../../../../assets/images/likeActive.svg"
import likeNotActive from "../../../../assets/images/likeNotActive.svg"

const Post = (props) => {

    const changeLikesCount = () => {
        props.changeLikesCount(props.postId, props.likesCount, !props.likeStatus);
    }

    return (
        <div className={style.item}>
            <div className={style.photo}><img src={props.userPhoto || photo}/></div>
            <div className={style.message}>
                {props.message}
                <div className={style.like}>
                    {props.likeStatus
                        ? <img src={likeActive} onClick={changeLikesCount}/>
                        : <img src={likeNotActive} onClick={changeLikesCount}/>
                    }
                    <div>{props.likesCount}</div>
                </div>
            </div>
        </div>
    )
}

export default Post;