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
        <p>
          Explore and manage your guilds from the
          <span className={styles.appText}> Guildhall</span>
        </p>
      </div>

      <div className={styles.applicationBar}>
        <Image
          className={styles.applicationIcon}
          src="/vault.png"
          alt="Vault"
          width={42}
          height={40}
        ></Image>
        <p>
          Deposit and withdraw items into the Guild
          <span className={styles.appText}> Bank</span>
        </p>
      </div>
      <div className={styles.applicationBar}>
        <Image
          className={styles.applicationIcon}
          src="/coins-solid.png"
          alt="Coins"
          width={40}
          height={40}
        ></Image>
        <p>
          Manage and analyse fee policies in the
          <span className={styles.appText}> Market</span>
        </p>
      </div>
      <div className={styles.applicationBar}>
        <Image
          className={styles.applicationIcon}
          src="/checksquare.png"
          alt="Home"
          width={42}
          height={40}
        ></Image>
        <p>
          Assess the ongoing proposals in the
          <span className={styles.appText}> Council</span>
        </p>
      </div>
    </div>
  );
};

export default ApplicationGrid;
