import React from "react";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import ApplicationGrid from "@/components/ApplicationGrid";

const Application = () => {
  return (
    <section id="application" className={styles.section}>
      <div className={styles.application}>
        <div className={styles.applicationContent}>
          <div className={styles.applicationHeader}>
            <h1>Application</h1>
          </div>
          <ApplicationGrid />
        </div>
      </div>
    </section>
  );
};

export default Application;
