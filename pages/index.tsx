import Image from "next/image";
import styles from "@/styles/Home.module.css";
import Explore from "../components/Explore";
import Header from "@/sections/Header";
import Problem from "@/sections/Problem";
import Grid from "@/components/Grid";
import Navbar from "@/components/Navbar";
import Statement from "@/components/Statement";
import Solution from "@/sections/Solution";
import Feature from "@/sections/Feature";
import Application from "@/sections/Application";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <main className={styles.main}>
        <Navbar />
        <Header />

        <section id="about">
          <Problem />
        </section>

        <div className={styles.celticBackground} />
        <Statement />

        <Solution />

        <Feature />
        <div className={styles.featureBackground}></div>

        <Application />
        <div className={styles.applicationBackground}></div>
        <div className={styles.applicationBackgroundMob}></div>

        {/* <Grid /> */}

        <Footer />
      </main>
    </>
  );
}
