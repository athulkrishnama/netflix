import React from "react";
import logo from "../../assets/logo.png";
import searchLogo from "../../assets/search.png";
import notificationLogo from '../../assets/notification.png'
import avatar from '../../assets/avatar.png'
import styles from "./Navbar.module.css";
function Navbar() {
  return (
    <nav>
      <div className={styles.left}>
        <img src={logo} alt="Netflix logo" className={styles.logo} />
        <ul className={styles.links}>
          <li>Home</li>
          <li>TV Shows</li>
          <li>Movies</li>
          <li>New & Popular</li>
          <li>My List</li>
          <li>Browse By Language</li>
        </ul>
      </div>
      <div className={styles.right}>
        <img src={searchLogo} alt="" />
        <img src={notificationLogo} alt="" />
        <img src={avatar} alt="" />
      </div>
    </nav>
  );
}

export default Navbar;
