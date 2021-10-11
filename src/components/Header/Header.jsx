import React from "react";
import style from './Header.module.css';
import {NavLink} from "react-router-dom";
import PreloaderMini from "../../common/PreloaderMini.gif"


const Header = (props) => {

    return(
        <header className={style.header}>
            <img src="https://logosvector.net/wp-content/uploads/2013/04/puma-se-eps-vector-logo.png"/>

            <div className={style.loginBlock}>
                {props.isAuth ? props.login
                : <NavLink to={"login"}>Login</NavLink>}
                <div><img src={PreloaderMini}/></div>
            </div>
        </header>
    );
}
export default Header;