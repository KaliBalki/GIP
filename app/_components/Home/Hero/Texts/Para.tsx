import React from "react";
import { motion } from "framer-motion";

const Para = () => {
  return (
    <motion.p
      className="md:text-lg text-base mb-8 text-zinc-400 font-light md:text-left text-center pt-3"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, ease: "easeOut", delay: 2.6 }}
    >
      Waar elke actie telt en elke speler schittert.
      <br />
      Welkom bij Cora Central.
    </motion.p>
  );
};

export default Para;
