import React from "react";
import Image from "next/image";
const Intro1 = () => {
  return (
    <div>
      <div className="md:w-[800px] md:pl-[56px]  flex flex-col space-y-4 px-2">
        <div className="text-white md:text-5xl text-3xl font-bold md:text-left text-center">
          The Ultimate Competitive Experience
        </div>

        <div className="text-white/75 text-base font-extralight md:text-left text-center">
          eField offers a cutting-edge platform designed to elevate your gaming
          skills. Compete in a dynamic environment that fosters growth,
          encourages teamwork, and rewards precision. Our advanced analytics and
          real-time feedback tools ensure that every game is a step towards
          mastery.
        </div>

        <div className="absolute top-40 w-[737px] h-[408px] rounded-3xl overflow-hidden right-[-60vw] lg:right-[-40%] xl:right-[-5%] bg-gradient-to-r from-[#f6934c] via-[#c261d1] to-[#4a2684] p-[8px] hidden lg:block">
          <div className="w-full h-full rounded-3xl bg-black">
            <Image
              src="/HomeBg.png" // Replace with your image path
              alt="Competitive Experience"
              layout="fill" // Ensures the image fills the container
              objectFit="cover" // Ensures the image covers the area and maintains aspect ratio
              className="rounded-3xl" // Apply the same border-radius to the image
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro1;
