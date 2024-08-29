import React from "react";
import { motion } from "framer-motion";

const Title = () => {
  return (
    <div>
      <motion.h1
        className="text-8xl font-bold leading-tight text-TitleColor"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        Pass With
      </motion.h1>

      <motion.h1
        className="text-8xl font-bold leading-tight text-TitleColor"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
      >
        Precision, Make
      </motion.h1>
      <motion.h1
        className="text-8xl font-bold leading-tight text-TitleColor"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 1.4 }}
      >
        The Right Decision
      </motion.h1>
    </div>
  );
};

export default Title;
