import React from "react";
import styles from "@/styles/Home.module.css";

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.navLogo}>
        <img src={"/logo-text.svg"} alt="guildly-logo-text" />
      </div>
      <div className={styles.navContent}>
        <div className={styles.navLinks}>
          <a href="#about">About</a>
          <a href="#problem">Problem</a>
          <a href="#solution">Solution</a>
          <a href="#feature">Feature</a>
          <a href="#application">Application</a>
        </div>
        <div className={styles.appButton}>
          <p className={styles.launchText}>Launch App</p>
          <p className={styles.comingSoonText}>Coming Soon</p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
