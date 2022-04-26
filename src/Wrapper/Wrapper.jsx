import React from "react";
import Post from "./Posts/Post";
import stl from "./Wrapper.module.css";

const Wrapper = () => {
    return (
        <div className={stl.wrapper}>
            <div className={stl.sidebar}>
                <ul>
                    <li>Profile</li>
                    <li>Messages</li>
                    <li>News</li>
                    <li>Music</li>
                    <li>Settings</li>
                </ul>
            </div>
            <div className={stl.content}>
                <div className={stl.bgimg}>
                </div>
                <Post message="First post" likescount="13" />
                <Post message="Second post" likescount="14" />
                <Post message="Third post" likescount="4" />
            </div>
        </div>
    );
}

export default Wrapper;