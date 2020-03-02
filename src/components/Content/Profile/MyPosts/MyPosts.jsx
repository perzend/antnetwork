import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';


const MyPosts = (props) => {

    let postsElements = props.posts.posts.map(p => (
        <Post avatar={props.avatar} name={props.name} text={p.pText} count={p.lCount}/>));

    return (
        <div className={s.postsBlock}>
            <h2 className={s.title}>My posts</h2>
            <div>
                <textarea></textarea>
                <br/>
                <button>Add new post</button>
                <button>Clear</button>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
}

export default MyPosts;
