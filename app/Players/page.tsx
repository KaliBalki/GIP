"use client";
import React, { useState } from "react";
import Titles from "../_components/Overall/Titles/Titles";
import { EmblaOptionsType } from "embla-carousel";
import "../_components/Players/Carousel/Css/embla.css";
import EmblaCarousel from "../_components/Players/Carousel/EmblaCarousel";
import { motion } from "framer-motion"; // Import from framer-motion
import SearchPlayers from "../_components/Players/SearchPlayers";

const OPTIONS: EmblaOptionsType = {
  loop: true,
  align: "center",
  containScroll: "trimSnaps",
};

const SLIDE_COUNT = 10;
const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

// Animation variants
const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (custom: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: custom,
    },
  }),
};

const Page: React.FC = () => {
  const [selectedPlayer, setSelectedPlayer] = useState<string | null>(null); // State to track selected player

  return (
    <>
      <Titles
        title="Players"
        subtitle="Meet the Players that define the Efield League."
        description="From fierce rivalries to unforgettable moments, these people bring the game to life."
      />
      <motion.div
        className="flex justify-center md:mt-4 mt-5 mb-10"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.9 }}
      >
        <div className="flex justify-center md:mt-4 mt-5 mb-10">
          <SearchPlayers setSelectedPlayer={setSelectedPlayer} />
        </div>
      </motion.div>
      <div className="mb-32">
        <motion.div
          className="pt-10 space-y-6 md:px-20 px-8"
          custom={1.7}
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <div className="font-bold text-white md:!px-32 text-2xl text-center">
            TOP GOALKEEPER
          </div>
          <EmblaCarousel slides={SLIDES} options={OPTIONS} />
        </motion.div>

        {/* Defender Section */}
        <motion.div
          className="pt-10 space-y-6 md:px-20 px-8"
          custom={2.2} // Delay for the second section
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <div className="font-bold text-white md:!px-32 text-2xl text-center">
            TOP DEFENDER
          </div>
          <EmblaCarousel slides={SLIDES} options={OPTIONS} />
        </motion.div>

        {/* Midfielder Section */}
        <motion.div
          className="pt-10 space-y-6 md:px-20 px-8"
          custom={2.7} // Delay for the third section
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <div className="font-bold text-white md:!px-32 text-2xl text-center">
            TOP MIDFIELDER
          </div>
          <EmblaCarousel slides={SLIDES} options={OPTIONS} />
        </motion.div>

        {/* Striker Section */}
        <motion.div
          className="pt-10 space-y-6 md:px-20 px-8"
          custom={3.2} // Delay for the fourth section
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <div className="font-bold text-white md:!px-32 text-2xl text-center">
            TOP STRIKER
          </div>
          <EmblaCarousel slides={SLIDES} options={OPTIONS} />
        </motion.div>
      </div>
    </>
  );
};

export default Page;
