import React from "react";
import Image from "next/image";
import styles from "@/styles/Home.module.css";

const Header = () => {
  return (
    <div className={styles.header}>
      <Image
        className={styles.logo}
        src="/guildly-logo.png"
        alt="Guildly Logo"
        width={455}
        height={494}
      />
      <div className={styles.headerContent}>
        <p>Protocol for sharing NFTs and Gameplay</p>
      </div>
    </div>
  );
};

export default Header;
