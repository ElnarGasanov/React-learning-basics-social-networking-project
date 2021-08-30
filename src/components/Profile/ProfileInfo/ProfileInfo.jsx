import React from "react";
import style from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return (
        <main>
            <div>
                <img className={style.fon}
                     src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPgVqPfCA2AvKZIYM_vcKxX0ZSxJBeb7YUDQ&usqp=CAU"
                     alt="img"/>
            </div>
            <div className={style.descriptionBlock}>
                <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSZ9se8N-sEQ-LU7cYhO9hWVljFF3eS1vUYQ&usqp=CAU"
                    alt="avatar"/>
            </div>
        </main>
    );
}
export default ProfileInfo;