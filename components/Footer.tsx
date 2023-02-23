import React from "react";
import Image from "next/image";
import styles from "@/styles/Home.module.css";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <h1>RULE WELL AND CONQUER ALL!</h1>

      <div className={styles.socials}>
        <p>Community</p>
        <Image
          className={styles.discord}
          src="/discord.svg"
          alt="Discord Logo"
          width={40}
          height={40}
        />
        <Image
          className={styles.twitter}
          src="/twitter.svg"
          alt="Twitter Logo"
          width={40}
          height={40}
        />

        <p>Developer</p>
      </div>
    </div>
  );
};

export default Footer;
