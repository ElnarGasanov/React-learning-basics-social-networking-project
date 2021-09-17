import React from "react";
import style from "./../Dialogs.module.css";
import {NavLink} from "react-router-dom";

const DialogsItems = (props) => {
    return (
        <div>
            <div className={style.dialog}>
                <img src={props.img}/>
                <NavLink activeClassName={style._active} to={"/dialogs/" + props.id}> {props.name} </NavLink>
            </div>
        </div>
    );
}

export default DialogsItems;