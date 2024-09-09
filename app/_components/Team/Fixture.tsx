import React from "react";
import { motion } from "framer-motion";
import Controller from "../Fixtures/Controller";
import FixtureCards from "../Fixtures/FixtureCards";

const Fixtures = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }} // Customize duration here
    >
      <div className="flex justify-center pt-10 md:px-44 md:justify-start">
        <Controller />
      </div>
      <FixtureCards duration={0.1} />
    </motion.div>
  );
};

export default Fixtures;
