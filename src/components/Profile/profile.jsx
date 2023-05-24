import React from "react";
import MyPosts from "./MyPosts/myposts";
import s from "./profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

let Profile = (props) => {
  return (
    <div className={s.content}>
      <ProfileInfo />
      <MyPosts
        posts={props.state.profilePage.posts}
        addPost={props.addPost}
        newPostText={props.newPostText}
        updateNewPostText={props.updateNewPostText}
      />
    </div>
  );
};

export default Profile;
