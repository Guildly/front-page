import React from "react";
import styles from "@/styles/Home.module.css";

const Statement = () => {
  return (
    <section id="problem" className={styles.statement}>
      <div className={styles.quote}>
        <h2>
          <div className={styles.quoteMark1}>&quot;</div>
          <p>
            Guild models are managed by large DAO&apos;s with strict and
            selective entry requirements.
          </p>
          <div className={styles.quoteMark2}>&quot;</div>
        </h2>
      </div>
      <div className={styles.statementContent}>
        <div className={styles.statementContentBox}>
          <ul>
            <p>This leads to:</p>
            <li>
              <span>Expensive Scholarship Fees</span>
            </li>
            <li>
              <span>Poor Accessibility</span>
            </li>
            <li>
              <span>Lack of Transparency</span>
            </li>
            <li>
              <span>Collateral</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Statement;
