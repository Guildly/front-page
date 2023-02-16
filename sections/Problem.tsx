import React from "react";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import Statement from "@/components/Statement";

const Problem = () => {
  return (
    <div className={styles.problem}>
      <div className={styles.problemContent}>
        <h1>What happened to peer to peer?</h1>
        <div className={styles.problemBox}>
          <p>
            Guildly is a decentralized protocol that allows for the management
            of shared accounts and the sharing of NFT assets in Web 3.0 games.
          </p>
        </div>
        <div className={styles.problemBox2}>
          <p>
            Our goal is to make it easy for players to join and participate in
            guilds, and to facilitate the sharing and use of NFT assets in a
            fair and transparent manner.
          </p>
        </div>
      </div>

      <div className={styles.NFTCards}>
        <Image
          className={styles.NFTCard1}
          src="/viking-card.png"
          alt="Viking card"
          width={300}
          height={300}
        />
        <Image
          className={styles.NFTCard3}
          src="/viking-card.png"
          alt="Viking card"
          width={300}
          height={300}
        />

        <Image
          className={styles.NFTCard2}
          src="/realm-card.png"
          alt="Realm card"
          width={300}
          height={300}
        />
      </div>
    </div>
  );
};

export default Problem;
