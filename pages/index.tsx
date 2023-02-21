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

export default function Home() {
  return (
    <main className={styles.main}>
      <Navbar />
      <Header />

      <section id="about" className="snap-center overflow-x-scroll"></section>
      <Problem />
      <div className={styles.celticBackground} />
      <section id="problem" className="snap-center overflow-x-scroll"></section>
      <Statement />

      <section
        id="solution"
        className="snap-center overflow-x-scroll"
      ></section>
      <Solution />

      <section id="feature" className="snap-center overflow-x-scroll"></section>
      <Feature />
      <div className={styles.featureBackground}></div>

      <section
        id="application"
        className="snap-center overflow-x-scroll"
      ></section>
      <Application />
      <div className={styles.applicationBackground}></div>

      {/* <Grid /> */}
    </main>
  );
}
