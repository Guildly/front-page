import React from "react";
import { motion } from "framer-motion";
import { SocialIcon } from "react-social-icons";

const ExploreCard = () => {
  return (
    <article className="flex flex-col rounded-lg mt-6 items-center space-y-4 flex-shrink-0 w-[700px] md:w-[500px] xl:w-[700px] snap-center border-[2px] border-yellow-400 p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden">
      <motion.img
        initial={{
          y: -100,
          opacity: 0,
        }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="w-32 h-32 rounded-full md:rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center"
        src="https://realmseternum.com/_next/image?url=/realms-art/mobile/warRoom-mobile.png&w=750&q=75"
        alt="realmseternum"
      ></motion.img>

      <div className="px-0 md:px-10">
        <h4 className="text-lg text-center font-bold">Realms</h4>
        <p className="font-light text-center text-md mt-1">
          The Realms are your fantasy universe
        </p>
      </div>
      <p className="space-y-4 ml-2 text-sm ">
        ETERNUM is the first module in an infinitely expanding player-owned game
        world. A next generation MMO. Raise empires, raid resources, control
        relics. Maintain your cities and finesse your forces, or fall into ruin.
        Real-time, deeply strategic gameplay. On-chain and unstoppable. Eternal
        play is made possible by StarkNet and Ethereum. Each Realm is a unique
        and powerful state, capable of producing resources and raising armies.
        There are 8,000 Realms.
      </p>
      <div className="flex space-x-2 my-2 items-center grayscale hover:grayscale-0">
        <SocialIcon
          url="https://twitter.com/"
          style={{ height: 30, width: 30 }}
        />
        <SocialIcon
          url="https://discord.com/"
          style={{ height: 30, width: 30 }}
        />
      </div>
    </article>
  );
};

export default ExploreCard;
