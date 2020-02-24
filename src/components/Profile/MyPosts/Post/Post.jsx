import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
  return (
    <div className={s.item}>
      <img src='https://i.pinimg.com/originals/cf/5e/de/cf5ede1acb4292683c74f6c4dade334f.jpg' />
      {props.message}
      <div>
        <span>How many likes: {props.likesCount}</span>
      </div>
    </div>
  );
}
export default Post;
