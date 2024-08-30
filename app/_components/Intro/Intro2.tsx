import React from "react";
import Image from "next/image";
const Intro2 = () => {
  return (
    <div className="md:pt-96 pt-32 flex flex-row-reverse items-center">
      <div className="w-[800px] md:pl-[56px] flex flex-col space-y-4 px-4">
        <div className="text-white md:text-5xl text-3xl font-bold md:text-left text-center">
          Elevate Your Gameplay with us
        </div>

        <div className="text-white/75 text-base font-extralight md:text-left text-center">
          Discover eField, where innovation meets competition. Our platform
          enhances your esports experience with real-time analysis, customized
          coaching, and a community that fosters growth. Join us and take your
          skills to the next level.
        </div>
      </div>

      <div className="absolute w-[737px] h-[408px] rounded-3xl overflow-hidden left-[-60vw] lg:left-[-40%] xl:left-[-5%] bg-gradient-to-l from-[#f6934c] via-[#c261d1] to-[#4a2684] p-[8px] hidden lg:block">
        <div className="w-full h-full rounded-3xl bg-black">
          <Image
            src="/path/to/your/image.jpg"
            alt="Competitive Experience"
            layout="fill"
            objectFit="cover"
            className="rounded-3xl"
          />
        </div>
      </div>
    </div>
  );
};

export default Intro2;
