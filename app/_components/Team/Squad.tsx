import React from "react";
import { motion } from "framer-motion";
import CardGridPlayer from "../../../components/Cards/Player/Grid/CardGridPlayer";

const Squad = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }} // Start with opacity 0
      animate={{ opacity: 1 }} // Animate to opacity 1
      exit={{ opacity: 0 }} // On exit, fade out
      transition={{ duration: 0.8 }} // Duration of the transition
    >
      <div className="flex flex-col md:justify-center px-4 pt-10 w-full md:!px-40">
        <p className="text-white text-xl font-semibold mb-3">GOALKEEPER</p>
        <CardGridPlayer />
      </div>
      <div className="flex flex-col md:justify-center px-4 pt-10 w-full md:!px-40">
        <p className="text-white text-xl font-semibold mb-3">DEFENDER</p>
        <CardGridPlayer />
      </div>
      <div className="flex flex-col md:justify-center px-4 pt-10 w-full md:!px-40">
        <p className="text-white text-xl font-semibold mb-3">MIDDLEFIELDER</p>
        <CardGridPlayer />
      </div>
      <div className="flex flex-col md:justify-center px-4 pt-10 w-full md:!px-40">
        <p className="text-white text-xl font-semibold mb-3">STRIKER</p>
        <CardGridPlayer />
      </div>
    </motion.div>
  );
};

export default Squad;
