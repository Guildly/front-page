import React from "react";
import styles from "@/styles/Home.module.css";
import Image from "next/image";

const FeatureGrid = () => {
  return (
    <div className={styles.featuregrid}>
      <div className={styles.featureBox}>
        <div className={styles.icon}>
          <Image
            src="/handshake-simple-solid 1.png"
            alt="handshake"
            fill={true}
          />
        </div>
        <div className={styles.featureBoxheader}>
          <h1>Trustless</h1>
          <div className={styles.featureBoxp}>
            <p className={styles.featureText}>
              The protocol enforces security without compromising accessibility.
            </p>
          </div>
        </div>
      </div>
      <div className={styles.featureBox}>
        <div className={styles.icon}>
          <Image src="/chart-line-solid 1.png" alt="chart" fill={true} />
        </div>
        <div className={styles.featureBoxheader}>
          <h1>Scalable</h1>
          <div className={styles.featureBoxp}>
            <p className={styles.featureText}>
              There are no limitations that come with managing DAOs or
              governance disagreements.
            </p>
          </div>
        </div>
      </div>
      <div className={styles.featureBox}>
        <div className={styles.icon}>
          <Image src="/social.png" alt="social" fill={true} />
        </div>
        <div className={styles.featureBoxheader}>
          <h1>Social</h1>
          <div className={styles.featureBoxp}>
            <p className={styles.featureText}>
              Encourages working together, enhancing gameplay and increased
              sociability.
            </p>
          </div>
        </div>
      </div>
      <div className={styles.featureBox}>
        <div className={styles.icon}>
          <Image src="/circle-check-solid 1.png" alt="check" fill={true} />
        </div>
        <div className={styles.featureBoxheader}>
          <h1>Permissionless</h1>
          <div className={styles.featureBoxp}>
            <p className={styles.featureText}>
              Anyone can create a guild in a few clicks. From small group of
              friends to a High Net Worth DAO.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureGrid;
