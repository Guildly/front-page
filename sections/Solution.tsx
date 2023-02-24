import React from "react";
import styles from "@/styles/Home.module.css";
import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const fadeVariant = {
  visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  hidden: { opacity: 0, y: 200 },
};

const panelFlashVariant = {
  visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  hidden: { opacity: 0 },
};

const panel1Variant = {
  visible: { opacity: 1, y: 0, x: 0, transition: { duration: 1, delay: 2 } },
  hidden: { opacity: 0, y: 300, x: -300 },
};

const panel2Variant = {
  visible: { opacity: 1, y: 0, x: 0, transition: { duration: 1, delay: 2.5 } },
  hidden: { opacity: 0, y: 300, x: 300 },
};

const panel3Variant = {
  visible: { opacity: 1, y: 0, x: 0, transition: { duration: 1, delay: 3 } },
  hidden: { opacity: 0, y: 300, x: 0 },
};

const Solution = () => {
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
    <section id="solution" className={styles.section}>
      <motion.div
        ref={ref}
        variants={fadeVariant}
        initial="hidden"
        animate={control}
        className={styles.solution}
      >
        <div className={styles.solutionscontent}>
          <div>
            <motion.div
              ref={ref}
              variants={fadeVariant}
              initial="hidden"
              animate={control}
            >
              <h1 className={styles.solutionsheader}>
                A decentralized guild framework
              </h1>
            </motion.div>
            <motion.div
              ref={ref}
              variants={fadeVariant}
              initial="hidden"
              animate={control}
            >
              <p className={styles.solutionsp}>Bridging to L2 and beyond</p>
            </motion.div>
          </div>
          <div className={styles.solutionsgrid}>
            <div className={styles.solutionsgrid1}>
              <motion.div
                ref={ref}
                variants={panel1Variant}
                initial="hidden"
                animate={control}
                className={styles.solutionsbox1}
              >
                {/* <motion.div
                  ref={ref}
                  variants={panelFlashVariant}
                  initial="hidden"
                  animate={control}
                > */}
                <h1>NFT Sharing</h1>
                <p>
                  Game items are shared between everyone in a guild. Depositors
                  remain in custody of the items and permissions dictate the
                  item uses.
                </p>
                <p>
                  No third party risks and collaterization. A significant
                  improvement on the DAO lending model.
                </p>
                {/* </motion.div> */}
              </motion.div>
              <motion.div
                ref={ref}
                variants={panel2Variant}
                initial="hidden"
                animate={control}
                className={styles.solutionsbox2}
              >
                <h1>Shared Accounts</h1>
                <p>
                  Guilds are shared accounts, allowing multiple users to control
                  them together. This opens opportunities for joint decision
                  making and multiple users to dictate actions.
                </p>
              </motion.div>
            </div>
            <div className={styles.solutionsgrid2}>
              <motion.div
                ref={ref}
                variants={panel3Variant}
                initial="hidden"
                animate={control}
                className={styles.solutionsbox3}
              >
                <h1>Customizable Structure</h1>
                <p>
                  Guilds are designed in a modular way allowing for guilds to
                  decide on their mechanics.
                </p>
                <p>
                  From implementing fee systems to choosing the governance
                  strategies, anything is possible.
                </p>
              </motion.div>
            </div>
          </div>
          <div>
            <div className={styles.solutionsfooter}>
              <p>100x</p>
            </div>
            <div className={styles.solutionsfooterp}>
              growth in game adoption
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Solution;
