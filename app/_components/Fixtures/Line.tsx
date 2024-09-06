import React from "react";
import Image from "next/image";
import { motion } from "framer-motion"; // Import framer-motion

const Line = () => {
  return (
    <div className="w-full h-10 bg-gradient-to-r from-[#6b419e] to-[#fd6208] justify-start items-center gap-2.5 inline-flex mt-10">
      <motion.div
        className="font-bold text-white flex flex-row space-x-4 pl-6"
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, ease: "easeOut", delay: 2.3 }}
      >
        <Image
          src="/NoBG_White.png"
          width={20}
          height={20}
          alt="Picture of the author"
        />
        {/* Animated Text */}
        <div>eField - Div 1</div>
      </motion.div>
    </div>
  );
};

export default Line;
