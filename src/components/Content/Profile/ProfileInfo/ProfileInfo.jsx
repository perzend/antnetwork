import React from 'react';
import s from './ProfileInfo.module.css';

const ProfileInfo = (props) => {
    return (
        <div className={s.descBlock}>
            <div className={s.topImage}>
                <img
                    src='https://images.pexels.com/photos/459225/pexels-photo-459225.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
                    alt='Not found'/>
            </div>
            <h2 className={s.title}>User Profile Info</h2>
            <div >
                <img className={s.ava} src={props.avatar.pathToSelfUserAvatar}/>
                <span>{props.name.suName}</span>
            </div>
        </div>
    )
}

export default ProfileInfo;
