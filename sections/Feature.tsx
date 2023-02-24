import React from "react";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import FeatureGrid from "@/components/FeatureGrid";
import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const fadeVariant = {
  visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  hidden: { opacity: 0, y: 200 },
};

const Feature = () => {
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
    <section id="feature" className={styles.section}>
      <motion.div
        ref={ref}
        variants={fadeVariant}
        initial="hidden"
        animate={control}
        className={styles.feature}
      >
        <h1>Guild Accounts</h1>
        <p>
          Anyone can create a guild account. No collateral. No monopolization.
          Trustless. Permissionless.
        </p>
        <div>
          <FeatureGrid />
        </div>
      </motion.div>
    </section>
  );
};

export default Feature;
