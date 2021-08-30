import React from "react";
import style from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = () => {

    let postsData = [
        {id: 1, message: "Zdarova,brat", quantity__like: "15", quantity__dislike: "1"},
        {id: 2, message: "it`s my new post", quantity__like: "15", quantity__dislike: "1"},
    ]

    let postsElements =
        postsData.map((post) => <Post message={post.message} id={post.id}
                                      quantity__like={post.quantity__like}
                                      quantity__dislike={post.quantity__dislike}/>);

    return (
        <div className={style.myPosts}>
            <h3>My Posts</h3>
            <div>
                <textarea></textarea>
            </div>
            <div>
                <button>Add post</button>
            </div>

            <div className={style.posts}>
                {postsElements}
            </div>
        </div>
    );
}

export default MyPosts;