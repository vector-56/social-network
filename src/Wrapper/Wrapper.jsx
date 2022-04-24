import React from "react";
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
                    Картинка
                </div>
                <div className={stl.posts}>
                    <p>Post</p>
                    <p>Post</p>
                    <p>Post</p>
                </div>
            </div>
        </div>
    );
}

export default Wrapper;