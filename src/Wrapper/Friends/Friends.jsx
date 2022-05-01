import React from "react";
import stl from './Friend.module.css'

const Friend = (props) => {
    
    return (
        <div className={stl.friendBlock}>
            <div className={stl.friendBlockAvatar}></div>
            <div className={stl.friendBlockName}>{props.name}</div>
        </div>
    );
}

export default Friend