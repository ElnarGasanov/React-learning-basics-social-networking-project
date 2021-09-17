import React from "react";
import style from "./../Dialogs.module.css";

const Message = (props) => {
    return (
        <div className={style.blockMessage}>
            <div className={style.message}>{props.text}</div>
        </div>
    );
}

export default Message;