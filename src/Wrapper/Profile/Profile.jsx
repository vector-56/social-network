import React from "react";
import stl from "./Profile.module.css"
import Post from "../Posts/Post";
import NewPost from "./New post/NewPost";

const Profile = () => {
    return (
        <div className={stl.content}>
            <div className={stl.bgimg}>
            </div>
            <NewPost />
            <Post id="1" message="First post" likescount="13" />
            <Post id="2" message="Second post" likescount="14" />
            <Post id="3" message="Third post" likescount="4" />
        </div>
    );
}

export default Profile;