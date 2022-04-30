import React from "react";
import stl from './Message.module.css'
import Dialog from "./Dialog/Dialog";
import { Link } from "react-router-dom";

let DialogsData = [
    { id: 1, dialogName: 'Andrew' },
    { id: 2, dialogName: 'Bryan' },
    { id: 3, dialogName: 'Damien' },
    { id: 4, dialogName: 'Alexander' },
    { id: 5, dialogName: 'Sergey' },
    { id: 6, dialogName: 'Matt' },
]

const DialogListData = (props) => {
    return (
        <div>
            <li><Link to={props.id}>{props.dialogName}</Link></li>
        </div>
    )
}

let DialogItem = DialogsData.map( dialog => <DialogListData id={dialog.id} dialogName={dialog.dialogName} /> )

const Message = (props) => {
    return (
        <div className={stl.message}>
            <div className={stl.dialogList}>
                <ul>
                    {DialogItem}
                </ul>
            </div>
            <div className={stl.dialogs}>
                <Dialog id="1" dialogText="Hello" />
                <Dialog id="2" dialogText="Yes" />
                <Dialog id="3" dialogText="Good evening!" />
                <Dialog id="4" dialogText="Bye..." />
            </div>
        </div>
    );
}

export default Message;