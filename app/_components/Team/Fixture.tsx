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
      transition={{ duration: 0.8 }}
    >
      <div className="flex justify-center pt-10 2xl:px-[40rem] xl:px-[30rem] lg:px-[20rem] md:px-[15rem] sm:px-[5rem] px-[2rem] md:justify-start">
        <Controller />
      </div>
      <div className="pt-10 2xl:px-[10rem] xl:px-[8rem] lg:px-[3rem] md:px-[5rem] sm:px-[4rem] px-[2rem] md:justify-start">
        <FixtureCards />
      </div>
    </motion.div>
  );
};

export default Fixtures;
