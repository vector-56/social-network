import React from "react";
import stl from "./Profile.module.css"
import Post from "../Posts/Post";
import NewPost from "./New post/NewPost";

const Profile = (props) => {

    const PostItem = props.PostsData.map(post => <Post message={post.message} likesCount={post.likesCount} />)

    return (
        <div className={stl.content}>
            <div className={stl.bgimg}>
                <NewPost />
            </div>
            {PostItem}
        </div>
    );
}

export default Profile;