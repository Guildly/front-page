import Image from "next/image";
import styles from "@/styles/Home.module.css";
import Explore from "../components/Explore";
import Header from "@/sections/Header";
import Problem from "@/sections/Problem";
import Grid from "@/components/Grid";
import Navbar from "@/components/Navbar";
import Statement from "@/components/Statement";
import Solution from "@/sections/Solution";

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

      <Grid />
    </main>
  );
}
