import React from 'react';
import s from './Navbar.module.css';
import {NavLink} from "react-router-dom";
import Friends from "../Friends/Friends";

const Navbar = (props) => {

    let friendsElements = props.state.friends.map(f => <Friends fName = {f.friendName} fAva = {f.friendAvatar}/>);

    return (
        <nav className={s.nav}>
            <div className={`${s.item} ${s.activeLink}`}>
                <NavLink to='/profile' activeClassName={s.activeLink}>Profile</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/dialogs' activeClassName={s.activeLink}>Messages</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/news' activeClassName={s.activeLink}>News</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/music' activeClassName={s.activeLink}>Music</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/settings' activeClassName={s.activeLink}>Settings</NavLink>
            </div>
            <div className={s.item + ' ' + s.friendsBlock}>
                <span>FRIENDS</span> <br/>
                {friendsElements}
            </div>

        </nav>
    )
}

export default Navbar;
