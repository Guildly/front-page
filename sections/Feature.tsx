import React from "react";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import FeatureGrid from "@/components/FeatureGrid";

const Feature = () => {
  return (
    <section id="feature" className={styles.section}>
      <div className={styles.feature}>
        <h1>Guild Accounts</h1>
        <p>
          Anyone can create a guild account. No collateral. No monopolization.
          Trustless. Permissionless.
        </p>
        <div>
          <FeatureGrid />
        </div>
      </div>
    </section>
  );
};

export default Feature;
