import React from "react";
import Image from "next/image";
import styles from "@/styles/Home.module.css";

const ApplicationGrid = () => {
  return (
    <div className={styles.ApplicationGrid}>
      <div className={styles.applicationBar}>
        <Image
          className={styles.applicationIcon}
          src="/house-solid.png"
          alt="Home"
          width={40}
          height={40}
        ></Image>
        <p>Explore and manage your guilds from the Guildhall</p>
      </div>

      <div className={styles.applicationBar}>
        <Image
          className={styles.applicationIcon}
          src="/vault.png"
          alt="Vault"
          width={40}
          height={40}
        ></Image>
        <p>Explore and manage your guilds from the Guildhall</p>
      </div>
      <div className={styles.applicationBar}>
        <Image
          className={styles.applicationIcon}
          src="/coins-solid.png"
          alt="Coins"
          width={40}
          height={40}
        ></Image>
        <p>Explore and manage your guilds from the Guildhall</p>
      </div>
      <div className={styles.applicationBar}>
        <Image
          className={styles.applicationIcon}
          src="/checksquare.png"
          alt="Home"
          width={40}
          height={40}
        ></Image>
        <p>Explore and manage your guilds from the Guildhall</p>
      </div>
    </div>
  );
};

export default ApplicationGrid;
