import React from "react";
import style from "./Dialogs.module.css";
import DialogsItems from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {
    let dialogsElements =
        props.dialogsPage.dialogs.map((dialog) => <DialogsItems name={dialog.name}
                                                                id={dialog.id}
                                                                img={dialog.img}/>);
    let messagesElements =
        props.dialogsPage.messages.map((message) => <Message text={message.message}
                                                             id={message.id}/>)

    let addMessage = () => {
        props.sendMessage();
    }
    let onMessageChange = (e) => {
        let body = e.target.value;
        props.updateNewMessage(body);
    }

    return (
        <main className={style.dialogs}>
            <div>
                {dialogsElements}
            </div>
            <div className={style.messages}>
                {messagesElements}
            </div>
            <div className={style.addMessage}>
                    <textarea placeholder="tab u message..."
                              onChange={onMessageChange}
                              value={props.newMessageText}/>
                <button onClick={addMessage}>add message...</button>
            </div>
        </main>
    );
}


export default Dialogs;