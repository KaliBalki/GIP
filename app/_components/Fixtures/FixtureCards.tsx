import React from "react";
import FixturesCard from "./FixturesCard"; // Assuming FixturesCard is in the same folder
import { motion } from "framer-motion";

const FixtureCards = () => {
  return (
    <motion.div
      className="text-white opacity-65 font-light text-sm px-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, delay: 1.8 }}
    >
      <div className="flex justify-center pt-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4">
          <FixturesCard />
          <FixturesCard />
          <FixturesCard />
          <FixturesCard />
          <FixturesCard />
          <FixturesCard />
          <FixturesCard />
          <FixturesCard />
          <FixturesCard />
          <FixturesCard />
          <FixturesCard />
          <FixturesCard />
        </div>
      </div>
    </motion.div>
  );
};

export default FixtureCards;
