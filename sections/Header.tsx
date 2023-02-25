import React from "react";
import Image from "next/image";
import styles from "@/styles/Home.module.css";

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.container}>
        <div className={styles.headerWrap}>
          <div className={styles.logo}>
            <Image src="/guildly-logo.png" alt="Guildly Logo" fill={true} />
          </div>
          <div className={styles.headerContent}>
            <p>Protocol for sharing NFTs and Gameplay</p>
            <div className={styles.headerAppButton}>
              <p className={styles.launchText}>Coming Soon</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
