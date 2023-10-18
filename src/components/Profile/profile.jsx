import React from "react";
import MyPosts from "./MyPosts/myposts";
import s from "./profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

let Profile = (props) => {
  return (
    <div className={s.content}>
      <ProfileInfo />
      <MyPosts
        posts={props.profilePage.posts}
        newPostText={props.profilePage.newPostText}
        dispatch={props.dispatch}
      />
    </div>
  );
};

export default Profile;
