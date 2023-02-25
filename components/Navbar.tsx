import React from "react";
import styles from "@/styles/Home.module.css";
import { useState } from "react";

const Navbar = () => {
  const [menuSelected, setMenuSelected] = useState(false);
  return (
    <div className={styles.navbar}>
      <div className={styles.container}>
        <div className={styles.navbarContent}>
          <div className={styles.navLogoLeft}>
            <a href="#">
              <img src={"/logo-text.svg"} alt="guildly-logo-text" />
            </a>
          </div>
          <div className={styles.navLogoCentre}>
            <a href="#">
              <img src={"/logo-text.svg"} alt="guildly-logo-text" />
            </a>
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
          <div className={styles.navMenu}>
            <div
              className={styles.menu}
              onClick={() => setMenuSelected(!menuSelected)}
            >
              <div
                className={
                  menuSelected
                    ? [styles.menuBar, styles.menu1, styles.active].join(" ")
                    : [styles.menuBar, styles.menu1].join(" ")
                }
              />
              <div
                className={
                  menuSelected
                    ? [styles.menuBar, styles.menu2, styles.active].join(" ")
                    : [styles.menuBar, styles.menu2].join(" ")
                }
              />
              <div
                className={
                  menuSelected
                    ? [styles.menuBar, styles.menu3, styles.active].join(" ")
                    : [styles.menuBar, styles.menu3].join(" ")
                }
              />
            </div>
          </div>
          <div
            className={
              menuSelected
                ? [styles.navMenuDropdown, styles.active].join(" ")
                : styles.navMenuDropdown
            }
          >
            <div className={styles.dropdownContent}>
              <a href="#about">About</a>
              <a href="#problem">Problem</a>
              <a href="#solution">Solution</a>
              <a href="#feature">Feature</a>
              <a href="#application">Application</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
