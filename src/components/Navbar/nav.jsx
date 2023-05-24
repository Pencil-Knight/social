import React from "react";
import { NavLink } from "react-router-dom";
import Dialogs from "../Dialogs/Dialogs";
import s from './nav.module.css'


const Nav = () => {
	return (
    <div>
      <nav className={s.nav}>
        <div className={s.link}>
          <NavLink to="/Profile" className={(navData) => (navData.isActive ? s.active : s.item)}>
            Profile
          </NavLink>
        </div>
        <div className={s.link}>
          <NavLink to="/Dialogs" className={(navData) => (navData.isActive ? s.active : s.item)}>
            Messeges
          </NavLink>
        </div>
        <div className={s.link}>
          <NavLink to="/News" className={(navData) => (navData.isActive ? s.active : s.item)}>
            News
          </NavLink>
        </div>
        <div className={s.link}>
          <NavLink to="/Music" className={(navData) => (navData.isActive ? s.active : s.item)}>
            Music
          </NavLink>
        </div>
        <div className={s.link}>
          <NavLink to="/Settings" className={(navData) => (navData.isActive ? s.active : s.item)}>
            Settings
          </NavLink>
        </div>
      </nav>
    </div>
  );
		}

		export default Nav