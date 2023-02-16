import React from "react";
import styles from "@/styles/Home.module.css";

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.navLogo}>
        {/* <Image
            src={"/logo-text.svg"}
            alt="guildly-logo-text"
            fill={true}
            style={{ objectFit: "contain" }}
          /> */}
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
          <p>Launch App</p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
