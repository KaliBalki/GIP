import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";

const Intro2 = () => {
  const textRef = useRef(null);
  const imageRef = useRef(null);

  const textInView = useInView(textRef, { once: true });
  const imageInView = useInView(imageRef, { once: true });

  return (
    <div className="md:pt-96 pt-32 flex flex-row-reverse items-center relative">
      <motion.div
        ref={textRef}
        initial={{ opacity: 0, x: 100 }}
        animate={textInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 1.3, ease: "easeOut" }}
        className="w-[800px] lg:pl-[56px] flex flex-col space-y-4 md:pr-12"
      >
        <div className="text-white md:text-5xl text-3xl font-bold md:text-left text-center Grotesk">
          Elevate Your Gameplay with us
        </div>

        <div className="text-white/75 text-base font-extralight md:text-left text-center">
          Discover eField, where innovation meets competition. Our platform
          enhances your esports experience with real-time analysis, customized
          coaching, and a community that fosters growth. Join us and take your
          skills to the next level.
        </div>
      </motion.div>

      <motion.div
        ref={imageRef}
        initial={{ opacity: 0, x: -100 }}
        animate={imageInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 1.3, ease: "easeOut" }}
        className="absolute w-[737px] h-[408px] rounded-3xl overflow-hidden  lg:left-[-35%] xl:left-[-21%] 2xl:left-[-7%] bg-gradient-to-l from-[#f6934c] via-[#c261d1] to-[#4a2684] p-[8px] hidden lg:block"
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

export default Intro2;
