import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';


const MyPosts = () => {

    let posts = [
        {id: '1', message: 'Hi, how are you!', likesCount: '12'},
        {id: '2', message: 'It\'s my first post', likesCount: '4'},
        {id: '3', message: 'This message from postsData massive', likesCount: '555'}
    ]

    let postsElements = posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>);

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
