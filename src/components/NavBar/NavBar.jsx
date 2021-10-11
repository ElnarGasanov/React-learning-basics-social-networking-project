import React, {useState} from "react";
import style from './NavBar.module.css';
import {NavLink} from "react-router-dom";

const NavBar = (props) => {

    let friendsPageElements =
        props.friend.map((el) =>
                    <span id={el.id}>
                        <div className={style.circle}>{el.img}</div>
                        <div className={style.nameF}>{el.name}</div>
                    </span>)

    return (
        <nav className={style.nav}>
            <div className={style.item}>
                <NavLink to="/profile" activeClassName={style.active}>Profile</NavLink>
            </div>
            <div className={`${style.item} ${style.active}`}>
                <NavLink to="/dialogs" activeClassName={style.active}>Messages</NavLink>
            </div>
            <div className={style.item}>
                <NavLink to="/news" activeClassName={style.active}>News</NavLink>
            </div>
            <div className={style.item}>
                <NavLink to="/music" activeClassName={style.active}>Music</NavLink>
            </div>
            <div className={style.item}>
                <NavLink to="/settings" activeClassName={style.active}>Settings</NavLink>
            </div>
            <div className={style.itemFriends}>
                <NavLink to="/friends"  activeClassName={style.active}>Friends</NavLink>
                <div className={style.wrapper}>
                    {friendsPageElements}
                </div>
            </div>
            <div className={style.item}>
                <NavLink to="/users" activeClassName={style.active}>Users</NavLink>
            </div>
        </nav>
    );
}

export default NavBar;