import React from "react";
import { motion } from "framer-motion";

const Title = () => {
  return (
    <div className="md:text-left text-center  Grotesk">
      <motion.h1
        className="md:text-8xl text-5xl font-black text-transparent bg-clip-text bg-[linear-gradient(to_right,#f6934c,#c261d1,#4a2684,#f6934c)] bg-[length:200%_auto] hover:animate-gradient"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        Pass With
      </motion.h1>

      <motion.h1
        className="md:text-8xl text-5xl font-black text-transparent bg-clip-text bg-[linear-gradient(to_right,#f6934c,#c261d1,#4a2684,#f6934c)] bg-[length:200%_auto] hover:animate-gradient"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
      >
        Precision, Make
      </motion.h1>

      <motion.h1
        className="md:text-8xl text-4xl font-black !leading-normal text-transparent bg-clip-text bg-[linear-gradient(to_right,#f6934c,#c261d1,#4a2684,#f6934c)] bg-[length:200%_auto] hover:animate-gradient"
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
