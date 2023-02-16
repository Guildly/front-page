import React from "react";
import Image from "next/image";
import styles from "@/styles/Home.module.css";

const Feature = () => {
  return (
    <div className={styles.feature}>
      <div className={styles.featureBox}>
        <p>
          Anyone can create a guild and start sharing their NFTs securely with
          roles and set permissions. NFT sharing allows multiple users to have
          access to NFTs increasing wide-range adoption, including gaming and
          Defi.
        </p>
      </div>
    </div>
  );
};

export default Feature;
