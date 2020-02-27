import React from 'react';
import s from './ProfileInfo.module.css';

const ProfileInfo = () => {
  return (
    <div>
      <div className={s.topImage}>
        <img src='https://images.pexels.com/photos/459225/pexels-photo-459225.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' alt='Not found' />
      </div>
      <div className={s.descBlock}>
        ava + decs
      </div>
    </div>
  );

}

export default ProfileInfo;
