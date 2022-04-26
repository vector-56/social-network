import React from "react";
import stl from "./Post.module.css";

const Post = (props) => {
    return (
        <div className={stl.post}>
            <div className={stl.avatar}></div>
            <p>{props.message}</p>
            <p>Likes: {props.likescount}</p>
        </div>
    );
}

export default Post;