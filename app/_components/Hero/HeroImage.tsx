import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const HeroImage = () => {
  return (
    <div className="absolute inset-0 flex justify-end items-center -z-30 md:visible collapse">
      <motion.div
        className="relative w-3/4 h-[110%] transform translate-x-20 translate-y-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
      >
        <Image
          src="/HomeBg.png"
          alt="Background image for the home page"
          layout="fill"
          objectFit="contain"
        />
      </motion.div>
    </div>
  );
};

export default HeroImage;
