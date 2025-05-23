import React from "react";
import Image from "next/image";
import { motion } from "framer-motion"; // Import framer-motion

const Line = () => {
  return (
    <div className="w-full md:h-14 h-12 bg-gradient-to-r from-[#324332] to-[#6bff6b] justify-start items-center gap-2.5 inline-flex mt-10">
      <motion.div
        className="font-bold text-white flex flex-row space-x-4 pl-6"
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, ease: "easeOut", delay: 2.3 }}
      >
        <Image
          src="/NoBG_White.png"
          width={30}
          height={30}
          alt="Picture of the author"
        />
        <div className="md:text-2xl text-lg text-center">eField - Div 1</div>
      </motion.div>
    </div>
  );
};

export default Line;
