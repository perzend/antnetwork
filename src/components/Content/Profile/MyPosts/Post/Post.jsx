import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
    return (
        <div className={s.item}>
            <img className={s.ava} src={props.avatar.pathToSelfUserAvatar}/>
            <span>{props.name.suName}</span>
            <div>
                <p>{props.text}</p>
            </div>
            <div>
                <span>How many likes: {props.count}</span>
            </div>
        </div>
    )
}
export default Post;
