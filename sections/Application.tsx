import React from "react";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import ApplicationGrid from "@/components/ApplicationGrid";

const Application = () => {
  return (
    <div className={styles.application}>
      <Image
        className={styles.logostark}
        src="/logo-stark.svg"
        alt="Logo"
        width={455}
        height={494}
      />
      <div className={styles.applicationContent}>
        <div className={styles.applicationHeader}>
          <h1>Application</h1>
        </div>

        <ApplicationGrid />
      </div>
    </div>
  );
};

export default Application;
