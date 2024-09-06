"use client";

import Titles from "../_components/Titles/Titles";
import Controller from "../_components/Fixtures/Controller";
import Line from "../_components/Fixtures/Line";
import FixtureCards from "../_components/Fixtures/FixtureCards";
import { motion } from "framer-motion";

const Home: React.FC = () => {
  return (
    <div className="overflow-x-hidden">
      <Titles
        title="Our League Fixtures"
        subtitle="Stay ahead of the game with the latest match schedules."
        description="Don't miss a moment of the action."
      />
      <div className="md:px-44 md:pt-20 pt-6 flex flex-col justify-center">
        {/* Animated Controller */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
        >
          <Controller />
        </motion.div>

        {/* Animated Line */}
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 1.6, delay: 1.8, ease: "easeInOut" }}
        >
          <Line />
        </motion.div>
      </div>
      <FixtureCards />
    </div>
  );
};

export default Home;
