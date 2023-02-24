import Image from "next/image";
import styles from "@/styles/Home.module.css";
import Explore from "../components/Explore";
import Header from "@/sections/Header";
import About from "@/sections/About";
import Grid from "@/components/Grid";
import Navbar from "@/components/Navbar";
import Statement from "@/sections/Statement";
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
        <About />
        <div className={styles.celticBackground} />
        <Statement />
        <Solution />
        <Feature />
        <div className={styles.featureBackground} />
        <Application />
        <h1 className={styles.rule}>RULE WELL AND CONQUER ALL!</h1>
        <div className={styles.applicationBackground} />
        <Footer />
      </main>
    </>
  );
}
