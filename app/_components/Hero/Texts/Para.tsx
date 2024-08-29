import React from "react";
import { motion } from "framer-motion";

const Para = () => {
  return (
    <motion.p
      className="text-lg mb-8 text-zinc-400 font-light"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, ease: "easeOut", delay: 1.8 }}
    >
      Where every play matters, and every player shines.
      <br />
      Welcome to eField.
    </motion.p>
  );
};

export default Para;
