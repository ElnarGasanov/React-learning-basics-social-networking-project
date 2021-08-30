import React from "react";
import style from './Post.module.css';

const Post = (props) => {
    return(
                <div className={style.item}>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/f/f5/Pic-vk-allaboutme-ava-2.jpg" alt="post_img"/>
                    <span>{props.message}</span>
                    <div className={style.like}>
                        <span>like {props.quantity__like}</span>
                        <span>dislike {props.quantity__dislike}</span>
                    </div>
                </div>
    );
}
export default Post;