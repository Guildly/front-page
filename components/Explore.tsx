import React from "react";
import { motion } from "framer-motion";
import ExploreCard from "./ExploreCard";
import { FaArrowRight, FaWallet } from "react-icons/fa";

type Props = {};

const Explore = (props: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen flex relative overflow-hidden flex-col text-left md:flex-row max-w-full px-15 justify-evenly mx-auto items-center border-white border-b-2"
    >
      <h3 className="absolute top-20 uppercase tracking-[20px] text-gray-400 text-2xl">
        Explore
      </h3>

      <div className="w-full flex space-x-10 overflow-x-scroll p-8 mt-24 snap-x snap-mandatory">
        <ExploreCard />
        <ExploreCard />
        <ExploreCard />
        <ExploreCard />
      </div>
      <FaArrowRight style={{ height: 20, width: 20, color: "grey" }} />
    </motion.div>
  );
};

export default Explore;
