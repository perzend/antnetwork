import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';


const MyPosts = () => {
  return (
    <div className={s.postsBlock}>
      <h3>My posts</h3>
      <div>
        <textarea></textarea>
        <button>Add new post</button>
        <button>Remove</button>
      </div>
      <div className={s.posts}>
        <Post message = 'Hi, how are you!' likesCount = '20'/>
        <Post message = "It's my first post" likesCount = '9'/>
        
      </div>
    </div>
  );

}

export default MyPosts;
