import React from "react";
import { motion } from "framer-motion";

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
          className="md:text-8xl text-6xl text-TitleColor font-bold"
          initial={{ opacity: 0, y: 50 }} // Starting position (faded out and down)
          animate={{ opacity: 1, y: 0 }} // Final position (fully visible and moved up)
          transition={{ duration: 1 }} // Animation duration (1.2 seconds)
        >
          {title}
        </motion.div>
        <motion.div
          className="text-white opacity-65 font-light text-sm px-8"
          initial={{ opacity: 0, y: 50 }} // Subtle fade-in for subtitle and description
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }} // Delay subtitle and description to appear slightly later
        >
          <div>{subtitle}</div>
          <div>{description}</div>
        </motion.div>
      </div>
    </div>
  );
};

export default Titles;
