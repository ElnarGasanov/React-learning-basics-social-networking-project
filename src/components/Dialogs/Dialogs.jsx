import React from "react";
import style from "./Dialogs.module.css";
import {NavLink} from "react-router-dom";


{/*мир BLL*/
}
const DialogsItems = (props) => {
    return (
        <div>
            <div className={style.dialog}>
                <NavLink to={"/dialogs/" + props.id}>{props.name}</NavLink>
            </div>
        </div>
    );
}
const Messages = (props) => {
    return (
        <div>
            <div className={style.message}>{props.text}</div>
        </div>
    );
}

const Dialogs = (props) => {

    let dialogsData = [
        {id: 1, name: "Andrei"},
        {id: 2, name: "Arbuz"},
        {id: 3, name: "OG"},
        {id: 4, name: "Brat"},
        {id: 5, name: "Sveta"},
        {id: 6, name: "Yana"},
    ]
    let messagesData = [
        {id: 1, message: "yo"},
        {id: 2, message: "ae"},
        {id: 3, message: "OG"},
        {id: 4, message: "hi"},
        {id: 5, message: "privet"},
        {id: 6, message: "normalno"},
    ]

    let dialogsElements =
        dialogsData.map((dialog) => <DialogsItems name={dialog.name} id={dialog.id}/>);
    let messagesElements =
        messagesData.map((message) => <Messages text={message.message} id={message.id}/>)

    {/*мир UI*/
    }
    return (
        <main className={style.dialogs}>
            <div>
                {/*массив элементов*/}
                {dialogsElements}

            </div>
            <div className={style.messages}>
                {messagesElements}
            </div>
        </main>
    );
}

export default Dialogs;