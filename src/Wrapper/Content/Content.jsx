import React from "react";
import Post from "./../Posts/Post"
import stl from "./Content.module.css"

const Content = () => {
    return (
        <div className={stl.content}>
            <div className={stl.bgimg}>
            </div>
            <Post message="First post" likescount="13" />
            <Post message="Second post" likescount="14" />
            <Post message="Third post" likescount="4" />
        </div>
    );
}

export default Content;