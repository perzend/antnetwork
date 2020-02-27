import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';


const MyPosts = (props) => {

    let postsElements = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>);

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <textarea></textarea>
                <button>Add new post</button>
                <button>Remove</button>
            </div>
            <div className={s.posts}>
               {postsElements}
            </div>
        </div>
    )
}

export default MyPosts;
