import React from "react";
import style from './Post.module.css';

const Post = (props) => {
    return (
        <div className={style.item}>
            <img src="https://ubistatic19-a.akamaihd.net/ubicomstatic/en-gb/global/buy-now/512_mobile_292979.png"/>
            {props.message}
            <div>
                <span>like {props.like}</span>
            </div>
        </div>
    )
}

export default Post;