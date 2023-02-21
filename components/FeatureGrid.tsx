import React from "react";
import styles from "@/styles/Home.module.css";
import Image from "next/image";

const FeatureGrid = () => {
  return (
    <div className={styles.Featuregrid}>
      <div className={styles.FeatureBox}>
        <Image
          className={styles.icon}
          src="/handshake-simple-solid 1.png"
          alt="handshake"
          width={75}
          height={60}
        />
        <div className={styles.FeatureBoxheader}>
          <h1>Trustless</h1>
          <div className={styles.FeatureBoxp}>
            <p>
              The protocol enforces security without compromising accessibility.
            </p>
          </div>
        </div>
      </div>
      <div className={styles.FeatureBox}>
        <Image
          className={styles.icon}
          src="/chart-line-solid 1.png"
          alt="chart"
          width={62}
          height={62}
        />
        <div className={styles.FeatureBoxheader}>
          <h1>Scalable</h1>
          <div className={styles.FeatureBoxp}>
            <p>
              There are no limitations that come with managing DAO&apos;s or
              governance disagreements.
            </p>
          </div>
        </div>
      </div>
      <div className={styles.FeatureBox}>
        <Image
          className={styles.icon}
          src="/social.png"
          alt="social"
          width={64.45}
          height={51.66}
        />
        <div className={styles.FeatureBoxheader}>
          <h1>Social</h1>
          <div className={styles.FeatureBoxp}>
            <p>
              Encourages working together, enhancing gameplay and increased
              sociability.
            </p>
          </div>
        </div>
      </div>
      <div className={styles.FeatureBox}>
        <Image
          className={styles.icon}
          src="/circle-check-solid 1.png"
          alt="check"
          width={56}
          height={56}
        />
        <div className={styles.FeatureBoxheader}>
          <h1>Permissionless</h1>
          <div className={styles.FeatureBoxp}>
            <p>
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
