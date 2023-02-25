import React from "react";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const fadeVariant = {
  visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  hidden: { opacity: 0, y: 200 },
};

const card1Variant = {
  visible: { opacity: 1, y: 0, x: 0, transition: { duration: 1, delay: 1 } },
  hidden: { opacity: 0, y: -300, x: 300 },
};

const card2Variant = {
  visible: { opacity: 1, y: 0, x: 0, transition: { duration: 1, delay: 1.5 } },
  hidden: { opacity: 0, y: -300, x: 300 },
};

const card3Variant = {
  visible: { opacity: 1, y: 0, x: 0, transition: { duration: 1, delay: 2 } },
  hidden: { opacity: 0, y: -300, x: 300 },
};

const About = () => {
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
    <section id="about" className={styles.section}>
      <motion.div
        ref={ref}
        variants={fadeVariant}
        initial="hidden"
        animate={control}
        className={styles.about}
      >
        <div className={styles.aboutContent}>
          <h1>What happened to peer to peer?</h1>
          <div className={styles.aboutBox}>
            <p>
              Guildly is a decentralized protocol that allows for the management
              of shared accounts and the sharing of NFT assets in Web 3.0 games.
            </p>
          </div>
          <div className={styles.aboutBox2}>
            <p>
              Our goal is to make it easy for players to join and participate in
              guilds, and to facilitate the sharing and use of NFT assets in a
              fair and transparent manner.
            </p>
          </div>
        </div>

        <div className={styles.NFTCards}>
          <motion.div
            ref={ref}
            variants={card1Variant}
            initial="hidden"
            animate={control}
            className={styles.NFTCard1}
          >
            <Image src="/viking-card.png" alt="Viking card" fill={true} />
          </motion.div>
          <motion.div
            ref={ref}
            variants={card2Variant}
            initial="hidden"
            animate={control}
            className={styles.NFTCard2}
          >
            <Image src="/space-card.png" alt="Space card" fill={true} />
          </motion.div>
          <motion.div
            ref={ref}
            variants={card3Variant}
            initial="hidden"
            animate={control}
            className={styles.NFTCard3}
          >
            <Image src="/realm-card.png" alt="Realm card" fill={true} />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
