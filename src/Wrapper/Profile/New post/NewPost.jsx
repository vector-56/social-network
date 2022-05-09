import React from "react";
import stl from './NewPost.module.css'


const NewPost = (props) => {

    let newPostElement = React.createRef ();

    let addPost = () => {
        let text = newPostElement.current.value;
        props.addPost(text);
    }

    return (
           <div className={stl.newPost}>
                <textarea ref={newPostElement} name="newPost" placeholder="New message text..."></textarea>
                <button onClick = { addPost }>Send</button>
            </div>
    );
}

export default NewPost;