import React from 'react';
import classNavbar from './Navbar.module.css';

const Navbar = () => {
return (
  <nav className = {classNavbar.nav}>
  <div className = {classNavbar.item}>
    <a>Profile</a>
  </div>
  <div className = {classNavbar.item}>
    <a>Messages</a>
  </div>
  <div className = {classNavbar.item}>
    <a>News</a>
  </div>
  <div className = {classNavbar.item}>
    <a>Music</a>
  </div>
  <div className = {classNavbar.item}>
    <a>Settings</a>
  </div>
</nav>
);

}

export default Navbar;
