import React from "react";
import stl from './Message.module.css'
import Dialog from "./Dialog/Dialog";
import { Link } from "react-router-dom";

const DialogListData = (props) => {
    return (
        <div>
            <li><Link to={props.id}>{props.dialogName}</Link></li>
        </div>
    )
}

const Message = (props) => {

    let MessageItem = props.MessagesData.map(message => <Dialog id={message.id} dialogText={message.dialogText} />)

    let DialogItem = props.DialogsData.map(dialog => <DialogListData id={dialog.id} dialogName={dialog.dialogName} />)

    return (
        <div className={stl.message}>
            <div className={stl.dialogList}>
                <ul>
                    {DialogItem}
                </ul>
            </div>
            <div className={stl.dialogs}>
                {MessageItem}
            </div>
        </div>
    );
}

export default Message;