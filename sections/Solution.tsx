import React from "react";
import styles from "@/styles/Home.module.css";

const Solution = () => {
  return (
    <div className={styles.solution}>
      <h1>A decentralized guild framework</h1> <p>Bridging to L2 and beyond</p>
      <div className={styles.solutionscontent}>
        <div className={styles.solutionsbox}>
          <h1>NFT Sharing</h1>
          <p>
            Game items are shared between everyone in a guild. Depositors remain
            in custody of the items and permissions dictate the item uses. No
            third party risks and collaterization.
          </p>
        </div>

        <div className={styles.solutionsbox}>
          <h1>Shared Accounts</h1>
          <p>
            Guilds are shared accounts, allowing multiple users to control them
            together. This opens opportunities for joint decision making and
            multiple users to dictate actions.
          </p>
        </div>

        <div className={styles.solutionsbox}>
          <h1>Customizable Structure</h1>
          <p>
            Guilds are designed in a modular way allowing for guilds to decide
            on their mechanics. From implementing fee systems to choosing the
            governance strategies, anything is possible.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Solution;
