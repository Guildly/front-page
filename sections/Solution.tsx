import React from "react";
import styles from "@/styles/Home.module.css";

const Solution = () => {
  return (
    <div className={styles.solution}>
      <div className={styles.solutionscontent}>
        <h1 className={styles.solutionsheader}>
          A decentralized guild framework
        </h1>
        <p className={styles.solutionsp}>Bridging to L2 and beyond</p>
        <div className={styles.solutionsgrid}>
          <div className={styles.solutionsgrid1}>
            <div className={styles.solutionsbox1}>
              <h1>NFT Sharing</h1>
              <p>
                Game items are shared between everyone in a guild. Depositors
                remain in custody of the items and permissions dictate the item
                uses. No third party risks and collaterization. A significant
                improvement on the DAO lending model.
              </p>
            </div>
            <div className={styles.solutionsbox2}>
              <h1>Shared Accounts</h1>
              <p>
                Guilds are shared accounts, allowing multiple users to control
                them together. This opens opportunities for joint decision
                making and multiple users to dictate actions.
              </p>
            </div>
          </div>
          <div className={styles.solutionsgrid2}>
            <div className={styles.solutionsbox3}>
              <h1>Customizable Structure</h1>
              <p>
                Guilds are designed in a modular way allowing for guilds to
                decide on their mechanics. From implementing fee systems to
                choosing the governance strategies, anything is possible.
              </p>
            </div>
          </div>
        </div>
        <div className={styles.solutionsfooter}>
          <p>100x</p>
        </div>
        <div className={styles.solutionsfooterp}>growth in game adoption</div>
      </div>
    </div>
  );
};

export default Solution;
