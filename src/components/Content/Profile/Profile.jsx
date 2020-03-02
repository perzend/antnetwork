import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
    return (
        <div>
            <ProfileInfo avatar={props.state.selfUserAvatar} name={props.state.selfUserName}/>
            <MyPosts avatar={props.state.selfUserAvatar} name={props.state.selfUserName}
                     posts={props.state.selfUserPosts}/>
        </div>
    )
}

export default Profile;
