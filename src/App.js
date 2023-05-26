import React from "react";
import "./App.css";
import Profile from "./components/Profile/profile";
import Header from "./components/Header/header";
import Nav from "./components/Navbar/nav";
import Dialogs from "./components/Dialogs/Dialogs";
import { Route, Routes } from "react-router-dom";
import News from "./components/News/news";
import Music from "./components/Music/music";
import Settings from "./components/Settings/settings";


const App = (props) => {
  return (
    <div className="app-wrapper">
      <Header />
      <Nav />
      <div className="app-wrapper-content">
        <Routes>
          <Route
            path="/profile"
            element={
              <Profile
								profilePage={props.state.profilePage}
                addPost={props.addPost}
                updateNewPostText={props.updateNewPostText}
              />
            }
          />

          <Route
            path="/dialogs/*"
            element={
              <Dialogs
              dialogsPage={props.state.dialogsPage}
                addMessage={props.addMessage}
                updateNewMessageText={props.updateNewMessageText}
              />
            }
          />

          <Route path="/news" element={<News />} />
          <Route path="/music" element={<Music />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
