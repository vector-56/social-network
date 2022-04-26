import React from "react";
import stl from './Message.module.css'

const Message = () => {
    return (
        <div className={stl.message}>
           <p>Message</p>
        </div>
    );
}

export default Message;