import React from "react";
import stl from './NewPost.module.css'

const NewPost = () => {
    return (
           <div className={stl.newPost}>
                <input type="textarea" name="newPost" placeholder="New message text..."></input>
                <button>Send</button>
            </div>
    );
}

export default NewPost;