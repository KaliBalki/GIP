"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import EmblaCarousel from "../_components/Players/Carousel/EmblaCarousel";
import { EmblaOptionsType } from "embla-carousel";
import "../_components/Players/Carousel/Css/embla.css";
const OPTIONS: EmblaOptionsType = {
  loop: true,
  align: "center",
  containScroll: "trimSnaps",
};

const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (custom: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: custom, // Custom delay for each section
    },
  }),
};
const SLIDE_COUNT = 10;
const SLIDES = Array.from(Array(SLIDE_COUNT).keys());
const Home: React.FC = () => {
  return (
    <>
      <div className="pt-32 md:pl-96">
        <div className="flex md:flex-row flex-col text-white justify-center items-center md:space-x-32 space-y-8">
          <Image
            src="/NoBG_White.png"
            width={300}
            height={300}
            alt="Picture of the author"
            className="w-48 h-48 md:w-72 md:h-72"
          />
          <div className="md:w-full text-center md:px-0 px-20">
            <div className=" md:text-8xl text-4xl font-bold">TeamName</div>
            <hr className="md:border-4 md:my-4 border my-2 border-white w-full " />
            <div className="text-TitleColor flex flex-row space-x-10 text-xl">
              <div>Squad</div>
              <div>Fixtures</div>

              <div>Discord</div>
            </div>
          </div>
        </div>
      </div>
      <div className="text-white text-7xl flex justify-center pt-32 font-bold">
        Squad
      </div>
      <div>
        {/* Goalkeeper Section */}
        <motion.div
          className="pt-10 space-y-6 md:px-20 px-8"
          custom={1.7} // Delay for the first section
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <div className="font-bold text-white md:!px-32 text-2xl text-center">
            GOALKEEPER
          </div>
          <EmblaCarousel slides={SLIDES} options={OPTIONS} />
        </motion.div>

        {/* Defender Section */}
        <motion.div
          className="pt-10 space-y-6 md:px-20 px-8"
          custom={2.2} // Delay for the second section
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <div className="font-bold text-white md:!px-32 text-2xl text-center">
            DEFENDER
          </div>
          <EmblaCarousel slides={SLIDES} options={OPTIONS} />
        </motion.div>

        {/* Midfielder Section */}
        <motion.div
          className="pt-10 space-y-6 md:px-20 px-8"
          custom={2.7} // Delay for the third section
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <div className="font-bold text-white md:!px-32 text-2xl text-center">
            MIDFIELDER
          </div>
          <EmblaCarousel slides={SLIDES} options={OPTIONS} />
        </motion.div>

        {/* Striker Section */}
        <motion.div
          className="pt-10 space-y-6 md:px-20 px-8"
          custom={3.2} // Delay for the fourth section
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <div className="font-bold text-white md:!px-32 text-2xl text-center">
            STRIKER
          </div>
          <EmblaCarousel slides={SLIDES} options={OPTIONS} />
        </motion.div>
      </div>
      <div className="text-white text-7xl flex justify-center pt-32 font-bold">
        Fixtures
      </div>
    </>
  );
};

export default Home;
