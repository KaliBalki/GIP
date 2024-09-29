"use client";

import React from "react";
import { AnimatePresence, motion } from "framer-motion";

interface TitlesProps {
  title: string;
  subtitle: string;
  description: string;
}

const Titles: React.FC<TitlesProps> = ({ title, subtitle, description }) => {
  return (
    <div>
      <div className="flex flex-col justify-center text-center pt-20 space-y-6">
        <motion.div
          className="md:text-8xl text-6xl text-TitleColor font-black Grotesk"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {title}
        </motion.div>
        <motion.div
          className="text-white opacity-65 font-light text-sm px-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <div>{subtitle}</div>
          <div>{description}</div>
        </motion.div>
      </div>
    </div>
  );
};

export default Titles;
