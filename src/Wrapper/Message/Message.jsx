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

    let newDialogMessage = React.createRef();

    let addNewDialogMessage = () => {
        let text = newDialogMessage.current.value;
        alert (text);
    }

    return (
        <div className={stl.message}>
            <div className={stl.dialogList}>
                <ul>
                    {DialogItem}
                </ul>
            </div>
            <div className={stl.newDialogMessage}>
                <div className={stl.dialogs}>
                    {MessageItem}
                </div>
                <div className={stl.dialogMessage}>
                    <textarea ref = {newDialogMessage} placeholder="Starting type new message..."></textarea>
                    <button onClick = {addNewDialogMessage} >Send</button>
                </div>
            </div>
        </div>
    );
}

export default Message;