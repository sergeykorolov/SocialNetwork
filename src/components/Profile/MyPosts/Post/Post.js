import React from "react";
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
                <div className={style.like} onClick={changeLikesCount}>
                    <div className={style.likeStatus}>
                        {props.likeStatus
                            ? <img src={likeActive}/>
                            : <img src={likeNotActive}/>
                        }
                    </div>
                    <div className={style.likesCount}>{props.likesCount}</div>
                </div>
            </div>
        </div>
    )
}

export default Post;