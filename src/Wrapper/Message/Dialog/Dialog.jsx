import React from "react";
import stl from './Dialog.module.css'

const Dialog = (props) => {
    return (
        <div className={stl.dialogItems}>
            <div className={stl.dialogItemsAvatar}></div>
            <div className={stl.dialogItemsText}>{props.dialogText}</div>
        </div>
    );
}

export default Dialog;