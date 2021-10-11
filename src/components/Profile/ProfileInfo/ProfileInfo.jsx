import React from "react";
import style from './ProfileInfo.module.css';
import Preloader from "../../../common/Preloader";
import userAvatar from "./../../../image/user-icon.jpg"

const ProfileInfo = (props) => {

    if(!props.profile){
        return <Preloader />
    }

    return (
        <main>
            <div>
                <img className={style.fon}
                     src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPgVqPfCA2AvKZIYM_vcKxX0ZSxJBeb7YUDQ&usqp=CAU"
                     alt="img"/>
            </div>
            <div className={style.descriptionBlock}>

                <img src={props.profile.photos.large === null ? userAvatar : props.profile.photos.large } alt="avatar"/>
                <div className={style.wrapperInfo}>
                    <span>
                       full name: {props.profile.fullName}.
                    </span>
                    <span>
                        about me: {props.profile.aboutMe}.
                    </span>
                    <span>
                        A job description: {props.profile.lookingForAJobDescription}.
                    </span>

                </div>
            </div>
        </main>
    );
}
export default ProfileInfo;