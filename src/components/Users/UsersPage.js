import React from "react";
import style from "./UsersPage.module.css";
import userPhoto from "../../image/userImage.png";
import {NavLink} from "react-router-dom";

let UsersPage = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return (
        <main className={style.usersJsx}>
            <h1>Users</h1>

            {pages.map(p => {
                return <span
                    className={props.currentPage === p && style.selectedPage}
                    onClick={() => {props.onChangedCurrentPage(p)}}> {p}
                </span>
            })
            }

            {props.users.map(u => <div className={style.wrapper_users} key={u.id}>

                <div>
                    <div className={style.userPhoto}>
                        <NavLink to={'/profile/' + u.id}>
                            <img src={u.photos.small != null ? u.photos.small : userPhoto}/>
                        </NavLink>
                    </div>
                    <div className={style.wrapper_button}>
                        {u.followed
                            ? <button disabled={props.followingInProgress.some(id => id === u.id)}
                                      onClick={() => {props.unfollow(u.id);}}> UNFOLLOW </button>

                            : <button disabled={props.followingInProgress.some(id => id === u.id)}
                                      onClick={() => {props.follow(u.id);}}> FOLLOW </button>}
                    </div>
                </div>

                <div className={style.wrapper_users_name}>
                    <div>
                        <div>{u.name}</div>
                        <div>{u.status}</div>
                    </div>
                    <div>
                        <div>{"id:" + u.id}</div>
                        <div>{"user"}</div>
                    </div>
                </div>

            </div>)}

        </main>
    )
}

export default UsersPage;