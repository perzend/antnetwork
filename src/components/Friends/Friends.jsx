import React from 'react';
import s from './Friends.module.css';


const Friends = (props) => {
    return (
        <div className={s.friend}>
            <img className={s.avatarsImage} src={props.fAva} alt="" title={props.fName}/>
        </div>
    )
}

export default Friends;
