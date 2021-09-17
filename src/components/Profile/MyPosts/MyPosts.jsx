import React from "react";
import style from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = (props) => {
    let postsElements =
        props.posts.map((post) => <Post message={post.message} id={post.id}
                                      quantity__like={post.quantity__like}
                                      quantity__dislike={post.quantity__dislike}/>);

    let onAddPost = () => {
        props.addPost();
    }

    let onPostChange = (e) => {
        let text = e.target.value;
        props.updateNewPostText(text);
    }

    return (
        <div className={style.myPosts}>
            <h3>My Posts</h3>
            <div className={style.addPosts}>
                <textarea onChange={onPostChange}
                          placeholder="enter u post..."
                          value={props.newPostText} />
                <button onClick={onAddPost}>add post...</button>
            </div>
            <div className={style.posts}>
                {postsElements}
            </div>
        </div>
    );
}

export default MyPosts;