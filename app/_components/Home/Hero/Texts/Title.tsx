import React from "react";
import { motion } from "framer-motion";

const Title = () => {
  return (
    <div className="md:text-left text-center  Grotesk">
      <motion.h1
        className="md:text-8xl text-5xl font-black text-transparent bg-clip-text bg-[linear-gradient(to_right,#6bff6b,#324332,#009200,#004200)] bg-[length:200%_auto] hover:animate-gradient"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        Pas Met Precisie
      </motion.h1>

      <motion.h1
        className="md:text-8xl text-5xl font-black text-transparent bg-clip-text bg-[linear-gradient(to_right,#6bff6b,#324332,#009200,#004200)] bg-[length:200%_auto] hover:animate-gradient"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
      >
        Maak De Juiste
      </motion.h1>

      <motion.h1
        className="md:text-8xl text-5xl font-black  text-transparent bg-clip-text bg-[linear-gradient(to_right,#6bff6b,#324332,#009200,#004200)] bg-[length:200%_auto] hover:animate-gradient"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 1.4 }}
      >
        Beslissing
      </motion.h1>
    </div>
  );
};

export default Title;
