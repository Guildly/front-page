import React from "react";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import ApplicationGrid from "@/components/ApplicationGrid";
import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const fadeVariant = {
  visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  hidden: { opacity: 0, y: 200 },
};

const Application = () => {
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
    <section id="application" className={styles.section}>
      <motion.div
        ref={ref}
        variants={fadeVariant}
        initial="hidden"
        animate={control}
        className={styles.application}
      >
        <div className={styles.applicationContent}>
          <div className={styles.applicationHeader}>
            <h1>Application</h1>
          </div>
          <ApplicationGrid />
        </div>
        <div className={styles.applicationDesigns}>
          <Image src="/designs.png" alt="App Designs" fill={true} />
        </div>
      </motion.div>
    </section>
  );
};

export default Application;
