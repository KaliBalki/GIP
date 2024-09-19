import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";

const Intro1 = () => {
  const textRef = useRef(null);
  const imageRef = useRef(null);

  const textInView = useInView(textRef, { once: true });
  const imageInView = useInView(imageRef, { once: true });

  return (
    <div className="relative flex flex-col lg:flex-row items-center lg:items-start justify-between">
      <motion.div
        ref={textRef}
        initial={{ opacity: 0, x: -100 }}
        animate={textInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 1.3, ease: "easeOut" }}
        className="md:w-[800px] lg:pl-[56px] flex flex-col space-y-4 px-2"
      >
        <div className="text-white md:text-5xl text-3xl font-bold md:text-left text-center Grotesk">
          The Ultimate Competitive Experience
        </div>

        <div className="text-white/75 text-base font-extralight md:text-left text-center">
          eField offers a cutting-edge platform designed to elevate your gaming
          skills. Compete in a dynamic environment that fosters growth,
          encourages teamwork, and rewards precision. Our advanced analytics and
          real-time feedback tools ensure that every game is a step towards
          mastery.
        </div>
      </motion.div>

      <motion.div
        ref={imageRef}
        initial={{ opacity: 0, x: 100 }}
        animate={imageInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 1.3, ease: "easeOut" }}
        className="absolute -top-20 w-[737px] h-[408px] rounded-3xl overflow-hidden  lg:right-[-35%] xl:right-[-21%] 2xl:right-[-7%] bg-gradient-to-r from-[#f6934c] via-[#c261d1] to-[#4a2684] p-[8px] hidden lg:block"
      >
        <div className="w-full h-full rounded-3xl bg-black">
          <Image
            src="/HomeBg.png"
            alt="Competitive Experience"
            layout="fill"
            objectFit="cover"
            className="rounded-3xl"
          />
        </div>
      </motion.div>
    </div>
  );
};

export default Intro1;
