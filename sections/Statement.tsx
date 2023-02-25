import React from "react";
import styles from "@/styles/Home.module.css";
import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const fadeVariant = {
  visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  hidden: { opacity: 0, y: 200 },
};

const Statement = () => {
  const control = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      control.start("visible");
    } else {
      control.start("hidden");
    }
  }, [control, inView]);
  return (
    <section id="problem" className={styles.section}>
      <motion.div
        ref={ref}
        variants={fadeVariant}
        initial="hidden"
        animate={control}
        className={styles.statement}
      >
        <div className={styles.quote}>
          <h2>
            <div className={styles.quoteMark1}>&quot;</div>
            <p>
              Guild models are managed by large DAOs with strict and selective
              entry requirements.
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
      </motion.div>
    </section>
  );
};

export default Statement;
